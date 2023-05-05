const mongoose = require('mongoose');
const { Schema } = mongoose;

const turnoSchema = new Schema({
  idUsuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  idSucursal: { type: Schema.Types.ObjectId, ref: 'Sucursal', required: true },
  fechaHoraInicio: { type: Date, required: true },
  fechaHoraFin: { type: Date, required: true }
});

const Turno = mongoose.model('Turno', turnoSchema);

module.exports = Turno;
