const addBtn = document.querySelector(".addbtn");
const main = document.querySelector("#main");


addBtn.addEventListener("click", function () {
    addNote();
});


const saveNotes= ()=>{
    const notes= document.querySelectorAll('.note textarea')
    const data=[]

    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )

    if(data.length===0){
        localStorage.removeItem('notes')
    }else{
        localStorage.setItem('notes',JSON.stringify(data))
    }
}

const addNote = (text='') => {
    const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tool">
    <i class="far fa-save save"></i>
        <i class="fas fa-trash-alt delete"></i>
    </div>
    <textarea name="">${text}</textarea>`;
    
    note.querySelector('.delete').addEventListener('click', function(){
        note.remove()
        saveNotes()
    })

    note.querySelector('.save').addEventListener('click', function(){
        saveNotes()
    })
    note.querySelector('textarea').addEventListener('focusout', function(){
        saveNotes()
    })
  main.appendChild(note);
  saveNotes()
};

(
    function(){
        const realNotes=JSON.parse(localStorage.getItem('notes'))
        if(realNotes===0){
           addNote() 
        }else{

            realNotes.forEach(
                (realNote)=>{
                    addNote(realNote)
                }
            )
        }
    }
)()
