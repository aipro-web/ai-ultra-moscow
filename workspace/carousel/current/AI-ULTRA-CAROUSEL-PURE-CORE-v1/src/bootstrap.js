window.__AIULTRA_SHOW_FATAL__=function(message){
  const el=document.getElementById('status');
  if(!el)return;
  el.textContent=message;
  el.classList.add('show');
};
window.addEventListener('error',event=>{
  if(event?.message) window.__AIULTRA_SHOW_FATAL__('Runtime error: '+event.message);
},true);
window.addEventListener('unhandledrejection',event=>{
  const reason=event?.reason;
  window.__AIULTRA_SHOW_FATAL__('Runtime error: '+((reason&&reason.message)||String(reason||'unknown error')));
});