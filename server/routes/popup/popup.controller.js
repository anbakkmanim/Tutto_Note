const Note = require('../../models/note')

exports.getPopup = (req, res) => {

  const respond = (note) => {
    let color;
    if(!note){
      res.status(404).json({
        status: 'ERR',
        message: 'Empty note'
      })
      return;
    }
    switch(note.color){
      case "red darken-2": color = "#D32F2F" 
                            break
      case "orange darken-2": color = "#F57C00" 
                              break
      case "green darken-2": color = "#388E3C" 
                              break
      case "teal darken-2": color = "#00796B" 
                              break
      case "blue darken-2": color = "#1976D2" 
                              break
      case "indigo darken-2": color = "#303F9F" 
                              break    
      case "deep-purple darken-2": color = "#512DA8" 
                              break
      case "grey darken-2": color = "#616161" 
                              break                      
    }

    note.content = note.content.replace('/\n/g', "<br>")
    res.render('index', {
      title: note.title,
      content: note.content,
      color: color
    })
  }

  const onError = (err) => {
    res.status(403).json({
      status: 'ERR',
      message: err.message
    })
  }

  Note.findOneByUid(req.params._id)
  .then(respond)
  .catch(onError)
}