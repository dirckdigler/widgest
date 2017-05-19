var arrLang = {
        'en' : {
          'language' : 'Language',
          'diagram stats' : 'Diagram Stats',
          'month reports' : 'Month Reports',
          'upload files' : 'UPLOAD FILES',
          'share links' : 'SHARE LINKS',
          'back up' : 'BACK UP',
          'today' : 'Today',
          'shares traded' : 'Shares Traded',
          'market cap' : 'Market Cap',
          'yearly charge' : 'Yearly Charge',
          'your talent amazes! This is awsome' : 'Your talent amazes! This is awsome',
          'exited to see the final product' : 'Exited to see the final product.'

        },
        'es' : {
          'language' : 'Lenguaje',
          'diagram stats' : 'Diagrama',
          'month reports' : 'Reportes',
          'upload files' : 'SUBIR',
          'share links' : 'COMPARTIR',
          'back up' : 'RESPALDO',
          'today' : 'Hoy',
          'shares traded' : 'Acciones',
          'market cap' : 'Capitalización',
          'yearly charge' : 'Cargo Anual',
          'your talent amazes! This is awsome' : 'Su talento sorprende! Esto es increíble.',
          'exited to see the final product' : 'Emocionado por ver el producto final.'

        }
      }

$(function() {
  $('.translate').click(function() {
    var lang = $(this).attr('id');
    $('.lang').each(function(index, element) {
      console.log(arrLang[lang]);
      $(this).text(arrLang[lang][$(this).attr('key')]);
    })
  });
});