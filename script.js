// Katalog produktów w JS
const products = {
    "odtłuszczacze": [
        "ACETON", "DENATURAT BEZBARWNY", "ACETON TECHNICZNY", "ALKOHOL BENZYLOWY",
        "DENATURAT FIOLETOWY", "IPA CLEANER (85%)", "BENZYNA EKSTRAKCYJNA", "ZMYWACZ HAMULCOWY"
    ],
    "rozpuszczalniki": [
        "ROZPUSZCZALNIK ALKIDOWY", "ROZPUSZCZALNIK KARBAMIDOWY", "ROZPUSZCZALNIK UNIWERSALNY",
        "ROZPUSZCZALNIK FTALOWY", "ROZPUSZCZALNIK LAKOWY", "ROZPUSZCZALNIK CHLOROKAUCZUKOWY",
        "ROZPUSZCZALNIK FTALOWO-KARBAMIDOWY", "ROZPUSZCZALNIK NITRO", "ROZPUSZCZALNIK TOLUENOWY"
    ],
    "profesjonalna chemia": [
        "ALKOHOL ETYLOWY", "GLIKOL ETYLENOWY", "OCTAN BUTYLU", "ALKOHOL METYLOWY",
        "GLIKOL PROPYLENOWY", "SMAR DO LANCUCHOW", "NADTLENEK WODORU", "OCTAN ETYLU"
    ],
    "dom i ogród": [
        "BIOPALIWO BEZWONNE", "GLICERYNA ROSLINNA", "PŁYN LUGOLA", "BIOPALIWO ZAPACHOWE", "PODCHLORYN SODU",
        "DMSO", "TERPENTYNA BALSAMICZNA", "KWAS OCTOWY", "WODA UTLENIONA", "WODA DEMINERALIZOWANA",
        "PŁYN KATALITYCZNY", "PŁYN DO SPRYSKIWACZY", "PAINT REMOVER", "PŁYN CHLODNICZY G12+",
        "DWUTLENEK CERU", "PŁYN SOLARNY", "KONCENTRAT CHŁODNICZY", "PŁYN ANTYBAKTERYJNY"
    ],
    "surowce chemiczne": [
        "ACETON","ALKOHOL ETYLOWY","ALKOHOL METYLOWY","ALKOHOL BENZYLOWY","GLICERYNA ROSLINNA","MOCZNIK",
        "OCTAN BUTYLU","OCTAN ETYLU","OCTAN IZOPROPYLU","OCTAN METOKSYPROPYLU","OCTAN METYLU",
        "GLIKOL ETYLENOWY","GLIKOL PROPYLENOWY","METOKSYPROPANOL","ETOKSYPROPANOL","BUTYLOGLIKOL",
        "DIGLIKOL","METYLOKETON MEK","KWAS ADYPINOWY","KWAS ABS","KWAS ASKORBINOWY","KWAS AZOTOWY",
        "KWAS BENZOESOWY","KWAS BOROWY","KWAS CYTRYNOWY","KWAS FOSFOROWY","KWAS GLIKOLOWY","KWAS JABLKOWY",
        "KWAS MLEKOWY","KWAS MROWKOWY","KWAS OCTOWY","KWAS SIARKOWY","KWAS SOLNY","KWAS STEARYNOWY",
        "KWAS WERSENOWY","CHLOREK METYLENU","NADTLENEK WODORU","WAPNO CHLOROWANE","WAPNO GASZONE",
        "SODA OCZYSZCZONA","SOL DROGOWA","AZOTAN MAGNEZU","AZOTAN SODU","AZOTAN AMONU","CHLOREK CYNKU",
        "CHLOREK MAGNEZU","CHLOREK MIEDZI","CHLOREK POTASU","CHLOREK WAPNIA","CZTEROBORAN SODU",
        "ETANOLOAMINA","FORMALINA","PODCHLORYN SODU","SIARCZAN MAGNEZU","WEGLAN WAPNIA","WODA AMONIAKALNA",
        "WODOROTLENEK POTASU","BIEL TYTANOWA","TLENEK CERU","TLENEK CHROMU","TLENEK CYNKU","TLENEK MAGNEZU",
        "TLENEK ZELAZA","WODOROTLENEK SODU","TLENEK MIEDZI","KWAS SALICYLOWY"
    ]
};

// Mapowanie kategorii na podstrony
const categoryLinks = {
    "odtłuszczacze": "odtluszczacze.html",
    "rozpuszczalniki": "rozpuszczalniki.html",
    "profesjonalna chemia": "profesjonalna-chemia.html",
    "dom i ogród": "dom-i-ogrod.html",
    "surowce chemiczne": "surowce-chemiczne.html"
};

function searchProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("searchResults");
    
    resultsDiv.style.display = "block"; // pokaż dopiero po pierwszym wyszukaniu
    resultsDiv.innerHTML = "";

    if (!input) {
        resultsDiv.innerHTML = "<p>Wpisz nazwę produktu, aby wyszukać.</p>";
        return;
    }

    let results = [];

    for (const [category, items] of Object.entries(products)) {
        items.forEach(product => {
            if (product.toLowerCase().includes(input)) {
                results.push({ product, category });
            }
        });
    }

    if (results.length > 0) {
        const list = document.createElement("ul");
        results.forEach(r => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = categoryLinks[r.category];
            link.textContent = `${r.product} (${r.category})`;
            li.appendChild(link);
            list.appendChild(li);
        });
        resultsDiv.appendChild(list);
    } else {
        resultsDiv.innerHTML = "<p>Brak wyników dla podanego zapytania.</p>";
    }
}
// Funkcja losująca x produktów
function getRandomProducts(num) {
    let allProducts = [];

    // Tworzymy płaską listę obiektów {product, category} - tylko produkty <= 20 znaków
    for (const [category, items] of Object.entries(products)) {
        items.forEach(product => {
            if (product.length <= 20) { // Sprawdzamy długość nazwy produktu
                allProducts.push({ product, category });
            }
        });
    }

    // Tasowanie (Fisher–Yates shuffle)
    for (let i = allProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
    }

    return allProducts.slice(0, num);
}

// Wyświetlenie produktów w sekcji
function displayRandomProducts() {
    const container = document.querySelector(".random-products-grid");
    container.innerHTML = ""; // czyścimy domyślne produkty

    const randomProducts = getRandomProducts(8);

    randomProducts.forEach(item => {
        const wrapper = document.createElement("a");
        wrapper.href = categoryLinks[item.category];
        wrapper.classList.add("offer-card-link"); // opcjonalnie, jeśli chcesz mieć ten sam hover co w ofercie

        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <div class="product-icon">🧪</div>
            <h3>${item.product}</h3>
        `;

        wrapper.appendChild(card);
        container.appendChild(wrapper);
    });
}



// Wywołanie po załadowaniu strony
document.addEventListener("DOMContentLoaded", displayRandomProducts);




// Obsługa przycisku i Entera
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", searchProducts);
    searchInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            searchProducts();
        }
    });
}


        // Basic mobile menu toggle
        document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('active');
        });

        // Smooth hover effects for cards
        document.querySelectorAll('.offer-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });