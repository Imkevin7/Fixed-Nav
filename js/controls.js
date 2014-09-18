function fixNav(){
  $('#leftMenu').hover(function () {
                $(this).css({
                    left: '0',
                    background: 'white'
                });
                $('#menuHide').show();


            }, function () {
                $(this).css({
                    left: '-85px',
                    background: '#333'
                });
                $('#menuHide').hide();


            });        
}