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
        "ACETON", "ALKOHOL ETYLOWY", "ALKOHOL METYLOWY", "ALKOHOL BENZYLOWY", "GLICERYNA ROSLINNA", "MOCZNIK",
        "OCTAN BUTYLU", "OCTAN ETYLU", "OCTAN IZOPROPYLU", "OCTAN METOKSYPROPYLU", "OCTAN METYLU",
        "GLIKOL ETYLENOWY", "GLIKOL PROPYLENOWY", "METOKSYPROPANOL", "ETOKSYPROPANOL", "BUTYLOGLIKOL",
        "DIGLIKOL", "METYLOKETON MEK", "KWAS ADYPINOWY", "KWAS ABS", "KWAS ASKORBINOWY", "KWAS AZOTOWY",
        "KWAS BENZOESOWY", "KWAS BOROWY", "KWAS CYTRYNOWY", "KWAS FOSFOROWY", "KWAS GLIKOLOWY", "KWAS JABLKOWY",
        "KWAS MLEKOWY", "KWAS MROWKOWY", "KWAS OCTOWY", "KWAS SIARKOWY", "KWAS SOLNY", "KWAS STEARYNOWY",
        "KWAS WERSENOWY", "CHLOREK METYLENU", "NADTLENEK WODORU", "WAPNO CHLOROWANE", "WAPNO GASZONE",
        "SODA OCZYSZCZONA", "SOL DROGOWA", "AZOTAN MAGNEZU", "AZOTAN SODU", "AZOTAN AMONU", "CHLOREK CYNKU",
        "CHLOREK MAGNEZU", "CHLOREK MIEDZI", "CHLOREK POTASU", "CHLOREK WAPNIA", "CZTEROBORAN SODU",
        "ETANOLOAMINA", "FORMALINA", "PODCHLORYN SODU", "SIARCZAN MAGNEZU", "WEGLAN WAPNIA", "WODA AMONIAKALNA",
        "WODOROTLENEK POTASU", "BIEL TYTANOWA", "TLENEK CERU", "TLENEK CHROMU", "TLENEK CYNKU", "TLENEK MAGNEZU",
        "TLENEK ZELAZA", "WODOROTLENEK SODU", "TLENEK MIEDZI", "KWAS SALICYLOWY"
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


