const Aluno = require("../Models/alunoSchema");
const alunoModel = require('../Models/alunoModel');

const home = (req, res)=>{
    res.render('pages/home')
}

const registrarPage = (req, res) => {
    res.render('pages/register')
}

async function Registrar(req, res){

    let notas = {
        lingua_portuguesa:Number(req.body.lingua_portuguesa),
        matematica:Number(req.body.matematica),
        biologia:Number(req.body.biologia),
        fisica:Number(req.body.fisica),
        quimica:Number(req.body.quimica),
        artes:Number(req.body.artes),
        ed_fisica:Number(req.body.ed_fisica),
        lingua_inglesa:Number(req.body.lingua_inglesa),
        filosofia:Number(req.body.filosofia),
        geografia:Number(req.body.geografia),
        historia:Number(req.body.historia),
        sociologia:Number(req.body.sociologia)
    }

    let aluno = {
        nome:alunoModel.setNome(req.body.nome), 
        nascimento:req.body.nascimento,
        ano:req.body.ano,
        sala:req.body.sala,
        notas,
        notaTotal:Number(alunoModel.setNotas(notas))
    }

    try {
        let newAluno = await new Aluno(aluno).save();
        res.render('pages/home');
    } catch (error) {
        res.status(404).render('pages/404');
    }

}

async function getRanking(req, res){
    try {
        let doc = await Aluno.find({});
        let alunos = alunoModel.setRanking(doc)
        res.render('pages/ranking',{alunos})
        
    } catch (error) {
        res.status(404).render('pages/404');
    }
}



async function searchAluno (req, res){
    let nome = '';

    if(req.query.q !== ''){
        nome = alunoModel.setNome(String(req.query.q))

        try {
            let all_alunos = await Aluno.find({});
            let resultAlunos = alunoModel.getAluno(alunoModel.setRanking(all_alunos), nome);
        
            res.render('pages/search',{resultAlunos, req})
             
        } catch (error) {
            res.status(404).render('pages/404')
        } 
    }
    else{
        res.status(404).render('pages/404')   
    }

    
    
    
    
}
module.exports = {home, registrarPage, Registrar, getRanking, searchAluno}