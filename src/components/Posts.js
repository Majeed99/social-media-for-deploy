import { useState } from "react";
import "../Styles/Posts-module.css";
import Modal from "react-bootstrap/Modal";
import { BiPlusMedical } from "react-icons/bi";

function Posts() {
  const [show, setShow] = useState([]);
  const [open, setOpen] = useState(false);
  let [postsArr, setPostsArr] = useState([]);

  // FUNCTION TO ADD NEW POST
  let addNewPost = (e) => {
    e.preventDefault();
    var titleValue = document.getElementById("newPostTitle").value;
    var imagevalue = document.getElementById("getImage");
    const file = imagevalue.files[0];

    console.log(file);
    //  const reader = new FileReader();
    let obj = { img: file, title: titleValue, comments: [] };
    console.log(obj);
    // postsArr.push(obj);
    // show.push(false);
    // setShow((arr) => [...arr]);
    setPostsArr((arr) => [...arr, obj]);
  };
  // FUNCTION TO ADD NEW COMMENT
  let addComment = (e) => {
    e.preventDefault();
    let newComment = document.getElementById("newComment").value;
    document.getElementById("newComment").value = "";
    postsArr[e.target.id].comments.push(newComment);

    setPostsArr((arr) => [...arr]);
  };
  // FUNCTION TO DELETE COMMENT BASED ON ID OF POST(e.target.value) AND ID OF COMMENT(e.target.id)
  let deleteComment = (e) => {
    postsArr[e.target.value].comments.splice(e.target.id, 1);
    setPostsArr((arr) => [...arr]);
  };
  // FUNCTION TO EDIT COMMENT BASED ON ID OF POST(e.target.value) AND ID OF COMMENT(e.target.id)
  let editComment = (e) => {
    e.preventDefault();
    document.getElementById("newComment").value =
      postsArr[e.target.value].comments[e.target.id];
    console.log(e.target);
    postsArr[e.target.value].comments.splice(e.target.id, 1);
  };

  // RETURN
  return (
    <div className="allPosts">
      {postsArr.map((obj, index) => (
        <div className="post">
          <div>
            <img src={URL.createObjectURL(obj.img)} alt="" />

            <h6 className="title">
              {" "}
              <b>MAJEEDx99</b> {obj.title}
            </h6>
          </div>
          <div className="showComments">
            <a
              id={index}
              onClick={(e) => {
                let index = e.target.id;
                show.splice(index, 1, true);
                setShow((arr) => [...arr]);
              }}
            >
              view all {obj.comments.length} comments
            </a>
          </div>

          <Modal
            show={show[index]}
            id={index}
            onHide={() => {
              show.splice(index, 1, false);
              setShow((arr) => [...arr]);
            }}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Comments
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {obj.comments.map((comment, indexOfComment) => (
                <div className="eachComment">
                  <div>
                    <h6>
                      <b>User Name:</b> {comment}
                    </h6>
                  </div>
                  <button
                    className="editBtn"
                    value={index}
                    id={indexOfComment}
                    onClick={editComment}
                  >
                    Edit
                  </button>

                  <button
                    className="deleteBtn"
                    value={index}
                    id={indexOfComment}
                    onClick={deleteComment}
                  >
                    DELETE
                  </button>
                </div>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <form>
                <input
                  id="newComment"
                  className="addComment postCommentText"
                  type="text"
                  placeholder="Add a comment"
                ></input>
                <button
                  className="postCommentBtn"
                  id={index}
                  type="submit"
                  onClick={addComment}
                >
                  Post
                </button>
              </form>
            </Modal.Footer>
          </Modal>
        </div>
      ))}
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="addPostBtn"
        // onClick={addNewPost}
      >
        <BiPlusMedical color="rgb(56, 56, 56)" />
      </button>
      <Modal
        show={open}
        onHide={() => {
          setOpen(false);
        }}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add new post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Enter your title here: </label>
            <input type="text" id="newPostTitle"></input>
            <input type="file" accept=".png, .jpg, .jpeg" id="getImage"></input>
            <br />
            <input type="submit" onClick={addNewPost}></input>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Posts;
