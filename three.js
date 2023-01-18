
fetch('https://catfact.ninja/fact')
	.then(response => {
        return response.json();
    })
	.then(response2 => {
        console.log(response2.fact);
        
            let egpPrice = document.querySelector(".egp span");
            let cu = response2.fact;
            console.log(cu);
            egpPrice.innerHTML = cu;
    });
