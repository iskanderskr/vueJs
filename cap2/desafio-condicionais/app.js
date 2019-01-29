new Vue({
	el: '#desafio',
	data: {
		exibir: true,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livros: [
			{
				titulo: 'O Senhor dos Anéis',
				autor: 'J.R.R. Tolkiens',
				volume: '3'
			},
			{
				titulo: 'It',
				autor: 'Stephen King',
				volume: '1'
			},
		],
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		}
	}
});
