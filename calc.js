$(function () {
  $('#calc').click(function () {
    const milhas = parseFloat($('#milhas').val());
    if (milhas) {
      const metros = 1609.34 * milhas;
      $('#milhas').val('');
      $('#metros').val(metros.toFixed(2));
    }else{
      alert('O campo milhas não pode estar vazio!');
    }
  });
});
