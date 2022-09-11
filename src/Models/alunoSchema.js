const mongoose = require('mongoose')

const alunoSchema = new mongoose.Schema({
    nome:{type:String, required:true},
    nascimento:{type:String, required:true},
    ano:{type:String, required:true},
    sala:{type:String, required:true},
    notas:{
        lingua_portuguesa: {type:Number, required:true},
        matematica:{type:Number, required:true},
        biologia:{type:Number, required:true},
        fisica:{type:Number, required:true},
        quimica:{type:Number, required:true},
        artes:{type:Number, required:true},
        ed_fisica:{type:Number, required:true},
        lingua_inglesa:{type:Number, required:true},
        filosofia:{type:Number, required:true},
        geografia:{type:Number, required:true},
        historia:{type:Number, required:true},
        sociologia:{type:Number, required:true}
    },
    notaTotal:{type:Number, required:true},
    pos:{type:Number, default:0}
})

module.exports = mongoose.model('aluno', alunoSchema)