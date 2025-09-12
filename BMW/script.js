document.getElementById('elektroBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showContent("Bu yerda Электромобили haqida ma'lumotlar bo'ladi.");
  });
  
  document.getElementById('vladelBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showContent("Bu yerda Владельцам uchun ma'lumotlar bo'ladi.");
  });
  
  document.getElementById('pokupkaBtn').addEventListener('click', function(e) {
    e.preventDefault();
    showContent("Bu yerda Покупка онлайн haqida ma'lumotlar bo'ladi.");
  });
  
  function showContent(text) {
    const dropdown = document.getElementById('dropdown-content');
    dropdown.style.display = 'block';
    dropdown.innerHTML = `<p>${text}</p>`;
  }
  