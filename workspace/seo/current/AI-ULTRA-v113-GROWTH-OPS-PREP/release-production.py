#!/usr/bin/env python3
from pathlib import Path
import sys,re,shutil

ROOT=Path(__file__).resolve().parent
STAGING='https://ai-ultra-telegram-system.burneykeith115283703.chatgpt.site'
if len(sys.argv)!=2 or not re.match(r'^https://[^/]+$',sys.argv[1].rstrip('/')):
    print('Usage: python release-production.py https://example.com')
    raise SystemExit(2)
PROD=sys.argv[1].rstrip('/')

# Restore production sitemap/robots templates first.
sp=ROOT/'sitemap.production.xml'
rp=ROOT/'robots.production.txt'
if not sp.exists() or not rp.exists():
    raise SystemExit('Missing sitemap.production.xml or robots.production.txt')
(ROOT/'sitemap.xml').write_text(sp.read_text('utf-8').replace(STAGING,PROD),'utf-8')
(ROOT/'robots.txt').write_text(rp.read_text('utf-8').replace(STAGING,PROD),'utf-8')

# Restore production robots meta only on pages marked by staging lock.
meta_re=re.compile(r'<meta\b(?=[^>]*\bname=["\']robots["\'])[^>]*>',re.I)
prod_attr=re.compile(r'\s+data-production-robots=(["\'])(.*?)\1',re.I|re.S)
content_attr=re.compile(r'\bcontent=(["\'])(.*?)\1',re.I|re.S)

for p in ROOT.rglob('*'):
    if not p.is_file() or p.name in {'sitemap.xml','robots.txt','sitemap.production.xml','robots.production.txt'}:
        continue
    if p.suffix.lower() not in {'.html','.json','.xml','.txt','.tsv','.md','.js','.mjs','.css'} and p.name!='_redirects':
        continue
    try: s=p.read_text('utf-8')
    except UnicodeDecodeError: continue
    orig=s
    if p.suffix.lower()=='.html':
        def fix_meta(m):
            tag=m.group(0)
            pm=prod_attr.search(tag)
            if not pm: return tag
            prodval=pm.group(2)
            cm=content_attr.search(tag)
            if cm:
                tag=tag[:cm.start(2)]+prodval+tag[cm.end(2):]
            tag=prod_attr.sub('',tag)
            return tag
        s=meta_re.sub(fix_meta,s)
    s=s.replace(STAGING,PROD)
    if s!=orig: p.write_text(s,'utf-8')
print(f'Production release prepared for {PROD}')
print('Verify sitemap.xml, robots.txt, canonical URLs and redirects before deployment.')
