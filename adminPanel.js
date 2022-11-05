// var deleteModal = document.getElementById('myModal')
// var deleteInput = document.getElementById('myInput')

// deleteModal.addEventListener('shown.bs.modal', function () {
//     deleteInput.focus()
// })
var focusedRow = -1;

const demoTable = [
    ["dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy"],
    ["Kac", "Bosz", "M", "22", "kac@op.pl", "997", "Dawca", "Main", "opolskie", "Nysa", "48-300", "Zamoście", "0", "-", "25798"],
    ["Mi", "Ki", "M", "22", "KLV@op.pl", "112", "Dawca", "Main", "opolskie", "Nysa", "48-303", "OSD", "1", "1", "25799"],
    ["Ju", "Lia", "K", "21", "ju1lin@op.pl", "666", "Pielęgniarka", "Main", "opolskie", "Nysa", "48-303", "Południe", "465", "222", "354564165"],
];

$(window).load(() => {
    $("#successAlert").hide();
    $("#dangerAlert").hide();
    for (let i = 1; i < demoTable.length; i++) {
        let aux = "data-rowId=" + i + " ";
        let toInsert = 
        $('<tr><th scope="row">' + i + '</th><td>'+ demoTable[i][7] +'</td><td>'+ demoTable[i][0] +'</td><td>'+ demoTable[i][1] +'</td><td>'+ demoTable[i][4] +'</td><td>'+ demoTable[i][6] +'</td><td><div class="ms-1 d-inline w-25"><a href="" data-bs-toggle="modal" data-bs-target="#viewModal" title="Podejrzyj" data-toggle="tooltip"' + aux + 'onclick="setFocusRow(this, true)"><img src="src/icons/eye.svg"></a></div><div class="me-1 float-end d-inline w-25"><a href="" data-bs-toggle="modal" data-bs-target="#exampleModal"' + aux + 'onclick="setFocusRow(this, false)"><img title="Usuń" data-toggle="tooltip" src="src/icons/trash.svg"></a></div></td></tr>');

        $('#mainTable').append(toInsert);
    }
    
});


function setFocusRow(element, viewMode) {
    focusedRow = parseInt(element.getAttribute('data-rowId'));
    console.log("Focused row id is now = ", focusedRow);

    // Id usuniętego rekordu 
    $('#rowId').html(focusedRow + "");
    $('#rowId2').html(focusedRow + "");


    console.log(viewMode);
    if(viewMode) {
        $("#name").html(demoTable[focusedRow][0]);
        $("#surname").html(demoTable[focusedRow][1]);
        $("#sex").html(demoTable[focusedRow][2]);
        $("#age").html(demoTable[focusedRow][3]);
        $("#email").html(demoTable[focusedRow][4]);
        $("#phone").html(demoTable[focusedRow][5]);
        $("#permission").html(demoTable[focusedRow][6]);
        $("#unit").html(demoTable[focusedRow][7]);
        $("#county").html(demoTable[focusedRow][8]);
        $("#city").html(demoTable[focusedRow][9]);
        $("#postalCode").html(demoTable[focusedRow][10]);
        $("#street").html(demoTable[focusedRow][11]);
        $("#house").html(demoTable[focusedRow][12]);
        $("#flat").html(demoTable[focusedRow][13]);
        $("#pesel").html(demoTable[focusedRow][14]);
    }
}

function delRecord() {
    $("#successAlert").slideDown();
    setTimeout(() => {
        $("#successAlert").slideUp(500);
    }, 3000);
    error(); //test
}

function error() {
    $("#dangerAlert").slideDown();
    setTimeout(() => {
        $("#dangerAlert").slideUp(500);
    }, 3000);
}

