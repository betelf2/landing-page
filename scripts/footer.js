const footerContainer = document.getElementById("footer");

const footerData = `
            <footer>
                <style>
                    footer 
                    {
                        background-color: #000000;
                        padding: 20px 0;
                        color: #ffffff;
                    }
                </style>
                <div class="container text-center"> <!-- Centraliza elementos na linha -->
                    <p>Betel Brasileiro Funcionários II &copy; 2024</p>
                </div>
            </footer>
        `;

footerContainer.innerHTML += footerData;