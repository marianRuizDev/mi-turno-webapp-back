const mongoose = require('mongoose');
const { Schema } = mongoose;

const sucursalSchema = new Schema({
  nombreSucursal: { type: String, required: true },
  direccion: { type: String, required: true },
  aforoMaximo: { type: Number, required: true },
  horarioApertura: { type: String, required: true },
  horarioCierre: { type: String, required: true },
  listaTurnos: [{
    idTurno: { type: Schema.Types.ObjectId, ref: 'Turno' },
    idUsuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    fechaHoraInicio: { type: Date, required: true },
    fechaHoraFin: { type: Date, required: true }
  }]
});

const Sucursal = mongoose.model('Sucursal', sucursalSchema);

module.exports = Sucursal;
