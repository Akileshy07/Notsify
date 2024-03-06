import { BsFillCalendar2EventFill } from "react-icons/bs";
import { BsTextLeft } from "react-icons/bs";
import style from "./AddNotes.module.css"
import { useContext, useRef } from "react";
import { NotesList } from "../Store/Notes-provider";
const AddNotes = () => {

    const {addNotes} = useContext(NotesList)

const titleData = useRef();
const descriptionData = useRef();
const dateData = useRef();
const priorityData = useRef();

const createNotes = (e) =>{
    e.preventDefault();
  

    const title = titleData.current.value;
    console.log(title);
    const description = descriptionData.current.value;
    const date = dateData.current.value;
    const priority = priorityData.current.value;
console.log(priorityData.current.value);
    titleData.current.value = "";
    descriptionData.current.value = "";
    dateData.current.value="";
    priorityData.current.value = "";

    addNotes(title,description,date,priority)
}

  return (
    <>
    <div className={`col-md-8 mt-3 ${style.search}`}>
        <h3>Create Your Notes Here</h3>
    </div>

        <div className="row" >
          <div className="col-md-8 mt-3 ms-3">
                <form onSubmit={createNotes}>
            <div class="mb-3">
              <label for="title" class="form-label text-white">
                Title
              </label>
              <input ref={titleData}
                type="text"
                class="form-control p-2"
                id="title"
                placeholder="Homework"
              />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label text-white">
                Description
              </label>
              <textarea 
              ref={descriptionData}
                class="form-control p-3"
                id="description"
                rows="3"
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and"
              ></textarea>
            </div>
            <div class="form-group">
              <label class="label-control text-white">Reminder Date</label>
              <input
              ref={dateData}
                type="date"
                class="form-control"
                name="reminder_date"
                data-change="input"
                data-custom-target="#note-reminder-date"
              />
            </div>
            <div class="form-group mt-3">
              <label class="label-control text-white">Priority</label>
              <div>
                <select
                ref={priorityData}
                  name="priority"
                  id=""
                  class="form-control"
                  data-change="select"
                  data-custom-target="color"
                >
                  <option value="Default">Default</option>
                  <option value="Very Low">Very Low</option>
                  <option value="Low" >
                    Low
                  </option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Very High">Very High</option>
                </select>
              </div>
            </div>
            <button
              type="reset"
              class="btn btn-dark mt-4 me-4"
              data-reset="note-reset"
            >
              Reset
            </button>
            <button
              type="submit"
              class="btn btn-success mt-4"
              
            >
              Save
            </button>
            </form>
          </div>

          <div className={`col-md-3 mt-4 p-4 `}>
            <div className={`card card-block card-stretch card-height card-border-bottom-info ${style.example}`}>
              <div className="card-header d-flex justify-content-between pb-1">
                <div
                  class={`icon iq-icon-box-2 icon-border-info rounded ${style.icon}`}
                  id="note-icon"
                >
                  <div
                    style={{
                      backgroundColor: "",
                    }}
                  >
                    <BsFillCalendar2EventFill
                      style={{
                        color: "#1c1c1c",
                      }}
                    />
                  </div>
                </div>
                <div class={`card-header-toolbar d-flex align-items-center ${style.icon}`}>
                  <div
                    style={{
                      backgroundColor: " ",
                    }}
                  >
                    <BsTextLeft
                      style={{
                        color: " #1c1c1c",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div class="card-body rounded">
                <h4 class="card-title text-ellipsis short-1" id="note-title">
                  Example Note
                </h4>
                <p class="mb-3 text-ellipsis short-6" id="note-description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div class="card-footer">
                <div class="d-flex align-items-center justify-content-between note-text note-text-info">
                  <a href="#" class="text-decoration-none text-dark fw-bold">
                    <i class="las la-user-friends mr-2 font-size-20 "></i>Only Me
                  </a>
                  <a href="#" class="p-2 text-decoration-none text-dark fw-bold">
                    <i class="las la-calendar mr-2 font-size-20 "></i>
                    <span id="note-reminder-date"><BsFillCalendar2EventFill
                      style={{
                        color: "#1c1c1c",
                        marginRight: "8px",
                        fontSize:"20px"
                      }}
                    />01 Jan 2021</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};
export default AddNotes;
