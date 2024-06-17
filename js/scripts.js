//dropdown privacidade
document.addEventListener('DOMContentLoaded', (event) => {
  const privacidadeLink = document.getElementById('privacidade');
  const dropdown = document.getElementById('dropdown-privacidade');

  privacidadeLink.addEventListener('click', function(event) {
    event.preventDefault();
    dropdown.classList.toggle('show');
    this.classList.toggle('active-link'); // Adiciona ou remove a classe 'active-link' no link
  });

  window.addEventListener('click', function(event) {
    if (!event.target.matches('#privacidade')) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        privacidadeLink.classList.remove('active-link'); // Remove a classe 'active-link' se clicar fora
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const recursosLink = document.getElementById('recursos');
  const dropdown = document.getElementById('dropdown-recursos');

  recursosLink.addEventListener('click', function(event) {
    event.preventDefault();
    dropdown.classList.toggle('show');
    this.classList.toggle('active-link'); // Adiciona ou remove a classe 'active-link' no link
  });

  window.addEventListener('click', function(event) {
    if (!event.target.matches('#recursos')) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        recursosLink.classList.remove('active-link'); // Remove a classe 'active-link' se clicar fora
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const centralLink = document.getElementById('central');
  const dropdown = document.getElementById('dropdown-central');

  centralLink.addEventListener('click', function(event) {
    event.preventDefault();
    dropdown.classList.toggle('show');
    this.classList.toggle('active-link'); // Adiciona ou remove a classe 'active-link' no link
  });

  window.addEventListener('click', function(event) {
    if (!event.target.matches('#central')) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        centralLink.classList.remove('active-link'); // Remove a classe 'active-link' se clicar fora
      }
    }
  });
});


//direcionar para pagina de baixar

document.addEventListener('DOMContentLoaded', (event) => {
  const baixarLink = document.getElementById('baixar');

  baixarLink.addEventListener('click', function(event) {
    event.preventDefault(); // Impede a ação padrão do link
    window.location.href = 'baixar.html'; // Redireciona para a página 'baixar.html'
  });
});

