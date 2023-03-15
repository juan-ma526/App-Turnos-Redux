//TURNOS WEB
const Branch = require("../models/Branch");
const User = require("../models/User")
const Shift = require("../models/Shift")
//create update hour of shifts


const shiftManagement = {
//CREA LOS TURNOS. HAY QUE PASAR "idUser, phone, hour, date, dateBooking, dateShift" POR EL BODY, Y POR PARAMETRO EL ID DE LA BRANCH.
  createShifts: async (req, res) => {
    try {
         
//Formatea la fecha del dia reservado.

const dateTime = new Date(req.body.dateBooking);
      
const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
//const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const monthsOfYear = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const dayOfWeek = daysOfWeek[dateTime.getUTCDay()];
const dayOfMonth = dateTime.getUTCDate();
const monthOfYear = monthsOfYear[dateTime.getUTCMonth()];
const year = dateTime.getUTCFullYear();
const hour = req.body.hour;
      
const formattedDate = `${dayOfMonth}/${monthOfYear}/${year} - ${hour}`;
console.log(formattedDate)

//Formateo de fecha para el dia que se reserva.

const shiftDateTime = new Date(req.body.dateShift);
console.log(shiftDateTime)

const dayWeek = daysOfWeek[shiftDateTime.getUTCDay()];
const dayMonth = shiftDateTime.getUTCDate();
const monthYear = monthsOfYear[shiftDateTime.getUTCMonth()];
const shiftYear = shiftDateTime.getUTCFullYear();
const actualHour = `${shiftDateTime.getHours()}:${shiftDateTime.getMinutes()}`
console.log(actualHour)

const formDate = `${dayMonth}/${monthYear}/${year} - ${actualHour}`

console.log(formDate)
///////////////////////////////////////////////////////////////////////////////////////////////////

      
      const idBranch = req.params.id;
      const branch = await Branch.find({ _id: idBranch });
      const catchUser = await User.find({_id: req.body.idUser})
      const user = catchUser[0]

      const availableShift = await Shift.findOne({dateBooking: formattedDate,
     statusHour: "occupied",
    })

      if (availableShift){
        return res.status(400).send("Turno ya ocupado");
       }
      const cancelledShift = await Shift.findOne({dateBooking: formattedDate,
    statusHour: "cancelled"
    })

    if(cancelledShift){
      const catchUser = await User.find({_id: req.body.idUser})
      const user = catchUser[0]


      const update = await Shift.updateOne({_id: req.body.idShift},{
        dateBooking: formattedDate,
        dateShift: formDate,
        idUser: req.body.idUser,
        infoUser: {
          name: req.body.fullName,
          email: req.body.email,
          phone: req.body.phone
        },
        statusHour: "occupied"
       })
       return res.status(201).send(update)
    }


      console.log(user)

      //console.log(branch);
      if (!branch) {
        return res.status(404).json({ message: 'Branch not found' });
      }
          // Guardar turno en la tabla Shift
          const shift = new Shift({
            idBranch: idBranch,
            idUser: req.body.idUser,
            infoUser: {
              name: req.body.fullName,
              email: req.body.email,
              phone: req.body.phone,
            },
            dateBooking: formattedDate,
            dateShift: formDate,
            statusHour: "occupied"
          });
          await shift.save();
         console.log(shift.id)
         await Branch.updateOne({ _id: idBranch }, { $push: { shifts: shift.id } });
         await User.updateOne({_id: req.body.idUser}, {phone: req.body.phone})
         await User.updateOne({_id: req.body.idUser}, {$push: {shifts: shift.id}})
    
      res.status(201).send(shift);
      
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error!')
    }
  },

  //FUNCIÓN PARA EDITAR TURNOS. HAY QUE PASAR "idUser, idShift, hour, date, phone" POR EL BODY.
  updateShift: async function(req,res){
     try{

      const dateTime = new Date(req.body.dateBooking);
      
const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
//const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const monthsOfYear = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const dayOfWeek = daysOfWeek[dateTime.getUTCDay()];
const dayOfMonth = dateTime.getUTCDate();
const monthOfYear = monthsOfYear[dateTime.getUTCMonth()];
const year = dateTime.getUTCFullYear();
const hour = req.body.hour;
      
const formattedDate = `${dayOfMonth}/${monthOfYear}/${year} - ${hour}`;
console.log(formattedDate)



      const catchUser = await User.find({_id: req.body.idUser})
      const user = catchUser[0]


      const update = await Shift.updateOne({_id: req.body.idShift},{
        dateBooking: formattedDate,
        infoUser: {
          name: req.body.fullName,
          email: req.body.email,
          phone: req.body.phone
        },
        updatedAt: req.body.updatedAt
       })
       res.status(201).send(update)
     }
     catch (error){
      res.status(500).send('Server error!')
     }
  },
//FUNCIÓN PARA CANCELAR UN TURNO.
  cancelShift: async function(req,res){
    try{
      const cancelled = await Shift.updateOne({_id: req.body.idShift}, {
        statusHour: "cancelled"
      })
      res.status(201).send(cancelled)
    }
    catch (error) {
      res.status(500).send(error)
    }
  },
// FUNCIÓN DE OPERADOR: DECLARAR QUE UN USUARIO NO ASISTIÓ AL TURNO.
  noAssist: async function(req,res){
      try{
        const shift = await Shift.updateOne({_id: req.body.idShift}, {
          statusShift: "no assist",
          statusHour: "finished"
        })

        res.status(201).send(shift)
      }
      catch(error){
        res.status(500).send(error)
      }
  },
// FUNCIÓN DE OPERADOR: DECLARAR QUE UN USUARIO ASISTIÓ AL TURNO.
  assist: async function(req,res){
    try{
      const shift = await Shift.updateOne({_id: req.body.idShift}, {
        statusShift: "assist",
        statusHour: "finished"
      })

      res.status(201).send(shift)
    }
    catch(error){
      res.status(500).send(error)
    } 
  },
// FUNCIÓN PARA TRAER TODOS LOS TURNOS MEDIANTE SU idBranch.
  shiftsOnBranch: async function(req,res){
    try{
      const shift = await Shift.find({idBranch: req.params.id})

      res.status(201).send(shift)
    }
    catch(error){
      res.status(500).send(error)
    }
  },
// FUNCIÓN PARA TRAER UN TURNO MEDIANTE SU ID.
  shiftById: async function(req,res){
    try{
      const shift = await Shift.findOne({ _id: req.body.idShift })

      res.status(201).send(shift)
    }
    catch (error){
      res.status(500).send('Server error!')
    }
  },
// FUNCIÓN PARA TRAER TODOS LOS TURNOS.
  allShifts: async function(req,res){
    try{
        const shifts = await Shift.find()
        res.status(200).send(shifts)
    }
    catch(error){
        res.status(500).send(error)
    }
},

shiftsByUserId: async function(req,res){
  try{
    const users = await Shift.find({idUser: req.body.idUser})

    res.status(201).send(users)
  }
  catch(error){
    res.status(500).send(error)
}
},

//ADICIONALES

pendingShifts: async function(req,res){
  try{
    const shift = await Shift.find({statusShift: "pending"})
    res.status(201).send(shift)
  }
  catch(error){
    res.status(500).send(error)
  }
},

noAssistShifts: async function(req,res){
  try{
    const shift = await Shift.find({statusShift: "no assist"})
    res.status(201).send(shift)
  }
  catch(error){
    res.status(500).send(error)
  }
},
assistShifts: async function(req,res){
  try{
    const shift = await Shift.find({statusShift: "assist"})
    res.status(201).send(shift)
  }
  catch(error){
    res.status(500).send(error)
  }
},

cancelledShifts: async function(req,res){
  try{
    const shift = await Shift.find({statusHour: "cancelled"})
    res.status(201).send(shift)
  }
  catch(error){
    res.status(500).send(error)
  }
},


//DANGER ZONE

//ELIMINA TODOS LOS TURNOS.
deleteShifts: async function(req,res){
  try{
      const shifts = await Shift.deleteMany()

      res.status(200).send("Deleted!")
  }
  catch(error){
      res.status(500).send(error)
  }
}
}

  module.exports = shiftManagement