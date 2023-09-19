function create(words) {
   const contentElement = document.getElementById('content');

   words.forEach(word => {
      const divElement = document.createElement('div');
      const pElement = document.createElement('p');

      pElement.textContent = word;
      pElement.style.display = 'none';
      divElement.appendChild(pElement);

      divElement.addEventListener('click', (e) => {
         pElement.style.display = 'block';
         // e.currentTarget.querySelector('p').style.display = 'block';
         // e.currentTarget.children[0].style.display = 'block';
      });

      contentElement.appendChild(divElement);
   });
}