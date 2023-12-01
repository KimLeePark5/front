import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callGetAttendResultAPI} from "../../../apis/AttendAPICalls";

function AttendItem() {
    const date = new Date();
    const year = date.getFullYear();
    const month1 = useRef(Number(date.getMonth()+1));
    const year1 = useRef(Number(date.getFullYear()));
    const today = year1.current + '-' + (String(month1.current).length == 1 ? '0'+month1.current : month1.current);

    const [month, setMonth] = useState(today)
    const {myAttend} = useSelector(state => state.attendReducer);

    const dispatch = useDispatch();
    const inputmonth = useRef();




    useEffect(() => {
        dispatch(callGetAttendResultAPI({month: month}));
        console.log(myAttend);
    }, [month]);
    const monthChangeHandler = (e) => {
        setMonth(e.target.value)
    }

    const onClickUpHandler = () => {
        if(month1.current == 1){
            year1.current = year1.current- 1
            month1.current = 12;
        }else(month1.current = month1.current-1)

        setMonth(year1.current+'-' + (String(month1.current).length == 1 ? '0'+month1.current : month1.current))
        // console.log(String(month1.current).length);
    }
    const onClickDownHandler = () => {

        if(month1.current == 12){
            year1.current = year1.current + 1
            month1.current = 1
        }else(month1.current = month1.current+1)
        setMonth(year1.current+'-' + (String(month1.current).length == 1 ? '0'+month1.current : month1.current))
    }
    return (
        <div className="attend-main">

            <div className="attend-month">
            <button onClick={onClickUpHandler} className="attend-btn">&lt;</button>
                <input ref={inputmonth} type="month" onChange={monthChangeHandler} value={month} style={{
                    display:"none"
                }}/>
                <span>{inputmonth.current && (inputmonth.current.value).replace("-","년 ")}월</span>
            <button onClick={onClickDownHandler} className="attend-btn">&gt;</button>
            </div>
            {myAttend &&
                <div className="attend-detail-box">
                    <div>
                        <div className="detailname">근무시간</div>
                        <div className="detail-count attendTime">
                            {myAttend.responseAttendType.totalAttendTime}H
                        </div>
                    </div>
                    <div className="detailname">
                        <div className="attendhead">근무상세</div>
                        <div className="attend-detail">
                            <div>
                                <div className="detail-name">출근</div>
                                <div className="detail-count">{myAttend.responseAttend.length}</div>
                            </div>
                            <div>
                                <div className="detail-name">결근</div>
                                <div className="detail-count">{myAttend.responseAttendType.absentCount}</div>
                            </div>
                            <div>
                                <div className="detail-name">조퇴</div>
                                <div className="detail-count">{myAttend.responseAttendType.leaveEarlyCount}</div>
                            </div>
                            <div>
                                <div className="detail-name">지각</div>
                                <div className="detail-count">{myAttend.responseAttendType.lateCount}</div>
                            </div>
                            <div>
                                <div className="detail-name">휴가</div>
                                <div className="detail-count">{myAttend.responseAttendType.vacationCount}</div>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </div>

    )
}

export default AttendItem;