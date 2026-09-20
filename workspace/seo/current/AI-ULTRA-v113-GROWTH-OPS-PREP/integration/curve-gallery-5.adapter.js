/* AI ULTRA v107 — optional adapter for Curve Gallery 5. Does not run unless imported by the scene. */
export async function loadAiUltraRoutes(base='./integration/curve-gallery-5.routes.json'){const r=await fetch(base);if(!r.ok)throw new Error('AI ULTRA routes '+r.status);return r.json();}
export function routeForCard(manifest, cardId){return manifest.cards.find(c=>c.cardId===cardId)?.route||'/';}
export function navigateCard(manifest, cardId,{replace=false}={}){const route=routeForCard(manifest,cardId);history[replace?'replaceState':'pushState']({cardId},'',route);window.dispatchEvent(new CustomEvent('aiultra:route',{detail:{cardId,route}}));return route;}
export function bindCardRoute(el,manifest,cardId){el.dataset.cardId=cardId;el.dataset.route=routeForCard(manifest,cardId);}

// v110 — front/back helpers. Essential copy should render as live DOM/HTML even when a raster texture sits underneath.
export function cardFaceContent(card,face='front'){return card?.faces?.[face]||card?.uiCopy||{};}
export function setCardFace(el,face='front'){const next=face==='back'?'back':'front';el.dataset.face=next;el.setAttribute('aria-expanded',String(next==='back'));window.dispatchEvent(new CustomEvent('aiultra:card-face',{detail:{cardId:el.dataset.cardId,face:next}}));return next;}
export function toggleCardFace(el){return setCardFace(el,el.dataset.face==='back'?'front':'back');}
