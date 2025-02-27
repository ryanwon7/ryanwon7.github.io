$(document).ready( function () {
    $('table.display').DataTable({
    	paging: false,
    	order: [[ 1, "dsc" ]],
    	searching: false,
    	info: false,
    	aoColumnDefs: [
            {
                orderSequence: ["desc", "asc"],
                aTargets: ['_all']
            }
        ]
    });
    } );

$(document).ready( function () {
    $('table.display2').DataTable({
        paging: false,
        order: [[ 1, "dsc" ]],
        columnDefs: [ { orderable: false, targets: [0, 1, 2] }],
        searching: false,
        info: false,
        aoColumnDefs: [
            {
                orderSequence: ["desc", "asc"],
                aTargets: ['_all']
            }
        ]
    });
    } );
$(document).ready( function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
    });
    $('table.display3').DataTable({
        paging: false,
        searching: false,
        info: false,
        order: [[ 1, "asc" ]]
    });
    } );

$(document).ready( function () {
    $('table.display4').DataTable({
        paging: true,
        searching: false,
        info: false,
        order: [[ 1, "dsc" ]],
        aoColumnDefs: [
            {
                orderSequence: ["desc", "asc"],
                aTargets: ['_all']
            }
        ]
    });
    } );

$(document).ready( function () {
    $('table.display5').DataTable({
        paging: false,
        searching: false,
        info: false,
        order: [[ 0, "asc" ]],
        aoColumnDefs: [
            {
                orderSequence: ["desc", "asc"],
                aTargets: ['_all']
            }
        ]
    });
    } );