// Produkty z pliku data.txt
const extraProductsList = [
    {
        "name": "4'-Hydroxyacetophenone",
        "cas": "99-93-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Valerophenone",
        "cas": "1009-14-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-Chloropropiophenone",
        "cas": "6285-05-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Zinc methacrylate",
        "cas": "13189-00-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "2-bromo-4-chloropropiophenone",
        "cas": "877-37-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "2-Bromo-3'-chloropropiophenone",
        "cas": "34911-51-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "2,4-Dichlorobutyrophenone",
        "cas": "66353-47-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "3'-Chloropropiophenone",
        "cas": "34841-35-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "Acetophenone",
        "cas": "98-86-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Valeryl chloride",
        "cas": "638-29-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "2',4'-Dichlorovalerophenone",
        "cas": "61023-66-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "Butyrophenone",
        "cas": "495-40-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "2-Benzoylbenzoic acid",
        "cas": "85-52-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "2'-Hydroxyacetophenone",
        "cas": "118-93-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-Methoxyacetophenone",
        "cas": "100-06-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-Methylacetophenone",
        "cas": "122-00-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Fluoroacetophenone",
        "cas": "403-42-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-Chloroacetophenone",
        "cas": "99-91-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Acetylbiphenyl",
        "cas": "92-91-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-Isopropylacetophenone",
        "cas": "645-13-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "2'-Methylacetophenone",
        "cas": "577-16-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "3-Fluoro-4-methoxyacetophenone",
        "cas": "455-91-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "2',5'-Dimethoxyacetophenone",
        "cas": "1201-38-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "2,4-Dimethoxyacetophenone",
        "cas": "829-20-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-Ethoxyacetophenone",
        "cas": "1676-63-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "1-(4-Butylphenyl)ethan-1-one",
        "cas": "37920-25-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-(2-Methylpropyl)acetophenone",
        "cas": "38861-78-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Phenoxy-2',2'-dichloroacetophenone",
        "cas": "59867-68-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "3,4-Dimethoxyacetophenone",
        "cas": "1131-62-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "2-Chloro-4'-fluoroacetophenone",
        "cas": "456-04-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Methylbenzophenone",
        "cas": "134-84-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Bis(4-fluorophenyl)-methanone",
        "cas": "345-92-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Benzoylbiphenyl",
        "cas": "2128-93-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Hydroxybenzophenone",
        "cas": "1137-42-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Methoxybenzophenone",
        "cas": "611-94-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Chlorobenzophenone",
        "cas": "134-85-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "(2-Chlorophenyl)phenyl-methanone",
        "cas": "5162-03-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Fluorobenzophenone",
        "cas": "345-83-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "4,4'-Dihydroxybenzophenone",
        "cas": "611-99-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "2-Methylbenzophenone",
        "cas": "131-58-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "2,4,6-Trimethylbenzophenone",
        "cas": "954-16-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "3,4-Dimethoxybenzophenone",
        "cas": "4038-14-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "(4-Ethoxyphenyl)phenylmethanone",
        "cas": "27982-06-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Chloro-4'-hydroxybenzophenone",
        "cas": "42019-78-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-CHLORO-4'-METHYLBENZOPHENONE",
        "cas": "5395-79-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Fluoro-4'-methoxybenzophenone",
        "cas": "345-89-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Fluoro-4'-methylbenzophenone",
        "cas": "530-46-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "4,4'-Dichlorobenzophenone",
        "cas": "90-98-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "4,4'-Dimethoxybenzophenone",
        "cas": "90-96-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "4,4'-Dimethylbenzophenone",
        "cas": "611-97-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "3,4-Dihydroxybenzophenone",
        "cas": "10425-11-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "3,4-Dimethylbenzophenone",
        "cas": "2571-39-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "2,5-Dichlorobenzophenone",
        "cas": "16611-67-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "2,4'-Dichlorobenzophenone",
        "cas": "85-29-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-METHOXY-4'-METHYLBENZOPHENONE",
        "cas": "23886-71-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "HRcure-MPBZ",
        "cas": "86428-83-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "2-chloro-4'-phenylbenzophenone",
        "cas": "34701-98-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Benzophenone",
        "cas": "119-61-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-Methylpropiophenone",
        "cas": "5337-93-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-Ethylpropiophenone",
        "cas": "27465-51-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-Hydroxypropiophenone",
        "cas": "70-70-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Methoxypropiophenone",
        "cas": "121-97-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "Anisole",
        "cas": "100-66-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "Hexanophenone",
        "cas": "942-92-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Chloro-4'-fluorobutyrophenone",
        "cas": "3874-54-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "2,4-Dichlorobutyrophenone",
        "cas": "66353-47-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "2',4'-DICHLOROPROPIOPHENONE",
        "cas": "37885-41-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-Fluoropropiophenone",
        "cas": "456-03-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "Diphenyl sulfone",
        "cas": "127-63-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "1-[1,1'-BIPHENYL]-4-YL-1-PENTANONE",
        "cas": "42916-73-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-Hydroxyvalerophenone",
        "cas": "2589-71-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "1-(4-Hydroxyphenyl)-1-butanone",
        "cas": "1009-11-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Chlorovalerophenone",
        "cas": "25017-08-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "4'-Methylvalerophenone",
        "cas": "1671-77-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "2',4'-Dichlorovalerophenone",
        "cas": "61023-66-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "Creatine Monohydrate",
        "cas": "6020-87-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Creatine Anhydrous",
        "cas": "57-00-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "B-Nicotinamide Mononucleotide (NMN)",
        "cas": "1094-61-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Thioctic Acid (Alpha Lipoic Acid)",
        "cas": "1077-28-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Melatonin",
        "cas": "73-31-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "L-carnitine",
        "cas": "541-15-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "Coenzyme Q10",
        "cas": "303-98-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "Hyaluronic Acid",
        "cas": "9004-61-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Sodium hyaluronate",
        "cas": "9067-32-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Glutathione",
        "cas": "70-18-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Docosahexaenoic acid",
        "cas": "6217-54-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "L-Fucose",
        "cas": "2438-80-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Glucuronolactone",
        "cas": "32449-92-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "Aloe Vera Extract powder Aloin",
        "cas": "1415-73-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "5-HTP/Griffonia Seed Extract",
        "cas": "4350-09-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Grape Seed Extract",
        "cas": "84929-27-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "Gallic acid",
        "cas": "149-91-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Ginkgo biloba extract",
        "cas": "90045-36-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "L-Theanine",
        "cas": "3081-61-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "Casein",
        "cas": "9000-71-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "DL-Mandelic acid",
        "cas": "90-64-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "DL-Methionine",
        "cas": "59-51-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Folic acid",
        "cas": "59-30-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "L(+)-Arginine",
        "cas": "74-79-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "Sodium D-pantothenate",
        "cas": "867-81-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "D-(+)-Glucose anhydrous",
        "cas": "50-99-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "linoleic acid",
        "cas": "60-33-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "Benzyl alcohol",
        "cas": "100-51-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "Monosodium glutamate",
        "cas": "32221-81-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "Inosine 5'-monophospate disodium salt",
        "cas": "4691-65-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "Disodium succinate",
        "cas": "150-90-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "EPA",
        "cas": "10417-94-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "all-trans-Retinol",
        "cas": "68-26-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Sorbic acid",
        "cas": "110-44-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "Potassium iodide",
        "cas": "7681-11-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "Glycyrrhizic acid ammonium salt",
        "cas": "53956-04-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "Vitamin B12",
        "cas": "68-19-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "L-Glutamine",
        "cas": "56-85-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Collagen",
        "cas": "9007-34-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "Sorbitol",
        "cas": "50-70-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Vitamin E",
        "cas": "2074-53-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "DL-Pyroglutamic acid",
        "cas": "149-87-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "L-Proline",
        "cas": "147-85-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "Xanthophyll",
        "cas": "127-40-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Glucose oxidase",
        "cas": "9001-37-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "Glycine",
        "cas": "56-40-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "Tributyrin",
        "cas": "60-01-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "Noopept",
        "cas": "157115-85-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Hexylresorcinol",
        "cas": "136-77-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "vitamin B5",
        "cas": "137-08-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "Lactulose",
        "cas": "4618-18-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Tocopherol",
        "cas": "1406-18-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Bromothymol Blue",
        "cas": "76-59-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "Bromophenol Blue",
        "cas": "115-39-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Bromocresol Green",
        "cas": "76-60-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "5-(4-Dimethylaminobenzylidene) rhodanine",
        "cas": "536-17-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Diphenylaminesulfonic acid sodium salt",
        "cas": "6152-67-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "4,4'-Bis (dimethylamino) thiobenzophenone",
        "cas": "1226-46-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "1-NITROSO-2-NAPHTHOL-3",
        "cas": "525-05-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "Sodium bromothymol blue",
        "cas": "34722-90-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Oxalic acid bis",
        "cas": "370-81-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "2-Hydroxy-1-(2-hydroxy-4-sulfo-1-naphthylazo)-3-na",
        "cas": "3737-95-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Eosin Y, water soluble",
        "cas": "17372-87-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "sodium phenolate",
        "cas": "139-02-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "Alizarin Yellow R",
        "cas": "2243-76-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Fuchsine acid, Rubin S",
        "cas": "3244-88-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "Cresol Red",
        "cas": "1733-12-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "Brilliant green",
        "cas": "633-03-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Alizarin red",
        "cas": "130-22-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "Indigo Carmine",
        "cas": "860-22-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "Prussian Blue",
        "cas": "14038-43-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Basic Red 5",
        "cas": "553-24-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Thioacetamide",
        "cas": "62-55-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "Fluorescein disodium salt",
        "cas": "518-47-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Fluorescein",
        "cas": "2321-07-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "Naphthol green B",
        "cas": "19381-50-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "1h-indole-3-butanoic acid",
        "cas": "133-32-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Bromocresol purple",
        "cas": "115-40-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Methylthymol Blue",
        "cas": "1945-77-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "Coomassie brilliant blue G250",
        "cas": "6104-58-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "Coomassie brilliant blue R250",
        "cas": "6104-59-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Calcon-carboxylic acid",
        "cas": "3737-95-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Congo Red",
        "cas": "573-58-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "Orange II",
        "cas": "633-96-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "Acid chrome blue K",
        "cas": "3270-25-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "Calconcarboxylic acid",
        "cas": "3737-95-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Murexide",
        "cas": "3051-09-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "ThyMolphthalein",
        "cas": "125-20-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Calcein",
        "cas": "1461-15-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "xylenol orange",
        "cas": "1611-35-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Bromocresol purpl",
        "cas": "115-40-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Cresol Purple",
        "cas": "2303-1-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Basic Red 5",
        "cas": "553-24-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "o-Cresolphthalein",
        "cas": "596-27-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "Eriochrome blue black R",
        "cas": "2538-85-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Eriochrome Black T",
        "cas": "1787-61-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Methylene Blue trihydrate",
        "cas": "7220-79-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "1,10-Phenanthroline hydrochloride",
        "cas": "3829-86-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "m-Methyl red",
        "cas": "20691-84-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "Chromotrope 2B",
        "cas": "548-80-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "Zincon monosodium salt",
        "cas": "62625-22-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "Methyl yellow",
        "cas": "1960-11-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Arsenazol",
        "cas": "3547-38-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Sodium hexanitrocobaltate (III)",
        "cas": "13600-98-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "Rhodizonic acid sodium salt",
        "cas": "523-21-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Anthrone",
        "cas": "90-44-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "alpha-Naphtholphthalein",
        "cas": "596-01-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "Diethyl dithio carbamic acid silver salt",
        "cas": "1470-61-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Dimethylaminobenzaldehyde",
        "cas": "100-10-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-(2-PYRIDYLAZO) RESORCINOL",
        "cas": "1141-59-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Phenol Red",
        "cas": "143-74-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Rose Bengal sodium salt",
        "cas": "632-69-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "1-(2-Pyridylazo)-2-naphthol",
        "cas": "85-85-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Rhodanine",
        "cas": "141-84-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "1-amino-2-naphthol-4-sulfonic acid",
        "cas": "116-63-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Chlorophosphonazo I",
        "cas": "85561-96-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Sodium diethyldithiocarbamate",
        "cas": "20624-25-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "o-Phenanthroline",
        "cas": "66-71-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Methylene blue",
        "cas": "61-73-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Methyl Orange",
        "cas": "547-58-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "Semixylenolorange",
        "cas": "19329-67-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "MethylRed",
        "cas": "493-52-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "1,10-Phenanthrolinemonohydrate",
        "cas": "5144-89-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "ThymolBlue",
        "cas": "76-61-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Dimethylglyoxime",
        "cas": "95-45-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Phenol Red sodium salt",
        "cas": "34487-61-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "NITRAZINEYELLOW",
        "cas": "5423-07-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "ALuminon",
        "cas": "569-58-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Methyl red sodium salt",
        "cas": "845-10-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "chlorophosphonazo iii",
        "cas": "1914-99-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "o-Cresolphthalein Complexone",
        "cas": "2411-89-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "N-Phenylanthranilic acid",
        "cas": "91-40-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Amino Black 10B",
        "cas": "1064-48-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Arsenazo III",
        "cas": "1668-00-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Naphthalene ethylenediamine hydrochloride",
        "cas": "1465-25-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Fluorone Black",
        "cas": "975-17-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "potassium disulfate",
        "cas": "7790-62-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "disodium",
        "cas": "3688-92-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Hexaaminecobalt (III) chloride",
        "cas": "10534-89-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "Solvent Red 43",
        "cas": "15086-94-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Dimethylamine hydrochloride",
        "cas": "506-59-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Trimethylammonium chloride",
        "cas": "593-81-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Cadmium Chloride",
        "cas": "10108-64-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Cadmium sulfate",
        "cas": "10124-36-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Calcium hypophosphite",
        "cas": "7789-79-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Diphenylthiocarbazone",
        "cas": "60-10-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "Diphenylcarbazide",
        "cas": "140-22-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Litmus",
        "cas": "1393-92-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "p-Amino-N, N-diethylaniline sulfate",
        "cas": "6283-63-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "1-Naphthalene acetic acid",
        "cas": "86-87-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "indole-3-acetic acid",
        "cas": "87-51-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "4-Aminoantipyrene",
        "cas": "83-07-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Phenolphthalein",
        "cas": "77-09-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Titan yellow",
        "cas": "1829-00-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "Sudan IV",
        "cas": "85-83-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "Carmine",
        "cas": "1390-65-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Metanil yellow",
        "cas": "587-98-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "Chomeazurol S",
        "cas": "1667-99-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Orange G",
        "cas": "1936-15-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "P-xylenolphthaleine",
        "cas": "50984-88-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "Safranine T",
        "cas": "477-73-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "Brilliant Blue G",
        "cas": "6104-58-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "Alizarin yellow GG",
        "cas": "584-42-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Rhodamine B",
        "cas": "81-88-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Ponceau S",
        "cas": "6226-79-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "Malachite green",
        "cas": "569-64-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Sudan I",
        "cas": "842-07-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Alkali blue 6B",
        "cas": "1324-80-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "Magenta",
        "cas": "632-99-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "Gentian violet",
        "cas": "548-62-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Sudan III",
        "cas": "85-86-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "Methylblue",
        "cas": "28983-56-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "SudanII",
        "cas": "3118-97-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "acid red 29",
        "cas": "4197-07-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "Bismarchizone Y",
        "cas": "10114-58-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "Azure I I",
        "cas": "37247-10-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "Aniline Blue",
        "cas": "28631-66-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "Wright's stain",
        "cas": "68988-92-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "sudan red B",
        "cas": "3176-79-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-9",
        "cas": "131-57-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-284",
        "cas": "4065-45-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-531",
        "cas": "1843-05-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-144",
        "cas": "63843-89-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-1084",
        "cas": "14516-71-3",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-234",
        "cas": "70321-86-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-3039",
        "cas": "6197-30-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-360",
        "cas": "103597-45-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-770",
        "cas": "52829-07-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-622",
        "cas": "65447-77-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-944",
        "cas": "71878-19-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-1",
        "cas": "57834-33-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-292",
        "cas": "41556-26-7/82919-37-7",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-2908",
        "cas": "67845-93-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-1577",
        "cas": "147315-50-2",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-1164",
        "cas": "2725-22-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-326",
        "cas": "3896-11-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-329",
        "cas": "3147-75-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-P",
        "cas": "2440-22-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-5050H",
        "cas": "152261-33-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-4050H",
        "cas": "124172-53-8",
        "category": "surowce chemiczne"
    },
    {
        "name": "ZT-3853PP",
        "cas": "167078-06-0/9003-07-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "ZT-3808PP",
        "cas": "167078-06-0/67845-93-6/9003-07-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-3030",
        "cas": "178671-58-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-988",
        "cas": "6337-43-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-1988",
        "cas": "7443-25-6",
        "category": "surowce chemiczne"
    },
    {
        "name": "UV-3853",
        "cas": "167078-06-0",
        "category": "surowce chemiczne"
    },
    {
        "name": "HQEE",
        "cas": "104-38-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "HER",
        "cas": "102-40-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "AVB",
        "cas": "70356-09-1",
        "category": "surowce chemiczne"
    },
    {
        "name": "OCT",
        "cas": "6197-30-4",
        "category": "surowce chemiczne"
    },
    {
        "name": "HMS",
        "cas": "118-56-9",
        "category": "surowce chemiczne"
    },
    {
        "name": "OS",
        "cas": "118-60-5",
        "category": "surowce chemiczne"
    },
    {
        "name": "DHHB",
        "cas": "302776-68-7",
        "category": "surowce chemiczne"
    }
];


function renderExtraProducts() {
    const container = document.getElementById("extra-products-grid");
    if (!container) return; // nie jesteśmy na stronie surowców

    container.innerHTML = "";

    extraProductsList.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("content-card");

        card.innerHTML = `
            <h3>🧪 ${item.name}</h3>
            <p><strong>Numer CAS:</strong> ${item.cas}</p>
            <p><strong>Numer WE:</strong> -</p>
            <p>Produkt chemiczny o wysokiej czystości.</p>
        `;
        container.appendChild(card);
    });
}


function searchProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("searchResults");

    resultsDiv.style.display = "block";
    resultsDiv.innerHTML = "";

    if (!input) {
        resultsDiv.innerHTML = "<p>Wpisz nazwę produktu, aby wyszukać.</p>";
        return;
    }

    let results = [];

    // Search existing products (zmienna products z początku pliku)
    for (const [category, items] of Object.entries(products)) {
        items.forEach(product => {
            if (product.toLowerCase().includes(input)) {
                results.push({ product, category });
            }
        });
    }

    // Search extra products
    extraProductsList.forEach(item => {
        if (item.name.toLowerCase().includes(input) || item.cas.includes(input)) {
            results.push({ product: item.name, category: item.category });
        }
    });

    if (results.length > 0) {
        const list = document.createElement("ul");
        results.forEach(r => {
            const li = document.createElement("li");
            const link = document.createElement("a");

            let href = categoryLinks[r.category];
            // Fallback for known category if missing in map
            if (!href && r.category === 'surowce chemiczne') href = 'surowce-chemiczne.html';

            link.href = href || '#';
            link.textContent = `${r.product} (${r.category})`;
            li.appendChild(link);
            list.appendChild(li);
        });
        resultsDiv.appendChild(list);
    } else {
        resultsDiv.innerHTML = "<p>Brak wyników dla podanego zapytania.</p>";
    }
}


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
    if (!container) return;
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
document.addEventListener("DOMContentLoaded", function () { displayRandomProducts(); renderExtraProducts(); });




