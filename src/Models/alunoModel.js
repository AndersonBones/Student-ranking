
const setNotas = (aluno)=>{
    const total = Object.values(aluno).reduce((t, n) => t + n)

    return total;
}

const setRanking = (doc)=>{


    doc.sort(function(a,b) {
        return b.notaTotal - a.notaTotal;
    });

    doc.map(item=>{
        item.pos = doc.indexOf(item)+1;
    })

    return doc;
}

const setNome = (nome) =>{

    let newNome = '';

    for(var char of nome.toLowerCase().split(' ')){
        char = char.replace(char[0].toString(), char[0].toString().toUpperCase())

        newNome += char+' ';
    }

    return newNome.trim()
}

const getAluno = (array, aluno)=>{
    let Alunos = array.filter(item =>{
        return item.nome === aluno;
    })

    return Alunos;
}
module.exports = {setRanking, setNotas, setNome, getAluno};