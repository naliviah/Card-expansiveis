const { useState } = React;

function ProdutoCard({ produto }) {
    const [aberto, setAberto] = useState(false);

    return (
        <div className={`card ${aberto ? "aberto" : ""}`} onClick={() => setAberto(!aberto)}>
            
            <img className="img-produto" src={produto.imagem} alt={produto.nome} />

            <h2>{produto.nome}</h2>
            <p className="preco">R$ {produto.preco}</p>

            {aberto && (
                <div className="mais-info">
                    <p>{produto.descricao}</p>
                </div>
            )}
        </div>
    );
}

function App() {
    const produtos = [
        {
            nome: "Iphone 17",
            preco: "12.598,95",
            descricao: "Conheça o iPhone 17. Câmera frontal Center Stage. Ceramic Shield de última geração. Tela ProMotion de 6,3 polegadas. Chip A19. Cinco cores lindas.",
            imagem: "https://m.media-amazon.com/images/I/51k0qRQFcuL._AC_SX522_.jpg"
        },
        {
            nome: "Tablet Samsung Galaxy Tab S10 Lite ",
            preco: "2.234,39",
            descricao: "Com uma memória interna de 128GB e 8GB de RAM, o Galaxy Tab S10 FE é a escolha perfeita para organizar suas fotos, anotações, documentos e arquivos para acesso ",
            imagem: "https://api.store.vivo.com.br/medias/515Wx515H-22024185-1-.jpg?context=bWFzdGVyfHByb2R1Y3RpbWFnZXN8MTg3ODh8aW1hZ2UvanBlZ3xhRGt5TDJneE1pODVORGczTkRRME16RXlNRGswTHpVeE5WZDROVEUxU0Y4eU1qQXlOREU0TlY4Z0tERXBMbXB3Wnd8NzJhMTMzYjM0NmVkMjcyNGYyZTk5ZjE2NGIxOWQ4N2Q1MjA1ZjI5NWUzY2UwODg2OTc4ZWVjYTA5YmQ3ZTNmMw"
        },
        {
            nome: "Samsung Galaxy Buds Core",
            preco: "309,99",
            descricao: "Os fones de ouvido Samsung são acessórios essenciais para quem busca uma experiência de áudio de alta qualidade. Com uma ampla variedade de opções disponíveis",
            imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRozqe6pbu5RMPKCPOOYdDrBRzkBViaX-v-4Mrc83JMLepdsEJo7nDebtw12flfuY0sCLkWAQsiVJLKhXa19q9c07lLtpTndvWwdhwKtaiAXFqsgFkNKat48oqWhgUeCJPECGUMA6NiUbg&usqp=CAc"
        }
    ];

    return (
        <div className="container">
            {produtos.map((p, index) => (
                <ProdutoCard key={index} produto={p} />
            ))}
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
