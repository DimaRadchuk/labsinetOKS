let out = '';
$('.save').on('click', () => {
	let nameDepartament = $('.nameDepartament').val();
	let numberGroup = $('.numberGroup').val();
	let numberPеоple = $('.numberPеоple').val();
	out+=`<p></p>`;
	out+=`<p>Тип монітора: ${nameDepartament}</p>`;
	out+=`<p>Роздільна здатність: ${numberGroup}</p>`;
	out+=`<p>Кількість кольорів: ${numberPеоple}</p>`;
	$('.res').html(out);
	out = '';
});


