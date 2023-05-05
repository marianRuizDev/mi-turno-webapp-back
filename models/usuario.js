const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
  nombreCompleto: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  listaTurnos: [{
    idTurno: { type: Schema.Types.ObjectId, ref: 'Turno' },
    idSucursal: { type: Schema.Types.ObjectId, ref: 'Sucursal' },
    fechaHoraInicio: { type: Date, required: true },
    fechaHoraFin: { type: Date, required: true }
  }]
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
