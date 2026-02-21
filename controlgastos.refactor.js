// --- CONFIG Y TRADUCCIONES ---
const MONTH_NAMES_FULL = { es: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'], en: ['January','February','March','April','May','June','July','August','September','October','November','December'] };
const TRADUCTIONS = {
    es: { alertMissing:"Faltan campos.", alertGuardado:"¡Guardado!", alertMissingCat:"¡Seleccione una categoría!", confirmDelete:"¿Eliminar?", confirmDeleteAll:"¿BORRAR TODO?", alertNoExport:"Sin datos.", alertCSVEmpty:"Vacío.", alertImportSuccess:c=>`Importados ${c}.`, alertImportSuccessJSON:"¡Datos cargados!", alertImportErrorJSON:"Error archivo.", alertCatNombreExiste:n=>`"${n}" existe.`, alertCatNoSePuedeBorrar:n=>`"${n}" en uso.`, modalConfirmDeleteCat:n=>`¿Borrar "${n}"?`, toastGastoEliminado:"Eliminado.", toastCategoriaGuardada:"Guardada.", toastCategoriaEliminada:"Eliminada.", appTitle:"Control de Gastos", titleIngresoGasto:"Ingreso de Gasto", lblFecha:"Fecha:", lblCategoria:"Categoría:", lblDescripcion:"Descripción:", phEjCafe:"Ej: Café", lblValor:"Valor:", lblTipoPago:"Pago:", lblContado:"Efectivo", lblTarjeta:"Tarjeta", lblTransf:"Transf.", btnAddGasto:"➕", titleGastosMes:"Últimos Gastos", lblClicEditar:"Clic para editar", colFecha:"Fecha", colDesc:"Descripción", colValor:"Valor", lblTotal:"TOTAL", titleResumenMensual:"Resumen Mensual", titleTotalCategoria:"Total por Categoría", colTotal:"Total", colCategoria:"Categoría", titleDetalle:"Detalle", phBuscar:"Buscar...", lblTotalGeneral:"TOTAL GENERAL", btnAnterior:"Ant", btnSiguiente:"Sig", btnCsvMes:"Excel", titleResumenAnual:"Resumen Anual", titleTotalCatAnio:"Total Año", btnCsvAnio:"Excel", menuConfig:"Config", lblMoneda:"Moneda:", lblIdioma:"Idioma:", titleCategorias:"Personaliza tus Categorías", colNombre:"Nombre", colMeta: "Meta ($)", colAccion:"Acción", phNueva:"Nueva Categoría", titleDatos:"Gestión de Datos", btnBackup:"Crear Copia de Seguridad", btnImportar:"Restaurar Datos", btnBorrarTodo:"Eliminar Todos los Datos", titleEditar:"Editar", btnGuardar:"Guardar", btnBorrar:"Borrar", btnCancelar:"Cancelar", titleRenombrar:"Editar Categoría", titleConfirmar:"Confirmar", btnSi:"Sí", btnNo:"No", menuGasto:"Gasto", menuMes:"Mes", menuAnio:"Año", btnCargado:"¡Cargado!", msgGastoGuardado:"Gasto Guardado", btnVolver:"Volver", menuIngreso:"Ingreso", titleIngresoDinero:"Nuevo Ingreso", phDescIngreso:"Sueldo, Bono...", msgIngresoGuardado:"Ingreso Guardado", titleIngresosMes:"Últimos Ingresos", titleEditarIngreso:"Editar Ingreso", lblIngreso:"Ingreso", lblGasto:"Gasto", lblDisponible:"Disponible", lblDispCorto:"Disp:", lblFiltroPago:"Filtro por tipo de pago", lblVerTodos:"Todo", titleDetalleMensual:"Detalle Mensual", colMes:"Mes", colIngreso:"Ingreso", colSaldo:"Saldo", lblNombreCat:"Nombre:", lblMetaMensual:"Meta Mensual ($):", lblMeta:"Meta Mensual" },
    en: { alertMissing:"Missing fields.", alertGuardado:"Saved!", alertMissingCat:"Select category!", confirmDelete:"Delete?", confirmDeleteAll:"DELETE ALL?", alertNoExport:"No data.", alertCSVEmpty:"Empty.", alertImportSuccess:c=>`Imported ${c}.`, alertImportSuccessJSON:"Data Loaded!", alertImportErrorJSON:"Error.", alertCatNombreExiste:n=>`"${n}" exists.`, alertCatNoSePuedeBorrar:n=>`"${n}" used.`, modalConfirmDeleteCat:n=>`Delete "${n}"?`, toastGastoEliminado:"Deleted.", toastCategoriaGuardada:"Saved.", toastCategoriaEliminada:"Deleted.", appTitle:"Expense Tracker", titleIngresoGasto:"Add Expense", lblFecha:"Date:", lblCategoria:"Category:", lblDescripcion:"Description:", phEjCafe:"Ex: Coffee", lblValor:"Value:", lblTipoPago:"Payment:", lblContado:"Cash", lblTarjeta:"Card", lblTransf:"Transfer", btnAddGasto:"➕", titleGastosMes:"Recent Expenses", lblClicEditar:"Click to edit", colFecha:"Date", colDesc:"Description", colValor:"Value", lblTotal:"TOTAL", titleResumenMensual:"Monthly Summary", titleTotalCategoria:"Total by Category", colTotal:"Total", colCategoria:"Category", titleDetalle:"Detail", phBuscar:"Search...", lblTotalGeneral:"GRAND TOTAL", btnAnterior:"Prev", btnSiguiente:"Next", btnCsvMes:"Export", titleResumenAnual:"Annual Summary", titleTotalCatAnio:"Total Year", btnCsvAnio:"Export", menuConfig:"Config", lblMoneda:"Currency:", lblIdioma:"Language:", titleCategorias:"Customize Categories", colNombre:"Name", colMeta: "Goal ($)", colAccion:"Action", phNueva:"New Category", titleDatos:"Data", btnBackup:"⬆️ Backup", btnImportar:"⬇️ Import", btnBorrarTodo:"⚠️ Delete All", titleEditar:"Edit", btnGuardar:"Save", btnBorrar:"Delete", btnCancelar:"Cancel", titleRenombrar:"Edit Category", titleConfirmar:"Confirm", btnSi:"Yes", btnNo:"No", menuGasto:"Expense", menuMes:"Month", menuAnio:"Year", btnCargado:"Loaded!", msgGastoGuardado:"Saved", btnVolver:"Back", menuIngreso:"Income", titleIngresoDinero:"New Income", phDescIngreso:"Salary...", msgIngresoGuardado:"Saved", titleIngresosMes:"Recent Incomes", titleEditarIngreso:"Edit Income", lblIngreso:"Income", lblGasto:"Expense", lblDisponible:"Available", lblDispCorto:"Avail:", lblFiltroPago:"Filter Payment", lblVerTodos:"All", titleDetalleMensual:"Monthly Detail", colMes:"Month", colIngreso:"Income", colSaldo:"Balance", lblNombreCat:"Name:", lblMetaMensual:"Monthly Goal ($):", lblMeta:"Monthly Goal" }
};

// --- DICCIONARIO EMOJIS (AUTO-REPARACIÓN) ---
const EMOJI_MAP = {
    'comida': '🍔', 'alimento': '🍔', 'supermercado': '🛒', 'restaurante': '🍽️',
    'transporte': '🚌', 'bus': '🚌', 'taxi': '🚕', 'gasolina': '⛽', 'auto': '🚗',
    'hogar': '🏠', 'casa': '🏠', 'renta': '🔑', 'alquiler': '🔑', 'luz': '💡', 'agua': '💧', 'internet': '🌐',
    'salud': '💊', 'medico': '👨‍⚕️', 'farmacia': '🏥', 'deporte': '🏋️‍♀️', 'gym': '💪',
    'ocio': '🎉', 'cine': '🎬', 'juegos': '🎮', 'fiesta': '🥳',
    'educacion': '📚', 'escuela': '🎓', 'curso': '📝',
    'ropa': '👕', 'vestido': '👗', 'zapatos': '👟',
    'otros': '📦', 'regalo': '🎁', 'donacion': '🤝',
    'mascotas': '🐶', 'perro': '🐶', 'gato': '🐱'
};

// --- ESTADO ---
let gastos=[], ingresos=[], config={}, descripcionesUsadas=[], descripcionesIngresosUsadas=[], gastoEditandoId=null, ingresoEditandoId=null, categoriaEditandoNombreAntiguo=null, pinBuffer="", filtroPagoMensual='TODOS', filtroPagoHistorico='TODOS', filtroCategoriaHistorico='TODOS', anioSeleccionadoIngreso=new Date().getFullYear(), chartInstances={mensual:null, historico:null, historicoMeses:null, modal:null}, confirmCallback=null, toastTimeout=null, paginaActual=1, listaDetalleActual=[], listaParaMostrar=[], paginaActualGastosMes=1, paginaActualIngresosMes=1, smartValorInput="0", smartValorInputIngreso="0";
const ITEMS_PER_PAGE=12; const PALETA_COLORES=['#2563EB','#10B981','#F59E0B','#8B5CF6','#EC4899','#06B6D4','#64748B'];
const PIN_MAX_INTENTOS=5; const PIN_BLOQUEO_MINUTOS=5;

// --- INICIO ---
document.addEventListener('DOMContentLoaded', () => {
    if(typeof ChartDataLabels !== 'undefined') Chart.register(ChartDataLabels);
    cargarDatos();
    verificarPinInicio();
    inicializarUI();
    inicializarAccionesDeclarativas();
    inicializarListenerTecladoFisico();
    inicializarScrollCategoriasMouse();
    if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
});

function cargarDatos(){
    try{
        const def={
            moneda:'$', idioma:'es', 
            categorias:['🍔 Comida','🚌 Transporte','🏠 Hogar','💊 Salud','🎉 Ocio','📦 Otros'], 
            presupuestos:{}, pin:null, pinHash:null, pinSalt:null, fechaUltimoBackup:null, pinIntentos:0, pinBloqueadoHasta:null
        };        
        const loaded=JSON.parse(localStorage.getItem('config_v2'));
        config=loaded?{...def,...loaded}:def;
        
        // REPARACIÓN DE EMERGENCIA: Si las categorías se borraron, restaurarlas
        if(!config.categorias || config.categorias.length === 0){
            config.categorias = def.categorias;
        }

        if(!config.presupuestos) config.presupuestos={};
        
        gastos=JSON.parse(localStorage.getItem('gastos_v2'))||[];
        ingresos=JSON.parse(localStorage.getItem('ingresos_v2'))||[];
        gastos.forEach(g=>{if(!g.tipoPago)g.tipoPago='Contado'});
        gastos.sort(sortData); ingresos.sort(sortData);
        
        repararCategorias();

        descripcionesUsadas=[...new Set(gastos.map(g=>g.descripcion))];
        descripcionesIngresosUsadas=[...new Set(ingresos.map(i=>i.descripcion))];
        
        // --- CORRECCIÓN CLAVE AQUÍ ---
        // Usamos 'if' para que NO falle si ya borraste los selectores viejos
        const selMoneda = document.getElementById('configMoneda');
        if(selMoneda) selMoneda.value = config.moneda;

        const selIdioma = document.getElementById('configIdioma');
        if(selIdioma) selIdioma.value = config.idioma;

        const toggle = document.getElementById('togglePin');
        if(toggle) toggle.checked = pinEstaActivo();
        
        establecerFechaHoy(); 
        
        // Renderizamos ambos Grids (Gasto y Config)
        actualizarSelectCategorias(); 
        renderizarTablaCategorias(); 
        renderizarCategoriasSmart(); 
        
        actualizarSugerenciasDescripciones(descripcionesUsadas);
        actualizarSugerenciasIngresos(descripcionesIngresosUsadas);
        renderizarSelectores();
        
        actualizarDisplayValor(); 
        actualizarDisplayValorIngreso();
        renderizarGastosDelMes(); 
        renderizarIngresosAnuales();
        actualizarResumenMensual(); 
        actualizarResumenHistorico(); 
        actualizarSaldoHeader();
        verificarRecordatorioBackup();
        
        // Actualizamos las nuevas tarjetas
        if(typeof actualizarCardsConfig === 'function') actualizarCardsConfig();
        
    }catch(e){
        console.error("Error en cargarDatos:", e);
    }
}

// --- NUEVA FUNCIÓN DE AUTO-REPARACIÓN ---
function repararCategorias() {
    let changed = false;
    config.categorias = config.categorias.map(cat => {
        if (cat.match(/^[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/u)) return cat;
        const cleanName = cat.toLowerCase().trim();
        let icon = '🏷️';
        for (const [key, emoji] of Object.entries(EMOJI_MAP)) {
            if (cleanName.includes(key)) { icon = emoji; break; }
        }
        const newName = `${icon} ${cat}`;
        gastos.forEach(g => { if(g.categoria === cat) g.categoria = newName; });
        if(config.presupuestos[cat]) {
            config.presupuestos[newName] = config.presupuestos[cat];
            delete config.presupuestos[cat];
        }
        changed = true;
        return newName;
    });

    if(changed) {
        localStorage.setItem('config_v2', JSON.stringify(config));
        guardarGastos();
    }
}

// --- LOGICA SELECTORES UNIFICADA ---
function renderizarSelectores() {
    const sm = document.getElementById('filtroMes');
    if (sm) {
        const val = sm.value || (new Date().getMonth() + 1);
        sm.innerHTML = '';
        MONTH_NAMES_FULL[config.idioma].forEach((m, i) => sm.add(new Option(m, i + 1)));
        sm.value = val;
    }
    const sa = document.getElementById('filtroAnioMensual');
    const sh = document.getElementById('filtroAnioHistorico');
    if (sa && sh) {
        const valA = sa.value || new Date().getFullYear();
        const valH = sh.value || new Date().getFullYear();
        sa.innerHTML = ''; sh.innerHTML = '';
        
        // 1. Recolectar años existentes en datos
        const existingYears = new Set();
        const currentYear = new Date().getFullYear();
        existingYears.add(currentYear);
        gastos.forEach(g => existingYears.add(parseInt(g.fecha.split('-')[0])));
        ingresos.forEach(i => existingYears.add(parseInt(i.fecha.split('-')[0])));

        // 2. Determinar rango (Mínimo de datos vs Límite 2030)
        const minYear = Math.min(...existingYears);
        const maxYear = 2030; // Límite solicitado

        // 3. Generar lista descendente
        const finalYears = [];
        for (let y = maxYear; y >= minYear; y--) {
            finalYears.push(y);
        }
        
        // 4. Llenar selects
        finalYears.forEach(y => { sa.add(new Option(y, y)); sh.add(new Option(y, y)); });
        
        // 5. Mantener selección
        if (finalYears.includes(parseInt(valA))) sa.value = valA;
        if (finalYears.includes(parseInt(valH))) sh.value = valH;
    }
}

// --- LOGICA ---
function guardarConfig(){ localStorage.setItem('config_v2',JSON.stringify(config)); }
function limpiarBloqueoPin(){ config.pinIntentos=0; config.pinBloqueadoHasta=null; guardarConfig(); }
function msRestantesBloqueoPin(){ if(!config.pinBloqueadoHasta) return 0; const ms=new Date(config.pinBloqueadoHasta).getTime()-Date.now(); return Number.isFinite(ms)&&ms>0?ms:0; }
function actualizarErrorPin(m){ const el=document.getElementById('pinError'); if(!el) return; el.textContent=m||'PIN Incorrecto'; el.style.display='block'; }
function pinEstaActivo(){ return !!(config.pinHash||config.pin); }
function generarSaltPin(){ const bytes=new Uint8Array(16); crypto.getRandomValues(bytes); return Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join(''); }
async function hashPin(pin,salt){ const data=new TextEncoder().encode(`${salt}:${pin}`); const hashBuffer=await crypto.subtle.digest('SHA-256',data); const hashArray=Array.from(new Uint8Array(hashBuffer)); return hashArray.map(b=>b.toString(16).padStart(2,'0')).join(''); }
async function validarPinIngresado(pin){
    if(config.pinHash&&config.pinSalt){
        const hashIngresado=await hashPin(pin,config.pinSalt);
        return hashIngresado===config.pinHash;
    }
    return pin===config.pin;
}
async function migrarPinLegacySiAplica(pin){
    if(!config.pin || config.pinHash) return;
    const salt=generarSaltPin();
    const pinHash=await hashPin(pin,salt);
    config.pinHash=pinHash;
    config.pinSalt=salt;
    config.pin=null;
    guardarConfig();
}
function verificarPinInicio(){ if(pinEstaActivo()){ document.getElementById('lockScreen').style.display='flex'; if(msRestantesBloqueoPin()<=0&&config.pinBloqueadoHasta) limpiarBloqueoPin(); pinBuffer=""; actualizarPinDisplay(); } }
function ingresarPin(d){ if(msRestantesBloqueoPin()>0){ const seg=Math.ceil(msRestantesBloqueoPin()/1000); actualizarErrorPin(`PIN bloqueado. Intenta en ${seg}s`); return; } if(d==='back') pinBuffer=pinBuffer.slice(0,-1); else if(pinBuffer.length<4) pinBuffer+=d; actualizarPinDisplay(); }
function actualizarPinDisplay(){ document.getElementById('pinDisplay').textContent="•".repeat(pinBuffer.length); document.getElementById('pinError').style.display='none'; }
async function verificarPin(){
    const msBloqueo=msRestantesBloqueoPin();
    if(msBloqueo>0){
        const seg=Math.ceil(msBloqueo/1000);
        actualizarErrorPin(`PIN bloqueado. Intenta en ${seg}s`);
        pinBuffer="";
        setTimeout(actualizarPinDisplay,500);
        return;
    }
    const pinEsValido=await validarPinIngresado(pinBuffer);
    if(pinEsValido){
        await migrarPinLegacySiAplica(pinBuffer);
        document.getElementById('lockScreen').style.display='none';
        pinBuffer="";
        limpiarBloqueoPin();
        return;
    }
    config.pinIntentos=(config.pinIntentos||0)+1;
    const intentosRestantes=Math.max(PIN_MAX_INTENTOS-config.pinIntentos,0);
    if(config.pinIntentos>=PIN_MAX_INTENTOS){
        const hasta=new Date(Date.now()+PIN_BLOQUEO_MINUTOS*60*1000);
        config.pinBloqueadoHasta=hasta.toISOString();
        guardarConfig();
        actualizarErrorPin(`Demasiados intentos. Bloqueado ${PIN_BLOQUEO_MINUTOS} min.`);
    } else {
        guardarConfig();
        actualizarErrorPin(`PIN incorrecto. Intentos restantes: ${intentosRestantes}`);
    }
    pinBuffer="";
    setTimeout(actualizarPinDisplay,500);
    navigator.vibrate?.(200);
}
function toggleSeguridad(el){ if(el.checked){ document.getElementById('modalPinConfig').style.display='block'; document.getElementById('newPinInput').value=''; document.getElementById('newPinInput').focus(); } else { config.pin=null; config.pinHash=null; config.pinSalt=null; limpiarBloqueoPin(); mostrarToast("PIN Desactivado","success"); actualizarCardsConfig();} }
async function guardarNuevoPin(){ const p=document.getElementById('newPinInput').value; if(p.length===4&&!isNaN(p)){ const salt=generarSaltPin(); const pinHash=await hashPin(p,salt); config.pinHash=pinHash; config.pinSalt=salt; config.pin=null; limpiarBloqueoPin(); document.getElementById('modalPinConfig').style.display='none'; mostrarToast("PIN Activado","success"); actualizarCardsConfig();} else alert("PIN de 4 dígitos"); }
function cancelarPin(){ document.getElementById('modalPinConfig').style.display='none'; document.getElementById('togglePin').checked=false; }
function verificarRecordatorioBackup(){ if(!config.fechaUltimoBackup){ document.getElementById('backupBadge').style.display='block'; return; } const diff=Math.ceil(Math.abs(new Date()-new Date(config.fechaUltimoBackup))/(1000*60*60*24)); document.getElementById('backupBadge').style.display=(diff>7)?'block':'none'; }
function insertarEmoji(e){ const i=document.getElementById('modalCategoriaNombre'); i.value=e+" "+i.value; i.focus(); }

function inicializarAccionesDeclarativas(){
    document.addEventListener('click',(e)=>{
        if(e.target.className==='modal'||e.target.className==='close-btn') {
            document.querySelectorAll('.modal').forEach(m=>m.style.display='none');
        }

        const smartGrid=document.getElementById('smartCategories');
        const dentroGrid=e.target.closest('.smart-cat-grid')||e.target.closest('.cat-btn')||e.target.closest('#gastoDescripcion');
        if(!dentroGrid&&smartGrid){
            if(document.getElementById('gastoCategoria').value!==""||document.getElementById('gastoDescripcion').value.trim().length>0){
                smartGrid.classList.remove('expanded');
            }
        }

        const pinBtn=e.target.closest('[data-pin]');
        if(pinBtn){ ingresarPin(pinBtn.dataset.pin); return; }

        const pinSubmit=e.target.closest('[data-pin-submit]');
        if(pinSubmit){ verificarPin(); return; }

        const keypad=e.target.closest('[data-keypad]');
        if(keypad){ tecladoPress(keypad.dataset.keypad); return; }

        const stopEl=e.target.closest('[data-stop-propagation]');
        if(stopEl){ e.stopPropagation(); return; }

        const actionEl=e.target.closest('[data-action]');
        if(!actionEl) return;

        const actionHandlers={
            'agregar-gasto':()=>agregarGasto(),
            'agregar-ingreso':()=>agregarIngreso(),
            'toggle-gastos':()=>toggleTablaGastos(),
            'toggle-ingresos':()=>toggleTablaIngresos(),
            'cambiar-fecha':()=>cambiarFechaSmart(actionEl.dataset.target),
            'trigger-toggle-pin':()=>triggerTogglePin(e),
            'abrir-modal-moneda':()=>abrirModalMoneda(),
            'abrir-modal-idioma':()=>abrirModalIdioma(),
            'backup-json':()=>compartirBackupJSON(),
            'abrir-importador':()=>document.getElementById('inputImportar').click(),
            'borrar-todo':()=>confirmarLimpiarTodosLosDatos(),
            'cerrar-modal-detalle':()=>cerrarModalDetalle(),
            'detalle-pagina':()=>cambiarPagina(Number(actionEl.dataset.dir||0)),
            'cerrar-modal-edicion-gasto':()=>cerrarModal(),
            'guardar-edicion-gasto':()=>guardarEdicionDesdeModal(),
            'eliminar-gasto':()=>confirmarEliminarGasto(),
            'cerrar-modal-edicion-ingreso':()=>cerrarModalEdicionIngreso(),
            'guardar-edicion-ingreso':()=>guardarEdicionIngreso(),
            'eliminar-ingreso':()=>confirmarEliminarIngreso(),
            'cerrar-modal-categoria':()=>cerrarModalCategoria(),
            'pagina-gastos':()=>cambiarPaginaPrincipal(Number(actionEl.dataset.dir||0)),
            'anio-ingreso':()=>cambiarAnioIngreso(Number(actionEl.dataset.dir||0)),
            'pagina-ingresos':()=>cambiarPaginaIngresos(Number(actionEl.dataset.dir||0)),
            'export-csv':()=>generarYCompartirCSV(actionEl.dataset.kind),
            'export-pdf':()=>generarPDF(actionEl.dataset.kind),
            'toggle-presupuestos':()=>togglePresupuestos(),
            'abrir-modal-anual':()=>abrirModalTablaAnual(),
            'cerrar-modal-anual':()=>cerrarModalTablaAnual(),
            'guardar-edicion-categoria':()=>guardarEdicionCategoria(),
            'cerrar-modal-moneda':()=>{document.getElementById('modalSeleccionMoneda').style.display='none';},
            'cambiar-moneda':()=>cambiarMoneda(actionEl.dataset.value),
            'cerrar-modal-idioma':()=>{document.getElementById('modalSeleccionIdioma').style.display='none';},
            'cambiar-idioma':()=>cambiarIdioma(actionEl.dataset.value),
            'ejecutar-confirmacion':()=>ejecutarConfirmacion(),
            'cerrar-modal-confirmacion':()=>cerrarModalConfirmacion(),
            'guardar-nuevo-pin':()=>guardarNuevoPin(),
            'cancelar-pin':()=>cancelarPin(),
            'mostrar-pantalla':()=>mostrarPantalla(actionEl.dataset.screen, actionEl),
            'insertar-emoji':()=>insertarEmoji(actionEl.dataset.value)
        };

        const handler=actionHandlers[actionEl.dataset.action];
        if(handler) handler();
    });
}

function inicializarUI(){ 
    mostrarPantalla('gasto',document.querySelector('.nav-tabs button.active')); 

    // Listener para el campo de Gasto
    const d=document.getElementById('gastoDescripcion'); 
    if(d){ 
        d.addEventListener('focus', () => {
            document.getElementById('keypadContainer').style.display='none';
            ocultarConfirmaciones(); // <--- OCULTAR AL ESCRIBIR
        }); 
        d.addEventListener('blur',()=>{setTimeout(()=>{document.getElementById('keypadContainer').style.display='block'},150)});
        d.addEventListener('input', predecirCategoria);
    } 

    // Listener para el campo de Ingreso (si existe)
    const di = document.getElementById('ingresoDescripcion');
    if(di){
        di.addEventListener('focus', () => ocultarConfirmaciones()); // <--- OCULTAR AL ESCRIBIR
    }

    const f=document.getElementById('inputImportar'); if(f) f.addEventListener('change',importarDatos); 
    const buscadorDetalle=document.getElementById('buscarDetalleModal'); if(buscadorDetalle) buscadorDetalle.addEventListener('input',filtrarTablaDetalle);
    const togglePin=document.getElementById('togglePin'); if(togglePin) togglePin.addEventListener('change',(e)=>toggleSeguridad(e.target));
    const filtroMes=document.getElementById('filtroMes'); if(filtroMes) filtroMes.addEventListener('change',actualizarResumenMensual);
    const filtroAnioMensual=document.getElementById('filtroAnioMensual'); if(filtroAnioMensual) filtroAnioMensual.addEventListener('change',actualizarResumenMensual);
    const filtroAnioHistorico=document.getElementById('filtroAnioHistorico'); if(filtroAnioHistorico) filtroAnioHistorico.addEventListener('change',()=>actualizarResumenHistorico(true));
    document.querySelectorAll('input[name="filtroTipoPagoMensual"]').forEach(r=>{r.addEventListener('change',(e)=>{filtroPagoMensual=e.target.value;actualizarResumenMensual()})}); 
    document.querySelectorAll('input[name="filtroTipoPagoHistorico"]').forEach(r=>{r.addEventListener('change',(e)=>{filtroPagoHistorico=e.target.value;actualizarResumenHistorico(true)})}); 
}

function actualizarSaldoHeader(){ const m=new Date().getMonth()+1, a=new Date().getFullYear(); const i=ingresos.filter(x=>{const[y,mm]=x.fecha.split('-');return parseInt(y)==a&&parseInt(mm)==m}).reduce((s,x)=>s+Number(x.valor),0); const g=gastos.filter(x=>{const[y,mm]=x.fecha.split('-');return parseInt(y)==a&&parseInt(mm)==m}).reduce((s,x)=>s+Number(x.valor),0); const s=i-g; const el=document.getElementById('headerSaldoValor'); el.textContent=formatearMoneda(s); const p=(i>0)?(s/i)*100:(s>=0?100:-1); el.style.color=(s<0||p<10)?'#FCA5A5':(p<30?'#FCD34D':'#6EE7B7'); }
function cambiarAnioIngreso(d){ anioSeleccionadoIngreso+=d; document.getElementById('displayAnioIngreso').textContent=anioSeleccionadoIngreso; paginaActualIngresosMes=1; renderizarIngresosAnuales(); }
function agregarGasto(){ 
    const f=document.getElementById('gastoFecha').value;
    const c=document.getElementById('gastoCategoria').value;
    const d=sanitizar(document.getElementById('gastoDescripcion').value.trim());
    const v=parsearValor(document.getElementById('gastoValor').value);
    const p=document.querySelector('input[name="tipoPago"]:checked').value; 
    
    if(!c) return mostrarToast(TRADUCTIONS[config.idioma].alertMissingCat,'error'); 
    if(!f||!d||isNaN(v)||v<=0) return mostrarToast(TRADUCTIONS[config.idioma].alertMissing,'error'); 
    
    gastos.push({id:Date.now(),fecha:f,categoria:c,descripcion:d,valor:v,tipoPago:p}); 
    gastos.sort(sortData); 
    guardarGastos(); 

    // --- NUEVO FORMATO DE CONFIRMACIÓN (UNA LÍNEA) ---
    // Ej: "Guardado: Almuerzo... $4.50"
    const textoCorto = `✅ Guardado: ${d} • ${formatearMoneda(v)}`;
    document.getElementById('feedbackTexto').textContent = textoCorto; 
    document.getElementById('feedbackUltimoGasto').style.display = 'flex'; 
    // --------------------------------------------------

    document.getElementById('gastoDescripcion').value=''; 
    document.getElementById('gastoCategoria').value=''; 
    smartValorInput="0"; 
    actualizarDisplayValor(); 
    renderizarCategoriasSmart(null); 
    document.getElementById('budgetProgressContainer').style.display='none'; 
    renderizarSelectores(); 
    renderizarGastosDelMes(); 
    actualizarResumenMensual(); 
    actualizarResumenHistorico(); 
    actualizarSaldoHeader(); 
}

function agregarIngreso(){ 
    const f=document.getElementById('ingresoFecha').value;
    const d=sanitizar(document.getElementById('ingresoDescripcion').value.trim());
    const v=parsearValor(document.getElementById('ingresoValor').value); 
    
    if(!f||!d||isNaN(v)||v<=0) return mostrarToast(TRADUCTIONS[config.idioma].alertMissing,'error'); 
    
    ingresos.push({id:Date.now(),fecha:f,descripcion:d,valor:v}); 
    ingresos.sort(sortData); 
    guardarIngresos(); 
    
    if(!descripcionesIngresosUsadas.includes(d)){
        descripcionesIngresosUsadas.push(d);
        actualizarSugerenciasIngresos(descripcionesIngresosUsadas);
    } 

    // --- NUEVO FORMATO DE CONFIRMACIÓN (UNA LÍNEA) ---
    const textoCorto = `✅ Guardado: ${d} • ${formatearMoneda(v)}`;
    document.getElementById('feedbackTextoIngreso').textContent = textoCorto; 
    document.getElementById('feedbackUltimoIngreso').style.display = 'flex';
    // --------------------------------------------------

    document.getElementById('ingresoDescripcion').value=''; 
    smartValorInputIngreso="0"; 
    actualizarDisplayValorIngreso(); 
    if(parseInt(f.split('-')[0])===anioSeleccionadoIngreso){
        paginaActualIngresosMes=1; 
        renderizarIngresosAnuales();
    } 
    actualizarSaldoHeader(); 
    renderizarSelectores(); 
    actualizarResumenMensual(); 
}    
function guardarIngresos(){ localStorage.setItem('ingresos_v2',JSON.stringify(ingresos)); descripcionesIngresosUsadas=[...new Set(ingresos.map(i=>i.descripcion))]; actualizarSugerenciasIngresos(descripcionesIngresosUsadas); }
function actualizarDisplayValorIngreso(){ 
    document.getElementById('smartValueDisplayIngreso').textContent=config.moneda+' '+smartValorInputIngreso; 
    document.getElementById('ingresoValor').value=smartValorInputIngreso; 
    // CURSOR SOLO SI ES 0 o VACIO
    const cursor = document.getElementById('cursorIngreso');
    if(smartValorInputIngreso === "0" || smartValorInputIngreso === "") cursor.style.display = 'inline-block';
    else cursor.style.display = 'none';
}
function abrirModalDetalle(cat,lista){ document.getElementById('modalDetalleCategoriaTitulo').textContent=cat; listaDetalleActual=lista.filter(g=>g.categoria===cat); listaParaMostrar=[...listaDetalleActual]; paginaActual=1; document.getElementById('buscarDetalleModal').value=''; if(document.getElementById('historico').classList.contains('activa')){document.getElementById('modalChartContainer').style.display='block'; renderModalChart(cat,lista);}else{document.getElementById('modalChartContainer').style.display='none';} renderizarTablaDetallePaginada(); document.getElementById('modalDetalleGastos').style.display='block'; }
function renderModalChart(cat,lista){ const ctx=document.getElementById('modalChartCanvas').getContext('2d'); const y=document.getElementById('filtroAnioHistorico').value; const data=Array(12).fill(0); lista.filter(g=>g.categoria===cat).forEach(g=>{const m=parseInt(g.fecha.split('-')[1])-1;if(m>=0&&m<12)data[m]+=Number(g.valor)}); if(chartInstances.modal) chartInstances.modal.destroy(); chartInstances.modal=new Chart(ctx,{type:'bar',data:{labels:MONTH_NAMES_FULL[config.idioma].map(m=>m.substr(0,3)),datasets:[{data:data,backgroundColor:'#2563EB',borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},datalabels:{display:false},title:{display:true,text:`${cat} - ${y}`,font:{size:14}}},scales:{y:{display:false,grid:{display:false}},x:{grid:{display:false}}}}}); }
function cerrarModalDetalle(){ document.getElementById('modalDetalleGastos').style.display='none'; }
function abrirModalTablaAnual(){ document.getElementById('modalTablaAnual').style.display='block'; }
function cerrarModalTablaAnual(){ document.getElementById('modalTablaAnual').style.display='none'; }
function filtrarTablaDetalle(){ const t=document.getElementById('buscarDetalleModal').value.toLowerCase().trim(); listaParaMostrar=t===''?listaDetalleActual:listaDetalleActual.filter(g=>g.descripcion.toLowerCase().includes(t)||g.fecha.includes(t)||g.valor.toString().includes(t)); paginaActual=1; renderizarTablaDetallePaginada(); }
function cambiarPagina(d){ const t=Math.ceil(listaParaMostrar.length/ITEMS_PER_PAGE); const n=paginaActual+d; if(n>=1&&n<=t){ paginaActual=n; renderizarTablaDetallePaginada(); } }
function renderizarTablaDetallePaginada(){ const tb=document.querySelector('#tablaDetalleModal tbody'); tb.innerHTML=''; const i=(paginaActual-1)*ITEMS_PER_PAGE; const p=listaParaMostrar.slice(i,i+ITEMS_PER_PAGE); let tot=0; listaParaMostrar.forEach(g=>tot+=Number(g.valor)); p.forEach(g=>{const tr=document.createElement('tr'); tr.onclick=()=>{cerrarModalDetalle();abrirModalEdicion(g.id)}; const[y,m,d]=g.fecha.split('-'); tr.innerHTML=`<td>${d}/${m}</td><td>${g.descripcion}</td><td class="gasto-valor">${formatearMoneda(g.valor)}</td>`; tb.appendChild(tr);}); document.getElementById('totalDetalleModal').textContent=formatearMoneda(tot); const tp=Math.ceil(listaParaMostrar.length/ITEMS_PER_PAGE)||1; const c=document.getElementById('paginacionDetalleModal'); c.style.display=(tp<=1)?'none':'flex'; document.getElementById('pageInfoModal').textContent=`Pág ${paginaActual}/${tp} (${listaParaMostrar.length})`; }
function renderizarGastosDelMes(){ const tb=document.querySelector('#tablaUltimosGastos tbody'); if(!tb)return; tb.innerHTML=''; const h=new Date(); const l=gastos.filter(g=>{const[y,m]=g.fecha.split('-'); return parseInt(m)===(h.getMonth()+1)&&parseInt(y)===h.getFullYear()}); if(l.length===0){document.getElementById('emptyStateGasto').style.display='block'; document.getElementById('contenedorUltimosGastos').style.display='none'; document.getElementById('btnToggleGastos').style.display='none'; return;} else {document.getElementById('emptyStateGasto').style.display='none'; document.getElementById('btnToggleGastos').style.display='block';} let tot=0; l.forEach(g=>tot+=Number(g.valor)); document.getElementById('totalUltimosGastos').textContent=formatearMoneda(tot); const tp=Math.ceil(l.length/ITEMS_PER_PAGE)||1; if(paginaActualGastosMes>tp) paginaActualGastosMes=tp; if(paginaActualGastosMes<1) paginaActualGastosMes=1; const p=l.slice((paginaActualGastosMes-1)*ITEMS_PER_PAGE,paginaActualGastosMes*ITEMS_PER_PAGE); p.forEach(g=>{const tr=document.createElement('tr'); tr.onclick=()=>abrirModalEdicion(g.id); const[y,m,d]=g.fecha.split('-'); tr.innerHTML=`<td>${d}/${m}</td><td>${g.descripcion}<div class="gasto-categoria-subtexto">${g.categoria}</div></td><td class="gasto-valor">${formatearMoneda(g.valor)}</td>`; tb.appendChild(tr);}); const pi=document.getElementById('pageInfoPrincipal'); if(pi){pi.textContent=`Pág ${paginaActualGastosMes}/${tp}`; pi.parentElement.style.display=(tp<=1)?'none':'flex';} }
function cambiarPaginaPrincipal(d){ const h=new Date(); const l=gastos.filter(g=>{const[y,m]=g.fecha.split('-');return parseInt(m)===(h.getMonth()+1)&&parseInt(y)===h.getFullYear()}); const tp=Math.ceil(l.length/ITEMS_PER_PAGE); const n=paginaActualGastosMes+d; if(n>=1&&n<=tp){ paginaActualGastosMes=n; renderizarGastosDelMes(); } }
function renderizarIngresosAnuales(){ const tb=document.querySelector('#tablaUltimosIngresos tbody'); if(!tb)return; tb.innerHTML=''; const l=ingresos.filter(g=>parseInt(g.fecha.split('-')[0])===anioSeleccionadoIngreso); if(l.length===0){ document.getElementById('emptyStateIngreso').style.display='block'; document.getElementById('contenedorUltimosIngresos').style.display='none'; document.getElementById('btnToggleIngresos').style.display='none'; const ys=document.querySelector('#contenedorUltimosIngresos .year-selector-container'); if(ys){document.getElementById('ingreso').insertBefore(ys, document.getElementById('emptyStateIngreso')); ys.style.display='flex';} } else { document.getElementById('emptyStateIngreso').style.display='none'; document.getElementById('contenedorUltimosIngresos').style.display='block'; document.getElementById('btnToggleIngresos').style.display='block'; const ys=document.querySelector('.year-selector-container'); document.getElementById('contenedorUltimosIngresos').prepend(ys); } let tot=0; l.forEach(g=>tot+=Number(g.valor)); document.getElementById('totalUltimosIngresos').textContent=formatearMoneda(tot); const tp=Math.ceil(l.length/ITEMS_PER_PAGE)||1; if(paginaActualIngresosMes>tp) paginaActualIngresosMes=tp; if(paginaActualIngresosMes<1) paginaActualIngresosMes=1; const p=l.slice((paginaActualIngresosMes-1)*ITEMS_PER_PAGE,paginaActualIngresosMes*ITEMS_PER_PAGE); p.forEach(g=>{const tr=document.createElement('tr'); tr.onclick=()=>abrirModalEdicionIngreso(g.id); const[y,m,d]=g.fecha.split('-'); tr.innerHTML=`<td>${d}/${m}</td><td>${g.descripcion}</td><td class="gasto-valor">${formatearMoneda(g.valor)}</td>`; tb.appendChild(tr);}); const pi=document.getElementById('pageInfoIngresos'); if(pi){pi.textContent=`Pág ${paginaActualIngresosMes}/${tp}`; pi.parentElement.style.display=(tp<=1)?'none':'flex';} }
function cambiarPaginaIngresos(d){ const l=ingresos.filter(g=>parseInt(g.fecha.split('-')[0])===anioSeleccionadoIngreso); const tp=Math.ceil(l.length/ITEMS_PER_PAGE); const n=paginaActualIngresosMes+d; if(n>=1&&n<=tp){ paginaActualIngresosMes=n; renderizarIngresosAnuales(); } }

function actualizarResumenMensual(){ 
    const m=document.getElementById('filtroMes').value, a=document.getElementById('filtroAnioMensual').value; 
    const im=ingresos.filter(g=>{const[y,mm]=g.fecha.split('-');return parseInt(y)==a&&parseInt(mm)==m}); 
    const gm=gastos.filter(g=>{const[y,mm]=g.fecha.split('-');return parseInt(y)==a&&parseInt(mm)==m}); 
    const si=im.reduce((s,x)=>s+Number(x.valor),0); const sg=gm.reduce((s,x)=>s+Number(x.valor),0); 
    document.getElementById('dashIngreso').textContent=formatearMoneda(si); 
    document.getElementById('dashGasto').textContent=formatearMoneda(sg); 
    document.getElementById('dashBalance').textContent=formatearMoneda(si-sg); 
    renderizarResumenPresupuestos(gm); 
    
    let s = { t:0, c:0, tr:0, tf:0 };
    gm.forEach(g => {
        s.t += Number(g.valor);
        if(g.tipoPago=='Contado') s.c += Number(g.valor);
        if(g.tipoPago=='Tarjeta') s.tr += Number(g.valor);
        if(g.tipoPago=='Transferencia') s.tf += Number(g.valor);
    });
    if(document.getElementById('sum-contado-mensual')) {
        document.getElementById('sum-contado-mensual').textContent = formatearMoneda(s.c);
        document.getElementById('sum-tarjeta-mensual').textContent = formatearMoneda(s.tr);
        document.getElementById('sum-transf-mensual').textContent = formatearMoneda(s.tf);
    }

    let l=gm; 
    if(filtroPagoMensual!=='TODOS') l=l.filter(g=>g.tipoPago===filtroPagoMensual); 
    if(l.length===0){document.getElementById('emptyStateMensual').style.display='block'; document.getElementById('tablaResumenMensual').style.display='none'; document.getElementById('chartMensualContainer').style.display='none';} 
    else {document.getElementById('emptyStateMensual').style.display='none'; document.getElementById('tablaResumenMensual').style.display='table'; document.getElementById('chartMensualContainer').style.display='block'; renderizarTablaResumen(l,'tablaResumenMensual','totalResumenMensual'); actualizarGraficoCategorias(l,'chartMensualCanvas','mensual',`${MONTH_NAMES_FULL[config.idioma][m-1]} ${a}`);} 
}

function actualizarResumenHistorico(r){ 
    if(r)filtroCategoriaHistorico='TODOS'; 
    const a=document.getElementById('filtroAnioHistorico').value; 
    const ia=ingresos.filter(g=>g.fecha.startsWith(a)); 
    const ga=gastos.filter(g=>g.fecha.startsWith(a)); 
    const si=ia.reduce((s,x)=>s+Number(x.valor),0); 
    const sg=ga.reduce((s,x)=>s+Number(x.valor),0); 
    document.getElementById('dashIngresoHistorico').textContent=formatearMoneda(si); 
    document.getElementById('dashGastoHistorico').textContent=formatearMoneda(sg); 
    document.getElementById('dashBalanceHistorico').textContent=formatearMoneda(si-sg); 
    
    let s = { t:0, c:0, tr:0, tf:0 };
    ga.forEach(g => {
        s.t += Number(g.valor);
        if(g.tipoPago=='Contado') s.c += Number(g.valor);
        if(g.tipoPago=='Tarjeta') s.tr += Number(g.valor);
        if(g.tipoPago=='Transferencia') s.tf += Number(g.valor);
    });
    if(document.getElementById('sum-contado-historico')) {
        document.getElementById('sum-contado-historico').textContent = formatearMoneda(s.c);
        document.getElementById('sum-tarjeta-historico').textContent = formatearMoneda(s.tr);
        document.getElementById('sum-transf-historico').textContent = formatearMoneda(s.tf);
    }

    const da=Array(12).fill(0).map((_,i)=>({mesIndex:i,ingreso:0,gasto:0})); 
    ia.forEach(g=>da[parseInt(g.fecha.split('-')[1])-1].ingreso+=Number(g.valor)); 
    ga.forEach(g=>da[parseInt(g.fecha.split('-')[1])-1].gasto+=Number(g.valor)); 
    actualizarGraficoEvolucionAnual(da); renderizarTablaAnual(da); 
    
    let l=[...ga]; 
    if(filtroPagoHistorico!=='TODOS') l=l.filter(g=>g.tipoPago===filtroPagoHistorico); 
    renderizarTablaResumen(l,'tablaResumenHistorico','totalResumenHistorico'); 
    
    if(filtroCategoriaHistorico!=='TODOS') l=l.filter(g=>g.categoria===filtroCategoriaHistorico); 
    actualizarGraficoCategorias(l,'chartHistoricoCanvas','historico',`Año ${a}`); 
}

function togglePresupuestos(){ const c=document.getElementById('budgetSummaryContainer'), ch=document.getElementById('budgetChevron'); if(c.style.display==='none'||c.style.display===''){c.style.display='block';ch.classList.replace('fa-chevron-down','fa-chevron-up')}else{c.style.display='none';ch.classList.replace('fa-chevron-up','fa-chevron-down')} }
function formatearMonedaSinDecimales(v){ return `${config.moneda} ${(v||0).toLocaleString('es-EC',{maximumFractionDigits:0})}`; }
function renderizarResumenPresupuestos(gm){ const c=document.getElementById('budgetSummaryContainer'); c.innerHTML=''; const pres=config.presupuestos||{}; const cats=Object.keys(pres); if(cats.length===0){c.innerHTML='<div style="text-align:center;font-size:0.8em;padding:10px;">Sin presupuestos.</div>';return;} cats.forEach(cat=>{const lim=pres[cat]; const gas=gm.filter(g=>g.categoria===cat).reduce((s,x)=>s+Number(x.valor),0); if(gas===0) return; const pct=(gas/lim)*100; let col='#6EE7B7'; if(pct>100)col='#FCA5A5'; else if(pct>70)col='#FCD34D'; c.innerHTML+=`<div class="budget-row"><div class="budget-row-header"><span>${cat}</span></div><div class="budget-visual-row"><div class="budget-list-track"><div class="budget-list-fill" style="width:${Math.min(pct,100)}%;background-color:${col};"></div></div><div class="budget-text-info">${formatearMonedaSinDecimales(gas)} / ${formatearMonedaSinDecimales(lim)} <strong>(${pct.toFixed(0)}%)</strong></div></div></div>`;}); }
function renderizarTablaAnual(da){ const tb=document.querySelector('#tablaDetalleAnual tbody'); tb.innerHTML=''; let ti=0,tg=0; da.forEach(d=>{const s=d.ingreso-d.gasto; if(d.ingreso===0&&d.gasto===0)return; ti+=d.ingreso; tg+=d.gasto; const tr=document.createElement('tr'); tr.innerHTML=`<td>${MONTH_NAMES_FULL[config.idioma][d.mesIndex].substring(0,3)}</td><td class="text-right gasto-valor">${formatearMoneda(d.ingreso)}</td><td class="text-right gasto-valor">${formatearMoneda(d.gasto)}</td><td class="text-right gasto-valor" style="color:${s<0?'#EF4444':''}">${formatearMoneda(s)}</td>`; tb.appendChild(tr);}); document.getElementById('totalAnualIngreso').textContent=formatearMoneda(ti); document.getElementById('totalAnualGasto').textContent=formatearMoneda(tg); const ts=ti-tg; const el=document.getElementById('totalAnualSaldo'); el.textContent=formatearMoneda(ts); el.style.color=ts<0?'#EF4444':''; }
function renderizarTablaResumen(l,id,tid){ const tb=document.querySelector(`#${id} tbody`); if(!tb)return; tb.innerHTML=''; const c={}; let t=0; l.forEach(g=>{c[g.categoria]=(c[g.categoria]||0)+Number(g.valor);t+=Number(g.valor)}); Object.entries(c).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>{const tr=document.createElement('tr'); const p=t>0?((v/t)*100).toFixed(1):'0.0'; tr.innerHTML=`<td>${k}</td><td class="gasto-valor">${formatearMoneda(v)}</td><td class="col-porcentaje">${p}%</td>`; tr.onclick=()=>abrirModalDetalle(k,l); tb.appendChild(tr);}); document.getElementById(tid).textContent=formatearMoneda(t); }
function tecladoPress(k){ 
    ocultarConfirmaciones(); // <--- AGREGAR ESTA LÍNEA AL INICIO

    const isI=document.getElementById('ingreso').classList.contains('activa'); 
    let v=isI?smartValorInputIngreso:smartValorInput; 

    if(k==='back') v=v.length>1?v.slice(0,-1):"0"; 
    else if(k==='.') {if(!v.includes('.'))v+='.'} 
    else {
        if(v.includes('.')){if(v.split('.')[1].length>=2)return} 
        if(v==="0")v=k; else if(v.length<10)v+=k;
    } 

    if(isI){smartValorInputIngreso=v;actualizarDisplayValorIngreso()}
    else{smartValorInput=v;actualizarDisplayValor()} 
}
function actualizarDisplayValor(){ 
    document.getElementById('smartValueDisplay').textContent=config.moneda+' '+smartValorInput; 
    document.getElementById('gastoValor').value=smartValorInput; 
    const cursor = document.getElementById('cursorGasto');
    if(smartValorInput === "0" || smartValorInput === "") cursor.style.display = 'inline-block';
    else cursor.style.display = 'none';
}
function predecirCategoria(){ 
    const input = document.getElementById('gastoDescripcion');
    const t = input.value.toLowerCase().trim();
    const c = document.getElementById('smartCategories');
    
    // 1. Limpieza si está vacío
    if(t.length<2){
        if(t.length===0){
            c.classList.add('expanded');
            document.getElementById('gastoCategoria').value="";
            renderizarCategoriasSmart(null);
        }
        return;
    } 

    // 2. Predicción Visual (StartsWith) - Mantiene la categoría seleccionada visualmente mientras escribes
    const m = gastos.find(g => g.descripcion.toLowerCase().startsWith(t)); 
    if(m){ 
        seleccionarCategoriaSmart(m.categoria); 
        const b = c.getElementsByClassName('cat-btn'); 
        for(let btn of b){
            if(btn.textContent===m.categoria){
                btn.classList.add('flash');
                setTimeout(()=>btn.classList.remove('flash'),400);
                break;
            }
        } 
        c.classList.remove('expanded'); 
    } else {
        document.getElementById('gastoCategoria').value="";
        renderizarCategoriasSmart(null);
        c.classList.add('expanded');
    }
    
    // 3. NUEVO: Auto-cierre del teclado (Exact Match)
    // Si lo que hay escrito coincide EXACTAMENTE con un gasto previo (ej. al hacer clic en sugerencia)
    const exactMatch = gastos.find(g => g.descripcion.toLowerCase() === t);
    if(exactMatch) {
        seleccionarCategoriaSmart(exactMatch.categoria); // Asegurar categoría
        input.blur(); // ESTO OCULTA EL TECLADO NATIVO Y MUESTRA EL NUMÉRICO
    }
}
function seleccionarCategoriaSmart(cat){ document.getElementById('gastoCategoria').value=cat; renderizarCategoriasSmart(cat); const bc=document.getElementById('budgetProgressContainer'), bb=document.getElementById('budgetProgressBar'), bv=document.getElementById('budgetValue'); if(config.presupuestos&&config.presupuestos[cat]>0){const lim=config.presupuestos[cat]; const h=new Date(); const gm=gastos.filter(g=>{const[y,m]=g.fecha.split('-');return parseInt(y)===h.getFullYear()&&parseInt(m)===(h.getMonth()+1)&&g.categoria===cat}).reduce((s,x)=>s+Number(x.valor),0); const p=(gm/lim)*100; bc.style.display='block'; bv.textContent=`${formatearMoneda(gm)} / ${formatearMoneda(lim)}`; requestAnimationFrame(()=>{bb.style.width=Math.min(p,100)+'%'; bb.style.backgroundColor=p>100?'var(--danger-color)':(p>70?'var(--warning-color)':'var(--success-color)')});} else {bc.style.display='none';} document.getElementById('smartCategories').scrollLeft=0; }
function renderizarCategoriasSmart(s=null){ 
    const c=document.getElementById('smartCategories'); 
    c.innerHTML=''; 
    c.classList.remove('expanded'); 
    
    if(!s) s=document.getElementById('gastoCategoria').value; 
    
    // Frecuencia de uso para ordenar
    const f={}; 
    gastos.forEach(g=>f[g.categoria]=(f[g.categoria]||0)+1); 
    
    let co=[...config.categorias].sort((a,b)=>(f[b]||0)-(f[a]||0)); 
    
    // Si hay selección, ponerla primero
    if(s && co.includes(s)){ co=co.filter(x=>x!==s); co.unshift(s); } 
    
    co.forEach(cat=>{
        const b=document.createElement('div'); 
        b.className='cat-btn'; 
        if(cat===s) b.classList.add('selected'); 
        
        // Lógica de separación Emoji/Texto (Igual que en Config)
        let emoji = cat.split(' ')[0]; 
        let nombre = cat.substring(emoji.length).trim();
        if(!nombre) { nombre = emoji; emoji = '🏷️'; } // Fallback
        
        b.innerHTML=`
            <div class="cat-btn-icon">${emoji}</div>
            <div class="cat-btn-text">${nombre}</div>
        `; 
        
        b.onclick=()=>{ seleccionarCategoriaSmart(cat); c.classList.remove('expanded'); }; 
        c.appendChild(b);
    }); 
}
function toggleTablaGastos(){ const c=document.getElementById('contenedorUltimosGastos'), b=document.getElementById('btnToggleGastos'); if(c.style.display==='block'){c.style.display='none';b.innerHTML=`⬇️ ${TRADUCTIONS[config.idioma].titleGastosMes}`}else{c.style.display='block';b.innerHTML=`⬆️ ${TRADUCTIONS[config.idioma].titleGastosMes}`;setTimeout(()=>c.scrollIntoView({behavior:"smooth"}),100)} }
function toggleTablaIngresos(){ const c=document.getElementById('contenedorUltimosIngresos'), b=document.getElementById('btnToggleIngresos'); if(c.style.display==='block'){c.style.display='none';b.innerHTML=`⬇️ ${TRADUCTIONS[config.idioma].titleIngresosMes}`}else{c.style.display='block';b.innerHTML=`⬆️ ${TRADUCTIONS[config.idioma].titleIngresosMes}`;setTimeout(()=>c.scrollIntoView({behavior:"smooth"}),100)} }
function mostrarPantalla(id,btn){ ocultarConfirmaciones(); window.scrollTo(0,0); document.querySelectorAll('.pantalla').forEach(p=>p.classList.remove('activa')); document.getElementById(id).classList.add('activa'); document.querySelectorAll('.nav-tabs button').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); 
    document.getElementById('budgetSummaryContainer').style.display = 'none';
    document.getElementById('budgetChevron').classList.replace('fa-chevron-up', 'fa-chevron-down');
    if(id==='gasto'){paginaActualGastosMes=1;renderizarGastosDelMes();actualizarSaldoHeader()} if(id==='ingreso'){if(smartValorInputIngreso==="0")actualizarDisplayValorIngreso();paginaActualIngresosMes=1;renderizarIngresosAnuales();actualizarSaldoHeader()} if(id==='mensual'){actualizarResumenMensual()} if(id==='historico'){actualizarResumenHistorico()} }
