

function App() {
  return document.body.insertAdjacentHTML('beforeend', `
    <div class="accordion" id="accordion-1" style="max-width: 30rem; margin: 1rem auto 2rem">
    <div class="accordion__item">
      <div class="accordion__header">Заголовок 1</div>
      <div class="accordion__body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur et numquam optio, aut
        consequuntur iure magni tempore quo, velit, quos ipsum perferendis sit quidem sapiente
      </div>
    </div>
    <div class="accordion__item">
      <div class="accordion__header">Заголовок 2</div>
      <div class="accordion__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum deleniti recusandae
        placeat rem eius quod aliquid adipisci nemo alias debitis corporis pariatur quibusdam est,
      </div>
    </div>
    <div class="accordion__item">
      <div class="accordion__header">Заголовок 3</div>
      <div class="accordion__body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat dicta vel
        sapiente laudantium minima porro voluptatem nam, alias aliquam qui quasi eveniet odit
      </div>
    </div>
  </div>
  
  <div class="accordion" id="accordion-2" style="max-width: 30rem; margin: 1rem auto">
    <div class="accordion__item">
      <div class="accordion__header">Заголовок 4</div>
      <div class="accordion__body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur et numquam optio, aut
        consequuntur iure magni tempore quo, velit, quos ipsum perferendis sit quidem sapiente
      </div>
    </div>
    <div class="accordion__item">
      <div class="accordion__header">Заголовок 5</div>
      <div class="accordion__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum deleniti recusandae
        placeat rem eius quod aliquid adipisci nemo alias debitis corporis pariatur quibusdam est,
      </div>
    </div>
    <div class="accordion__item">
      <div class="accordion__header">Заголовок 6</div>
      <div class="accordion__body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat dicta vel
        sapiente laudantium minima porro voluptatem nam, alias aliquam qui quasi eveniet odit
      </div>
    </div>
  </div>
  `)
}

App()