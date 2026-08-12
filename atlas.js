const species=[
['Wandering Albatross','Diomedea exulans','Southern Ocean · subantarctic islands','Up to 3.5 m','Adults become increasingly white with age; look for the immense wings and long pink bill.'],
['Antipodean Albatross','Diomedea antipodensis','New Zealand · South Pacific','Up to 3.3 m','Usually darker and browner than a Wandering Albatross, especially in females.'],
['Amsterdam Albatross','Diomedea amsterdamensis','Amsterdam Island · Indian Ocean','About 3.2 m','Adults retain dark brown plumage with a white face, pink bill, and dark bill tip.'],
['Tristan Albatross','Diomedea dabbenena','Gough Island · South Atlantic','Up to 3.5 m','Smaller, darker, and shorter-billed than the similar Wandering Albatross.'],
['Northern Royal Albatross','Diomedea sanfordi','New Zealand · South Pacific','Up to 3.2 m','A huge white-bodied bird whose adult upperwings remain predominantly black.'],
['Southern Royal Albatross','Diomedea epomophora','New Zealand · Southern Ocean','Up to 3.5 m','Mature birds develop expanding white areas across the dark upperwings.'],
['Waved Albatross','Phoebastria irrorata','Galápagos · tropical Pacific','About 2.3 m','Fine wave-like neck barring and a massive yellow bill make it unmistakable.'],
['Short-tailed Albatross','Phoebastria albatrus','Japan · North Pacific','About 2.4 m','Adults have a golden head, white body, black wings, and a very large pink bill.'],
['Black-footed Albatross','Phoebastria nigripes','Hawaiian Islands · North Pacific','About 2.1 m','Nearly the entire bird is dark chocolate-brown, including body, wings, and feet.'],
['Laysan Albatross','Phoebastria immutabilis','Hawaiian Islands · North Pacific','About 2.0 m','A white head and underside contrast with dark wings and a pale pink-grey bill.'],
['Black-browed Albatross','Thalassarche melanophris','South Atlantic · Southern Ocean','About 2.4 m','A strong black eyebrow crosses the white face above a yellow-orange bill.'],
['Campbell Albatross','Thalassarche impavida','Campbell Island · New Zealand','About 2.4 m','Adults typically show a conspicuous pale iris beside a dark eyebrow.'],
['Shy Albatross','Thalassarche cauta','Tasmania · southern Australia','About 2.5 m','A white head, grey face shadow, and broad pale grey-yellow bill are key marks.'],
['White-capped Albatross','Thalassarche steadi','New Zealand · southern seas','About 2.5 m','A white-capped member of the Shy complex that can be difficult to separate at sea.'],
['Salvin’s Albatross','Thalassarche salvini','New Zealand · South Pacific','About 2.6 m','A dove-grey head frames a grey bill with a yellow upper ridge and tip.'],
['Chatham Albatross','Thalassarche eremita','The Pyramid · Chatham Islands','About 2.4 m','A dark grey head paired with a vivid yellow-orange bill is distinctive.'],
['Grey-headed Albatross','Thalassarche chrysostoma','Circumpolar Southern Ocean','About 2.2 m','The entire head forms a grey hood, paired with a dark bill edged by yellow lines.'],
['Atlantic Yellow-nosed Albatross','Thalassarche chlororhynchos','South Atlantic islands','About 2.0 m','A dark grey hood and narrow yellow stripe atop a black bill are key marks.'],
['Indian Yellow-nosed Albatross','Thalassarche carteri','Indian Ocean islands','About 2.0 m','Similar to the Atlantic species but with a noticeably paler head.'],
['Buller’s Albatross','Thalassarche bulleri','New Zealand · South Pacific','About 2.1 m','A grey head with dark cap surrounds a black bill outlined in golden yellow.'],
['Light-mantled Albatross','Phoebetria palpebrata','Circumpolar Southern Ocean','About 2.2 m','A silver-grey mantle contrasts with its charcoal head and white eye crescent.'],
['Sooty Albatross','Phoebetria fusca','South Atlantic · Indian oceans','About 2.0 m','Uniformly sooty-brown with a pale eye-ring, slender wings, and diamond-shaped tail.']
];
const slug=n=>n.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const id=n=>`profile-${slug(n)}`;
document.querySelector('#species-index').innerHTML=species.map((s,i)=>`<a href="#${id(s[0])}"><b>${String(i+1).padStart(2,'0')}</b>${s[0]}</a>`).join('');
document.querySelector('#portrait-grid').innerHTML=species.map(s=>`<a href="#${id(s[0])}"><img src="images/albatross/species/${slug(s[0])}.jpg" alt="Adult ${s[0]}" loading="lazy"><span>${s[0]}</span></a>`).join('');
document.querySelector('#profiles').innerHTML=species.map((s,i)=>`<article class="profile" id="${id(s[0])}"><span class="profile-number">${String(i+1).padStart(2,'0')}</span><figure><img src="images/albatross/species/${slug(s[0])}.jpg" alt="Adult ${s[0]}" loading="lazy"><figcaption>${s[0]}</figcaption></figure><div class="profile-info"><h3>${s[0]}</h3><em class="scientific">${s[1]}</em><div class="data"><div><span>Core range</span><strong>${s[2]}</strong></div><div><span>Wingspan</span><strong>${s[3]}</strong></div></div><p><b>Identification:</b> ${s[4]}</p><p>Like other albatrosses, this species uses long, narrow wings to harvest energy from ocean winds and returns to land primarily to breed.</p></div></article>`).join('');