function establecerFechaHoy(){ const h=new Date(); const s=`${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,'0')}-${String(h.getDate()).padStart(2,'0')}`; document.getElementById('gastoFecha').value=s; document.getElementById('ingresoFecha').value=s; }
function cambiarFechaSmart(id){ document.getElementById(id).showPicker?document.getElementById(id).showPicker():document.getElementById(id).click(); }
document.getElementById('gastoFecha').addEventListener('change',e=>{const h=new Date(); const s=`${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,'0')}-${String(h.getDate()).padStart(2,'0')}`; document.getElementById('smartFechaTexto').textContent=(e.target.value===s)?(config.idioma==='es'?'Hoy':'Today'):`${e.target.value.split('-')[2]}/${e.target.value.split('-')[1]}`});
document.getElementById('ingresoFecha').addEventListener('change',e=>{const h=new Date(); const s=`${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,'0')}-${String(h.getDate()).padStart(2,'0')}`; document.getElementById('smartFechaIngresoTexto').textContent=(e.target.value===s)?(config.idioma==='es'?'Hoy':'Today'):`${e.target.value.split('-')[2]}/${e.target.value.split('-')[1]}`});
function aplicarIdioma(){ const t=TRADUCTIONS[config.idioma]; document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t[el.getAttribute('data-i18n')]||el.textContent); document.querySelectorAll('[data-i18n-ph]').forEach(el=>el.placeholder=t[el.getAttribute('data-i18n-ph')]||el.placeholder); 
    renderizarSelectores();
}
function cambiarConfig(t,v){ config[t]=v; localStorage.setItem('config_v2',JSON.stringify(config)); (t==='moneda')?cargarDatos():aplicarIdioma(); }
function guardarGastos(){ localStorage.setItem('gastos_v2',JSON.stringify(gastos)); descripcionesUsadas=[...new Set(gastos.map(g=>g.descripcion))]; actualizarSugerenciasDescripciones(descripcionesUsadas); }
function sortData(a,b){ return new Date(b.fecha)-new Date(a.fecha)||b.id-a.id; }
function parsearValor(s){ return parseFloat(s?.toString().replace(',','.')||0); }
function formatearMoneda(v){ return `${config.moneda} ${(v||0).toLocaleString('es-EC',{minimumFractionDigits:2})}`; }
function mostrarToast(m,t){ const x=document.getElementById('toast'); x.textContent=m; x.className=`show ${t}`; clearTimeout(toastTimeout); toastTimeout=setTimeout(()=>x.className='',3000); }
function sanitizar(s){ if(!s)return''; const m={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}; return s.replace(/[&<>"']/g,k=>m[k]); }
function inicializarListenerTecladoFisico(){ 
    document.addEventListener('keydown', e => {
        // 1. SEGURIDAD: Si el bloqueo está activo, ignorar todo el teclado físico
        if(document.getElementById('lockScreen').style.display === 'flex') return;

        // 2. Comportamiento normal de la app
        const g = document.getElementById('gasto').classList.contains('activa');
        const i = document.getElementById('ingreso').classList.contains('activa'); 
        
        // Si no estamos en Gasto ni Ingreso, o si el foco está en un campo de texto (descripción), ignorar
        if((!g && !i) || (e.target.tagName === 'INPUT' && e.target.type === 'text')) return; 
        
        // Procesar teclas
        if(e.key >= '0' && e.key <= '9') tecladoPress(e.key); 
        else if(e.key === '.' || e.key === ',') tecladoPress('.'); 
        else if(e.key === 'Backspace') tecladoPress('back'); 
        else if(e.key === 'Enter'){
            e.preventDefault(); 
            if(g) agregarGasto(); 
            if(i) agregarIngreso();
        } 
    }); 
}
function inicializarScrollCategoriasMouse(){const s=document.getElementById('smartCategories');s.addEventListener('wheel',e=>{if(!s.classList.contains('expanded')){e.preventDefault();s.scrollLeft+=e.deltaY}})}
function actualizarSugerenciasDescripciones(l){document.getElementById('sugerenciasDescripciones').innerHTML=l.map(d=>`<option value="${d}">`).join('');}
function actualizarSugerenciasIngresos(l){document.getElementById('sugerenciasIngresos').innerHTML=l.map(d=>`<option value="${d}">`).join('');}
async function compartirBackupJSON(){ const t=JSON.stringify({gastos_v2:gastos,ingresos_v2:ingresos,config_v2:config},null,2); const d=new Date(); config.fechaUltimoBackup=d.toISOString(); localStorage.setItem('config_v2',JSON.stringify(config)); verificarRecordatorioBackup(); const n=`Backup_${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}.txt`; const f=new File([new Blob([t],{type:'text/plain'})],n,{type:'text/plain'}); descargar(f); if(navigator.canShare&&navigator.canShare({files:[f]})){try{setTimeout(async()=>{await navigator.share({files:[f],title:'Backup'})},500)}catch{}} }
function descargar(f){ const a=document.createElement('a'); a.href=URL.createObjectURL(f); a.download=f.name; a.click(); }
function normalizarConfigImportado(configImportada){
    const base={
        moneda:'$', idioma:'es',
        categorias:['🍔 Comida','🚌 Transporte','🏠 Hogar','💊 Salud','🎉 Ocio','📦 Otros'],
        presupuestos:{}, pin:null, pinHash:null, pinSalt:null, fechaUltimoBackup:null, pinIntentos:0, pinBloqueadoHasta:null
    };
    const out=(configImportada&&typeof configImportada==='object')?{...base,...configImportada}:base;
    if(!Array.isArray(out.categorias)||!out.categorias.length) out.categorias=base.categorias;
    if(!out.presupuestos||typeof out.presupuestos!=='object') out.presupuestos={};
    if(!out.pinHash || !out.pinSalt){ out.pinHash=null; out.pinSalt=null; }
    if(out.pinIntentos==null || Number.isNaN(Number(out.pinIntentos))) out.pinIntentos=0;
    return out;
}
function importarDatos(e){
    const f=e.target.files[0];
    if(!f) return;

    const r=new FileReader();
    r.onload=ev=>{
        try{
            const d=JSON.parse(ev.target.result);
            if(!d || !Array.isArray(d.gastos_v2)){
                mostrarToast(TRADUCTIONS[config.idioma].alertImportErrorJSON,'error');
                return;
            }

            const gastosImportados=d.gastos_v2;
            const ingresosImportados=Array.isArray(d.ingresos_v2)?d.ingresos_v2:[];
            const configImportada=normalizarConfigImportado(d.config_v2);

            localStorage.setItem('gastos_v2',JSON.stringify(gastosImportados));
            localStorage.setItem('ingresos_v2',JSON.stringify(ingresosImportados));
            localStorage.setItem('config_v2',JSON.stringify(configImportada));

            mostrarToast(TRADUCTIONS[config.idioma].alertImportSuccessJSON,'success');
            setTimeout(()=>location.reload(),1500);
        }catch{
            mostrarToast(TRADUCTIONS[config.idioma].alertImportErrorJSON,'error');
        }
    };

    r.readAsText(f);
    e.target.value='';
}
function confirmarLimpiarTodosLosDatos(){ mostrarModalConfirmacion(TRADUCTIONS[config.idioma].confirmDeleteAll,()=>{localStorage.clear();location.reload()}); }
function generarYCompartirCSV(t){ let n='',d=[],ti=''; if(t==='ingresos_mes'){const h=new Date(),m=h.getMonth()+1,a=h.getFullYear(); d=ingresos.filter(x=>{const[y,mm]=x.fecha.split('-');return parseInt(y)==a&&parseInt(mm)==m}); n=`Ingresos_${MONTH_NAMES_FULL[config.idioma][m-1]}_${a}`; ti=`Reporte Ingresos ${MONTH_NAMES_FULL[config.idioma][m-1]} ${a}`;} else if(t==='mensual'){const m=document.getElementById('filtroMes').value,a=document.getElementById('filtroAnioMensual').value; d=gastos.filter(x=>{const[y,mm]=x.fecha.split('-');return parseInt(y)==a&&parseInt(mm)==m}); n=`Gastos_${MONTH_NAMES_FULL[config.idioma][m-1]}_${a}`; ti=`Reporte ${MONTH_NAMES_FULL[config.idioma][m-1]} ${a}`;} else {const a=document.getElementById('filtroAnioHistorico').value; d=gastos.filter(g=>g.fecha.startsWith(a)); n=`Gastos_${a}`; ti=`Reporte ${a}`;} if(!d.length)return mostrarToast(TRADUCTIONS[config.idioma].alertNoExport,'error'); let c="\uFEFFFecha;Descripción;Valor"; if(t!=='ingresos_mes')c+=";Categoría;TipoPago"; c+="\n"; d.forEach(g=>{let de=g.descripcion.replace(/;/g,","), v=g.valor.toString().replace('.',','); if(t==='ingresos_mes')c+=`${g.fecha};${de};${v}\n`; else c+=`${g.fecha};${de};${v};${g.categoria};${g.tipoPago}\n`;}); const f=new File([new Blob([c],{type:'text/csv;charset=utf-8;'})],`${n}.csv`,{type:'text/csv'}); const a=document.createElement('a'); a.href=URL.createObjectURL(f); a.download=f.name; a.click(); if(navigator.canShare&&navigator.canShare({files:[f]}))setTimeout(async()=>{try{await navigator.share({files:[f],title:'Control',text:ti})}catch{}},500); }
function generarPDF(t){ const{jsPDF}=window.jspdf; let d=[],ti='',cid=''; if(t==='ingresos_mes'){const h=new Date(),m=h.getMonth()+1,a=h.getFullYear(); d=ingresos.filter(g=>{const[y,mm]=g.fecha.split('-');return parseInt(y)==a&&parseInt(mm)==m}); ti=`Ingresos ${MONTH_NAMES_FULL[config.idioma][m-1]} ${a}`;} else if(t==='mensual'){const m=document.getElementById('filtroMes').value,a=document.getElementById('filtroAnioMensual').value; d=gastos.filter(g=>{const[y,mm]=g.fecha.split('-');return parseInt(y)==a&&parseInt(mm)==m}); ti=`Gastos ${MONTH_NAMES_FULL[config.idioma][m-1]} ${a}`; cid='chartMensualCanvas';} else {const a=document.getElementById('filtroAnioHistorico').value; d=gastos.filter(g=>g.fecha.startsWith(a)); ti=`Reporte Anual ${a}`; cid='chartHistoricoCanvas';} if(!d.length)return mostrarToast(TRADUCTIONS[config.idioma].alertNoExport,'error'); const doc=new jsPDF(); doc.setFontSize(18); doc.setTextColor(30,58,138); doc.text("Control de Gastos",14,20); doc.setFontSize(14); doc.setTextColor(100); doc.text(ti,14,30); let tot=0; d.forEach(g=>tot+=Number(g.valor)); doc.setFillColor(241,245,249); doc.rect(14,42,180,15,'F'); doc.setFontSize(12); doc.setTextColor(0); doc.text(`TOTAL: ${formatearMoneda(tot)}`,20,51); if(cid){const c=document.getElementById(cid); if(c){const i=c.toDataURL("image/png"); doc.addImage(i,'PNG',15,65,70,70)}} let h=[],b=[]; if(t==='ingresos_mes'){h=[['Fecha','Desc','Valor']]; b=d.map(g=>[g.fecha,g.descripcion,formatearMoneda(g.valor)])} else {h=[['Fecha','Cat','Desc','Valor','Pago']]; b=d.map(g=>[g.fecha,g.categoria,g.descripcion,formatearMoneda(g.valor),g.tipoPago])} doc.autoTable({startY:cid?145:65,head:h,body:b,theme:'grid',headStyles:{fillColor:[71,85,105]},styles:{fontSize:9},columnStyles:t==='ingresos_mes'?{2:{halign:'right'}}:{3:{halign:'right',cellWidth:40}}}); doc.save(`${ti.replace(/ /g,'_')}.pdf`); }
function abrirModalEdicion(id){ const g=gastos.find(x=>x.id===id); if(!g)return; gastoEditandoId=id; document.getElementById('modalFecha').value=g.fecha; document.getElementById('modalCategoria').value=g.categoria; document.getElementById('modalDescripcion').value=g.descripcion; document.getElementById('modalValor').value=g.valor; const r=document.getElementsByName('modalTipoPago'); for(const i of r)if(i.value===g.tipoPago)i.checked=true; document.getElementById('modalEdicion').style.display='block'; }
function cerrarModal(){ document.getElementById('modalEdicion').style.display='none'; gastoEditandoId=null; }
function guardarEdicionDesdeModal(){ const g=gastos.find(x=>x.id===gastoEditandoId); if(g){ g.fecha=document.getElementById('modalFecha').value; g.categoria=document.getElementById('modalCategoria').value; g.descripcion=sanitizar(document.getElementById('modalDescripcion').value); g.valor=parsearValor(document.getElementById('modalValor').value); g.tipoPago=document.querySelector('input[name="modalTipoPago"]:checked').value; gastos.sort(sortData); guardarGastos(); try{actualizarResumenMensual(); actualizarResumenHistorico(); renderizarGastosDelMes(); actualizarSaldoHeader();}catch(e){} cerrarModal(); } }
function confirmarEliminarGasto(){ mostrarModalConfirmacion(TRADUCTIONS[config.idioma].confirmDelete,()=>{ gastos=gastos.filter(g=>g.id!==gastoEditandoId); guardarGastos(); try{actualizarResumenMensual(); actualizarResumenHistorico(); renderizarGastosDelMes(); actualizarSaldoHeader();}catch(e){} cerrarModal(); }); }
function abrirModalEdicionIngreso(id){ const g=ingresos.find(x=>x.id===id); if(!g)return; ingresoEditandoId=id; document.getElementById('modalFechaIngreso').value=g.fecha; document.getElementById('modalDescripcionIngreso').value=g.descripcion; document.getElementById('modalValorIngreso').value=g.valor; document.getElementById('modalEdicionIngreso').style.display='block'; }
function cerrarModalEdicionIngreso(){ document.getElementById('modalEdicionIngreso').style.display='none'; ingresoEditandoId=null; }
function guardarEdicionIngreso(){ const g=ingresos.find(x=>x.id===ingresoEditandoId); if(g){ g.fecha=document.getElementById('modalFechaIngreso').value; g.descripcion=sanitizar(document.getElementById('modalDescripcionIngreso').value); g.valor=parsearValor(document.getElementById('modalValorIngreso').value); ingresos.sort(sortData); guardarIngresos(); try{renderizarIngresosAnuales(); actualizarSaldoHeader(); actualizarResumenMensual(); actualizarResumenHistorico();}catch(e){} cerrarModalEdicionIngreso(); } }
function confirmarEliminarIngreso(){ mostrarModalConfirmacion(TRADUCTIONS[config.idioma].confirmDelete,()=>{ ingresos=ingresos.filter(g=>g.id!==ingresoEditandoId); guardarIngresos(); try{renderizarIngresosAnuales(); actualizarSaldoHeader(); actualizarResumenMensual(); actualizarResumenHistorico();}catch(e){} cerrarModalEdicionIngreso(); }); }
function agregarCategoria(){ const n=sanitizar(document.getElementById('nuevaCategoria').value.trim()); if(!n)return; if(config.categorias.includes(n))return mostrarToast(TRADUCTIONS[config.idioma].alertCatNombreExiste(n),'error'); config.categorias.push(n); config.categorias.sort(); localStorage.setItem('config_v2',JSON.stringify(config)); document.getElementById('nuevaCategoria').value=''; actualizarSelectCategorias(); renderizarTablaCategorias(); renderizarCategoriasSmart(); }
function actualizarSelectCategorias(){ const s=config.categorias.map(c=>`<option value="${c}">${c}</option>`).join(''); document.getElementById('modalCategoria').innerHTML=s; }
function renderizarTablaCategorias(){ 
    const contenedor = document.getElementById('gridCategoriasConfig'); 
    if(!contenedor) return; 
    
    contenedor.innerHTML = ''; 
    
    // 1. Renderizar las categorías existentes
    config.categorias.forEach((c, i) => {
        let emoji = c.split(' ')[0]; 
        let nombre = c.substring(emoji.length).trim();
        if(!nombre) { nombre = emoji; emoji = '🏷️'; }
        
        let metaHTML = ''; 
        let claseExtra = '';
        if(config.presupuestos && config.presupuestos[c] > 0){
            metaHTML = `<div class="config-meta">${formatearMonedaSinDecimales(config.presupuestos[c])}</div>`;
            claseExtra = 'has-budget'; 
        }
        
        const card = document.createElement('div');
        card.className = `config-cat-card ${claseExtra}`;
        card.onclick = () => abrirModalCategoria(i); // Modo Edición
        
        card.innerHTML = `
            <div class="config-avatar">${emoji}</div>
            <div class="config-info">
                <div class="config-name">${nombre}</div>
                ${metaHTML}
            </div>
        `;
        contenedor.appendChild(card);
    });

    // 2. Renderizar la Tarjeta Especial "AÑADIR NUEVA" al final
    const addCard = document.createElement('div');
    addCard.className = 'config-cat-card add-new';
    addCard.onclick = abrirModalNuevaCategoria; // Modo Creación
    addCard.innerHTML = `
        <div class="config-avatar"><i class="fas fa-plus"></i></div>
        <div class="config-name">Nueva Categoría</div>
    `;
    contenedor.appendChild(addCard);
}
// Abre el modal en modo "Crear" (limpio)
function abrirModalNuevaCategoria(){
    categoriaEditandoNombreAntiguo = null; // NULL indica que es nueva
    document.getElementById('modalCategoriaNombre').value = '';
    document.getElementById('modalCategoriaPresupuesto').value = '';
    
    // Ocultar botón de borrar (no puedes borrar algo que no existe aún)
    const btnBorrar = document.getElementById('btnBorrarCategoriaModal');
    if(btnBorrar) btnBorrar.style.display = 'none';
    
    document.getElementById('modalEdicionCategoria').style.display = 'block';
    setTimeout(() => document.getElementById('modalCategoriaNombre').focus(), 100);
}
function abrirModalCategoria(i){ 
    categoriaEditandoNombreAntiguo = config.categorias[i]; 
    document.getElementById('modalCategoriaNombre').value = categoriaEditandoNombreAntiguo; 
    
    const p = (config.presupuestos && config.presupuestos[categoriaEditandoNombreAntiguo]) 
              ? config.presupuestos[categoriaEditandoNombreAntiguo] : ''; 
    document.getElementById('modalCategoriaPresupuesto').value = p; 
    
    // Mostrar botón de borrar
    const btnBorrar = document.getElementById('btnBorrarCategoriaModal');
    if(btnBorrar) {
        btnBorrar.style.display = 'block';
        // Actualizamos el onclick para pasar el índice correcto
        btnBorrar.onclick = () => confirmarEliminarCategoria(i);
    }
    
    document.getElementById('modalEdicionCategoria').style.display = 'block'; 
}
function cerrarModalCategoria(){ document.getElementById('modalEdicionCategoria').style.display='none'; }
function guardarEdicionCategoria(){ 
    const n = sanitizar(document.getElementById('modalCategoriaNombre').value.trim()); 
    const p = parsearValor(document.getElementById('modalCategoriaPresupuesto').value); 
    
    if(!n) return mostrarToast(TRADUCTIONS[config.idioma].alertMissing, 'error');

    // CASO 1: ES UNA NUEVA CATEGORÍA
    if(categoriaEditandoNombreAntiguo === null){
        if(config.categorias.includes(n)) return mostrarToast(TRADUCTIONS[config.idioma].alertCatNombreExiste(n),'error');
        config.categorias.push(n);
        config.categorias.sort();
        // Guardar presupuesto si se puso
        if(p > 0) {
            if(!config.presupuestos) config.presupuestos = {};
            config.presupuestos[n] = p;
        }
    } 
    // CASO 2: ES UNA EDICIÓN
    else {
        // Si cambió el nombre, actualizamos referencias
        if(n !== categoriaEditandoNombreAntiguo){
            if(config.categorias.includes(n)) return mostrarToast(TRADUCTIONS[config.idioma].alertCatNombreExiste(n),'error');
            
            // Actualizar lista
            const idx = config.categorias.indexOf(categoriaEditandoNombreAntiguo);
            if(idx > -1) config.categorias[idx] = n;
            config.categorias.sort(); // Reordenar alfabéticamente
            
            // Actualizar gastos históricos
            gastos.forEach(g => { if(g.categoria === categoriaEditandoNombreAntiguo) g.categoria = n });
            
            // Migrar presupuesto al nuevo nombre
            if(config.presupuestos && config.presupuestos[categoriaEditandoNombreAntiguo]){
                config.presupuestos[n] = config.presupuestos[categoriaEditandoNombreAntiguo];
                delete config.presupuestos[categoriaEditandoNombreAntiguo];
            }
        }
        
        // Actualizar valor del presupuesto (para el nombre final 'n')
        if(!config.presupuestos) config.presupuestos = {};
        if(p > 0) config.presupuestos[n] = p;
        else delete config.presupuestos[n];
    }

    // Guardar todo y refrescar
    localStorage.setItem('config_v2', JSON.stringify(config)); 
    guardarGastos(); 
    
    renderizarTablaCategorias(); 
    renderizarCategoriasSmart(); 
    actualizarSelectCategorias(); 
    cerrarModalCategoria(); 
    
    mostrarToast("Categoría guardada", "success"); 
}
function confirmarEliminarCategoria(i){ const c=config.categorias[i]; if(gastos.some(g=>g.categoria===c))return mostrarToast(TRADUCTIONS[config.idioma].alertCatNoSePuedeBorrar(c),'error'); mostrarModalConfirmacion(TRADUCTIONS[config.idioma].modalConfirmDeleteCat(c),()=>{config.categorias.splice(i,1); if(config.presupuestos&&config.presupuestos[c])delete config.presupuestos[c]; localStorage.setItem('config_v2',JSON.stringify(config)); guardarGastos(); renderizarTablaCategorias(); renderizarCategoriasSmart(); actualizarSelectCategorias(); cerrarModalConfirmacion(); mostrarToast(TRADUCTIONS[config.idioma].toastCategoriaEliminada,"success");}); }
function mostrarModalConfirmacion(t,c){ document.getElementById('modalConfirmBody').textContent=t; confirmCallback=c; document.getElementById('modalConfirmacion').style.display='block'; }
function ejecutarConfirmacion(){ if(confirmCallback){try{confirmCallback()}catch(e){console.error(e)}} cerrarModalConfirmacion(); }
function cerrarModalConfirmacion(){ document.getElementById('modalConfirmacion').style.display='none'; }
function inicializarSelectoresMesAnio(){ const sm=document.getElementById('filtroMes'), sa=document.getElementById('filtroAnioMensual'), sh=document.getElementById('filtroAnioHistorico'); if(!sm||!sa||!sh)return; sm.innerHTML=''; sa.innerHTML=''; sh.innerHTML=''; const d=gastos.map(g=>parseInt(g.fecha.split('-')[0])); const c=new Date().getFullYear(); const min=d.length?Math.min(...d,c):c; const max=Math.max(...d,2030); for(let y=max;y>=min;y--){sa.add(new Option(y,y)); sh.add(new Option(y,y));} MONTH_NAMES_FULL[config.idioma].forEach((m,i)=>sm.add(new Option(m,i+1))); const h=new Date(); sm.value=h.getMonth()+1; sa.value=h.getFullYear(); sh.value=h.getFullYear(); }
function actualizarGraficoCategorias(l,c,k,t=''){ const ctx=document.getElementById(c).getContext('2d'); const d={}; let tot=0; l.forEach(g=>{d[g.categoria]=(d[g.categoria]||0)+Number(g.valor);tot+=Number(g.valor)}); if(chartInstances[k]) chartInstances[k].destroy(); chartInstances[k]=new Chart(ctx,{type:'doughnut',data:{labels:Object.keys(d),datasets:[{data:Object.values(d),backgroundColor:PALETA_COLORES,borderWidth:1}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},datalabels:{color:'white',font:{weight:'bold',size:12},display:ctx=>(ctx.dataset.data[ctx.dataIndex]/tot)>0.04,formatter:v=>(v*100/tot).toFixed(0)+"%"},title:{display:!!t,text:t,font:{size:14}}}}}); }
function actualizarGraficoEvolucionAnual(da){ const ctx=document.getElementById('chartHistoricoMesesCanvas').getContext('2d'); const i=da.map(d=>d.ingreso), g=da.map(d=>d.gasto); if(chartInstances.historicoMeses) chartInstances.historicoMeses.destroy(); chartInstances.historicoMeses=new Chart(ctx,{type:'bar',data:{labels:MONTH_NAMES_FULL[config.idioma].map(m=>m.substr(0,3)),datasets:[{label:'Ingreso',data:i,backgroundColor:'#2563EB',borderRadius:4},{label:'Gasto',data:g,backgroundColor:'#F87171',borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},datalabels:{display:false}},scales:{x:{grid:{display:false}},y:{beginAtZero:true,grid:{color:'#f0f0f0'}}}}}); }
// --- NUEVAS FUNCIONES PARA CONFIGURACIÓN VISUAL ---

function actualizarCardsConfig(){
    // 1. Actualizar Tarjeta Moneda
    const dispMoneda = document.getElementById('displayMonedaCard');
    if(dispMoneda) dispMoneda.textContent = config.moneda;
    
    // 2. Actualizar Tarjeta Idioma
    const dispIdioma = document.getElementById('displayIdiomaCard');
    if(dispIdioma) dispIdioma.textContent = config.idioma.toUpperCase();
    
    // 3. Actualizar Icono PIN
    const lockIcon = document.getElementById('iconLockState');
    if(lockIcon) {
        if(pinEstaActivo()) {
            lockIcon.style.color = 'var(--success-color)'; // Verde si está activo
            lockIcon.className = 'fas fa-lock mini-card-icon';
        } else {
            lockIcon.style.color = 'var(--secondary-color)'; // Gris si está inactivo
            lockIcon.className = 'fas fa-lock-open mini-card-icon';
        }
    }
}

// Helper para activar el switch del PIN al tocar la tarjeta entera
function triggerTogglePin(e){
    // Evitamos doble disparo si se toca directamente el switch
    if(e.target.tagName !== 'INPUT' && e.target.className !== 'slider'){
        document.getElementById('togglePin').click();
    }
}


// --- LÓGICA MODAL MONEDA (CORREGIDA) ---
function abrirModalMoneda(){
    const modal = document.getElementById('modalSeleccionMoneda');
    modal.style.display='block';
    
    // Resaltar la opción seleccionada actualmente
    const items = modal.querySelectorAll('.option-item');
    items.forEach(item => {
        item.classList.remove('selected');
        // AHORA COMPARAMOS EXACTAMENTE EL VALOR (data-val)
        if(item.getAttribute('data-val') === config.moneda){
            item.classList.add('selected');
        }
    });
}

function cambiarMoneda(nuevaMoneda){
    config.moneda = nuevaMoneda;
    localStorage.setItem('config_v2', JSON.stringify(config));
    
    // Cerrar modal y refrescar todo
    document.getElementById('modalSeleccionMoneda').style.display='none';
    cargarDatos(); // Recarga la app para aplicar el símbolo en todos lados
    mostrarToast("Moneda actualizada", "success");
}

// --- LÓGICA MODAL IDIOMA ---
function abrirModalIdioma(){
    const modal = document.getElementById('modalSeleccionIdioma');
    modal.style.display='block';
    
    // Resaltar selección
    const codigoBusqueda = config.idioma === 'es' ? 'Español' : 'English';
    const items = modal.querySelectorAll('.option-item');
    items.forEach(item => {
        item.classList.remove('selected');
        if(item.textContent.includes(codigoBusqueda)){
            item.classList.add('selected');
        }
    });
}

function cambiarIdioma(nuevoIdioma){
    config.idioma = nuevoIdioma;
    localStorage.setItem('config_v2', JSON.stringify(config));
    
    // Aplicar cambios
    aplicarIdioma(); 
    document.getElementById('modalSeleccionIdioma').style.display='none';
    actualizarCardsConfig(); // Actualizar la tarjetita "ES/EN"
    mostrarToast("Idioma actualizado", "success");
}

function ocultarConfirmaciones(){
    document.getElementById('feedbackUltimoGasto').style.display = 'none';
    document.getElementById('feedbackUltimoIngreso').style.display = 'none';
}
