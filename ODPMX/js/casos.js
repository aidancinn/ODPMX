const grid=document.getElementById('casesGrid');
const search=document.getElementById('searchInput');
const filter=document.getElementById('statusFilter');
let cases=[];
async function loadCases(){const res=await fetch('data/casos.json');cases=await res.json();renderCases();}
function renderCases(){const q=(search.value||'').toLowerCase();const st=filter.value;const filtered=cases.filter(c=>{const txt=`${c.nombre} ${c.estado} ${c.ubicacion} ${c.resumen} ${(c.palabras||[]).join(' ')}`.toLowerCase();return txt.includes(q)&&(!st||c.estado===st);});grid.innerHTML=filtered.map(c=>`<article class="case-card"><span class="tag">${c.estado}</span><h3>${c.nombre}</h3><p>${c.resumen}</p><p><strong>Ubicación:</strong> ${c.ubicacion}</p><a class="btn btn-outline" href="caso.html?id=${c.id}">Ver caso</a></article>`).join('')||'<p>No hay resultados.</p>';}
search.addEventListener('input',renderCases);filter.addEventListener('change',renderCases);loadCases();
