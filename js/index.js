fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    let card = '<div class="row row-cols-1 row-cols-md3 g-4">'

    for (let user of data) {
        card += `<div class="col">
                    <div class="card">
                        <img src="https://www.cavsi.com/espanol/wp-content/uploads/informatica/usuario-de-computadoras.jpg" class="card-img-top" alt="Usuario">
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Nombre de usuario:</strong> ${user.username}</li>
                                <li class="list-group-item"><strong>Correo electrónico:</strong> ${user.email}</li>
                                <li class="list-group-item"><strong>Calle:</strong> ${user.address.street}</li>
                                <li class="list-group-item"><strong>Ciudad:</strong> ${user.address.city}</li>
                                <li class="list-group-item"><strong>Teléfono:</strong> ${user.phone}</li>
                                <li class="list-group-item"><strong>Compañía: </strong> ${user.company.name}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
    }
    card += '</div>'

    document.getElementById("cardList").innerHTML = card
})