// Obsługa przycisku i Entera
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", searchProducts);
    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            searchProducts();
        }
    });
}


// Basic mobile menu toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Smooth hover effects for cards
document.querySelectorAll('.offer-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// --- Header Search Logic ---

function handleHeaderSearch() {
    const input = document.getElementById("headerSearchInput");
    const resultsDiv = document.getElementById("headerSearchResults");

    if (!input || !resultsDiv) return;

    const query = input.value.toLowerCase();
    resultsDiv.innerHTML = "";

    if (!query) {
        resultsDiv.style.display = "none";
        return;
    }

    let results = [];

    // Search existing products
    for (const [category, items] of Object.entries(products)) {
        items.forEach(product => {
            if (product.toLowerCase().includes(query)) {
                results.push({ product, category });
            }
        });
    }

    // Search extra products
    if (typeof extraProductsList !== 'undefined') {
        extraProductsList.forEach(item => {
            if (item.name.toLowerCase().includes(query) || item.cas.includes(query)) {
                results.push({ product: item.name, category: item.category });
            }
        });
    }

    if (results.length > 0) {
        const list = document.createElement("ul");
        // Limit results to 10 to fit in dropdown
        results.slice(0, 10).forEach(r => {
            const li = document.createElement("li");
            const link = document.createElement("a");

            let href = categoryLinks[r.category];
            if (!href && r.category === 'surowce chemiczne') href = 'surowce-chemiczne.html';

            link.href = href || '#';
            link.textContent = `${r.product} (${r.category})`;
            li.appendChild(link);
            list.appendChild(li);
        });
        resultsDiv.appendChild(list);
        resultsDiv.style.display = "block";
    } else {
        resultsDiv.innerHTML = "<div class='no-results'>Brak wyników</div>";
        resultsDiv.style.display = "block";
    }
}

// Global initialization for header search
document.addEventListener("DOMContentLoaded", function () {
    const headerInput = document.getElementById("headerSearchInput");
    const headerBtn = document.getElementById("headerSearchBtn");

    if (headerInput && headerBtn) {
        headerBtn.addEventListener("click", handleHeaderSearch);

        headerInput.addEventListener("input", function () {
            if (this.value.length > 2) {
                handleHeaderSearch(); // Real-time search for > 2 chars
            } else {
                document.getElementById("headerSearchResults").style.display = "none";
            }
        });

        headerInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                handleHeaderSearch();
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (e) {
            if (!e.target.closest(".header-search")) {
                const resultsDiv = document.getElementById("headerSearchResults");
                if (resultsDiv) resultsDiv.style.display = "none";
            }
        });
    }
});