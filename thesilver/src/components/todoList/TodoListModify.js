
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callTodoDeleteAPI, callTodoModifyAPI} from "../../apis/TodoListAPI";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function TodoListModify({settodoLIstModifyModal, todoNo, content}){

const dispatch = useDispatch();
    const[text,setText]=useState()
    const navigate = useNavigate();
console.log(todoNo)
    const todoModifyHandler = ()=>{
    if(!text)
        if(!text.replaceAll(" ","")){
            toast.error("공백일 수 없습니다.")
            return;
        }
        dispatch(callTodoModifyAPI(text,todoNo));
    }


    const todoDeleteHandler = ()=>{
        dispatch(callTodoDeleteAPI(todoNo));
    }
    return(
        <div className='todomodal'>
            <div className='todomodalcontainer'>
                <div>
                <span className="todoregiHead" style={{display:'inline-block', marginLeft:'150px'}}>
                    Todo-List
                </span>
                    <span onClick={()=>{settodoLIstModifyModal(false)}} style={{display:'inline-block', marginLeft:'150px',fontSize:'30px'}}>X</span>
                </div>
                <input type='text' className='todoregistInput' value={text} placeholder='수정할 텍스트 입력' onChange={(e)=>{setText(e.target.value)}}/>
                <br/>
                <div className='todoregistbtn'>
                    <button className='toregibtn' onClick={todoModifyHandler}>수정</button>
                    <button className='toregibtn' style={{marginLeft:'20px'}} onClick={todoDeleteHandler}>삭제</button>
                </div>
            </div>
        </div>
    )

}

export default TodoListModify;