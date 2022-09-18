
const setNotas = (aluno)=>{
    const total = Object.values(aluno).reduce((t, n) => t + n)

    return total;
}

const setPosition = (alunos)=>{

    alunos.map(item=>{
        item.pos = alunos.indexOf(item)+1;
    })

    return alunos;
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
module.exports = {setPosition, setNotas, setNome, getAluno};