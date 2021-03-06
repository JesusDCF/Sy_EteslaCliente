var lista;
var option;
var indexador = 0;
var indexMostrar = 0;
var banderaEditar = false;
var arrayPeriodosGDMTH = [];
var objPeriodosGDMTH = {};

$(document).ready(function(){
    mostrarPeriodo();
});

function agregarPeriodo(){
    var BkWh = document.getElementById('inpBkWh').value;
    var IkWh = document.getElementById('inpIkWh').value;
    var PkWh = document.getElementById('inpPkWh').value;
    var BkW = document.getElementById('inpBkw').value;
    var IkW = document.getElementById('inpIkw').value;
    var PkW = document.getElementById('inpPkw').value;
    var Bmxn = document.getElementById('B(mxn/kWh)').value;
    var Imxn = document.getElementById('I(mxn/kWh)').value;
    var Pmxn = document.getElementById('P(mxn/kWh)').value;
    var pagoTransmision = document.getElementById('inpPagoTransmision').value;
    var Cmxn = document.getElementById('C(mxn/kW)').value;
    var Dmxn = document.getElementById('D(mxn/kW)').value;

    /*Validar campos vacios*/
    if(validarCamposVacios(BkWh) || validarCamposVacios(IkWh) || validarCamposVacios(PkWh) || validarCamposVacios(BkW) || validarCamposVacios(IkW) || validarCamposVacios(PkW) || validarCamposVacios(Bmxn) || validarCamposVacios(Imxn) || validarCamposVacios(Pmxn) || validarCamposVacios(pagoTransmision) || validarCamposVacios(Cmxn) || validarCamposVacios(Dmxn))
    {
        alert('Todos los campos pertenecientes a los datos de consumo, deben de llenarse');
    }
    else{
        objPeriodosGDMTH = {
            bkwh: BkWh,
            ikwh: IkWh,
            pkwh: PkWh,
            bkw: BkW,
            ikw: IkW,
            pkw: PkW,
            bmxn: Bmxn,
            imxn: Imxn,
            pmxn: Pmxn,
            pagoTransmi: pagoTransmision,
            cmxn: Cmxn,
            dmxn: Dmxn
        };
    
        if(arrayPeriodosGDMTH.length < 12){
            arrayPeriodosGDMTH.push(objPeriodosGDMTH);
            sumarAlIndexador();
            limpiarCampos();
        }
        else
        {
            alert('Solo se pueden ingresar 12 periodos');
            lista.remove(lista.selectedIndex);
        }
    }

    console.log('Longitud de array: '+arrayPeriodosGDMTH.length);
}

function mostrarPeriodo(){
    /*Se desplega el contenido del array en los campos*/ 
    $("#lstPeriodosGDMTH").on("change", function(){
        indexMostrar = document.getElementById("lstPeriodosGDMTH").value;
        document.getElementById('inpBkWh').value = arrayPeriodosGDMTH[indexMostrar-1].bkwh.toString();
        document.getElementById('inpIkWh').value = arrayPeriodosGDMTH[indexMostrar-1].ikwh.toString();
        document.getElementById('inpPkWh').value = arrayPeriodosGDMTH[indexMostrar-1].pkwh.toString();
        document.getElementById('inpBkw').value = arrayPeriodosGDMTH[indexMostrar-1].bkw.toString();
        document.getElementById('inpIkw').value = arrayPeriodosGDMTH[indexMostrar-1].ikw.toString();
        document.getElementById('inpPkw').value = arrayPeriodosGDMTH[indexMostrar-1].pkw.toString();
        document.getElementById('B(mxn/kWh)').value = arrayPeriodosGDMTH[indexMostrar-1].bmxn.toString();
        document.getElementById('I(mxn/kWh)').value = arrayPeriodosGDMTH[indexMostrar-1].imxn.toString();
        document.getElementById('P(mxn/kWh)').value = arrayPeriodosGDMTH[indexMostrar-1].pmxn.toString();
        document.getElementById('inpPagoTransmision').value = arrayPeriodosGDMTH[indexMostrar-1].pagoTransmi.toString();
        document.getElementById('C(mxn/kW)').value = arrayPeriodosGDMTH[indexMostrar-1].cmxn.toString();
        document.getElementById('D(mxn/kW)').value = arrayPeriodosGDMTH[indexMostrar-1].dmxn.toString();

        if(indexMostrar < (indexador)){
            /*El usuario estara navegando en los periodos ya guardados en memoria*/
            bloquearCampos();
            /*Y posiblemente quiera editar, por eso se cambia la bandera a true*/
            banderaEditar = true;
        }
        else if(indexMostrar == (indexador)){
            desbloquearCampos();
            banderaEditar = false;
        }

        logicaBotones();
    });
}

function sumarAlIndexador(){
    indexador = arrayPeriodosGDMTH.length;
    lista = document.getElementById("lstPeriodosGDMTH");    
    option = document.createElement("option");
    option.text = indexador + 1;
    lista.add(option);
    lista.selectedIndex = indexador.toString();
}

function actualizarPeriodo(){}

function eliminarPeriodo(){
    arrayPeriodosGDMTH.splice(0,(indexMostrar-1));
    console.log('Array con un elemento eliminado: '+JSON.stringify(arrayPeriodosGDMTH));
}

function validarCamposVacios(valor){
    valor = valor.replace("&nbsp;", "");
    valor = valor == undefined ? "" : valor;

    if (!valor || 0 === valor.trim().length){
        return true;
    }
    else{
        return false;
    }
}

function logicaBotones(){
    if(banderaEditar == true){
        $('#btnEditarPeriodo').prop("disabled",false);
        $('#btnEliminarPeriodo').prop("disabled",false);
        $('#btnAgregarPeriodo').prop("disabled",true);
    }
    else if(banderaEditar == false){
        $('#btnEditarPeriodo').prop("disabled",true);
        $('#btnEliminarPeriodo').prop("disabled",true);
        if((indexador + 1) < 3){
            $('#btnAgregarPeriodo').prop("disabled",true);
        }
    }

    $('#btnEditarPeriodo').click(function(){
        $('#btnActualizarPeriodo').prop("disabled",false);
        $('#btnEditarPeriodo').prop("disabled",true);
        $('#btnEliminarPeriodo').prop("disabled",true);
        $('#btnAgregarPeriodo').prop("disabled",true);
        $("#lstPeriodosGDMTH").prop("disabled",true);
        desbloquearCampos();
    });

    $('#btnActualizarPeriodo').click(function(){
        $('#btnEditarPeriodo').prop("disabled",false);
        $('#btnEliminarPeriodo').prop("disabled",false);
        $('#btnActualizarPeriodo').prop("disabled",true);
        $('#btnAgregarPeriodo').prop("disabled",true);
        $("#lstPeriodosGDMTH").prop("disabled",false);
        bloquearCampos();
    });
}

function bloquearCampos(){
    $('input[type="number"]').attr("readOnly",true);
}

function desbloquearCampos(){
    $('input[type="number"]').attr("readOnly",false);
}

function limpiarCampos(){
    $('input[type="number"]').val('');
}

function GDMTH(){
    document.getElementById('divGDMTO').style.display = 'none';
    document.getElementById('divGDMTH').style.display = '';
}
