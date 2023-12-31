function EmployeeItem({employee}) {
    console.log(employee)
    return(
        <>
            <div className="employeesModalGrid" style={{width:1470}}>
                {employee?.employeePicture ?
                    <div className="employeesModalGrid-item" style={{backgroundImage:`url(${employee?.employeePicture})`,backgroundSize:"cover"}}/>
                    :
                    <div className="employeesModalGrid-item"><span> 등록된 사진이 없습니다.</span></div>
                }
                <div className="employeesModalGrid-item">이름</div>
                <div className="employeesModalGrid-item">{employee.employeeName}</div>
                <div className="employeesModalGrid-item">이메일</div>
                <div className="employeesModalGrid-item">{employee.employeeEmail}</div>
                <div className="employeesModalGrid-item">사번</div>
                <div className="employeesModalGrid-item">{employee.account?.employeeNumber}</div>
                <div className="employeesModalGrid-item">전화번호</div>
                <div className="employeesModalGrid-item">{employee.employeePhone}</div>
                <div className="employeesModalGrid-item">직급</div>
                <div className="employeesModalGrid-item">{employee.rank.rankName}</div>
                <div className="employeesModalGrid-item">팀</div>
                <div className="employeesModalGrid-item">{employee.team.teamName}</div>
                <div className="employeesModalGrid-item">주소</div>
                <div className="employeesModalGrid-item">{employee.employeeAddress}</div>
            </div>

            <div className="employeesModalGrid-2">
                <div className="employeesModalGrid-2-item">입사일</div>
                <div className="employeesModalGrid-2-item">{employee.joinDate}</div>
                <div className="employeesModalGrid-2-item">성별</div>
                <div className="employeesModalGrid-2-item">{employee.gender}</div>
                <div className="employeesModalGrid-2-item">퇴사일</div>
                <div className="employeesModalGrid-2-item">{employee.leaveDate}</div>
                <div className="employeesModalGrid-2-item">채용 구분</div>
                <div className="employeesModalGrid-2-item">{employee.employmentType}</div>
                <div className="employeesModalGrid-2-item">주민등록 번호</div>
                <div className="employeesModalGrid-2-item">{employee.registrationNumberFull}</div>
                <div className="employeesModalGrid-2-item">퇴사 사유</div>
                <div className="employeesModalGrid-2-item">{employee.leaveReason}</div>
                <div className="employeesModalGrid-2-item">상태</div>
                <div className="employeesModalGrid-2-item">{employee.leaveType}</div>
                <div className="employeesModalGrid-2-item">결혼 여부</div>
                <div className="employeesModalGrid-2-item">{employee.marriage}</div>
                <div className="employeesModalGrid-2-item"></div>
                <div className="employeesModalGrid-2-item"></div>
                <div className="employeesModalGrid-2-item">장애 여부</div>
                <div className="employeesModalGrid-2-item">{employee.disability}</div>
                <div className="employeesModalGrid-2-item">보훈 여부</div>
                <div className="employeesModalGrid-2-item">{employee.patriots}</div>
                <div className="employeesModalGrid-2-item"></div>
                <div className="employeesModalGrid-2-item"></div>
            </div>

            <h1 className="employeesModalGrid-3-title" align="left">직급 변경 이력</h1>

            <div className="employee-history-div">
                <div className="employee-history-fix-row">
                    <div className="employee-history-fix-row-item">번호</div>
                    <div className="employee-history-fix-row-item">변경 사항</div>
                    <div className="employee-history-fix-row-item">변경 전</div>
                    <div className="employee-history-fix-row-item">변경 후</div>
                    <div className="employee-history-fix-row-item">변경 일자</div>
                    <div className="employee-history-fix-row-item2">비고</div>
                </div>
                {(employee.rankHistory).length > 0 ? employee.rankHistory.map( rankHistory =>
                        <div className="employee-history-fix-row2" key={rankHistory.rankNum} style={{backgroundColor:"#FFFFFF"}}>
                            <div className="employee-history-fix-row2-item" style={{backgroundColor:"#FFFFFF"}}>{rankHistory.rankNum}</div>
                            <div className="employee-history-fix-row2-item" style={{backgroundColor:"#FFFFFF"}}>{rankHistory.upDown == 'UP' ? '진급' : '강등'}</div>
                            <div className="employee-history-fix-row2-item" style={{backgroundColor:"#FFFFFF"}}>{rankHistory.afterRank}</div>
                            <div className="employee-history-fix-row2-item" style={{backgroundColor:"#FFFFFF"}}>{rankHistory.beforeRank}</div>
                            <div className="employee-history-fix-row2-item" style={{backgroundColor:"#FFFFFF"}}>{rankHistory.updateDate}</div>
                            <div className="employee-history-fix-row2-item2" style={{backgroundColor:"#FFFFFF"}}>{rankHistory.updateNote}</div>
                        </div>
                    ) :
                    <div className="employee-history-fix-row2">
                        <div className="employee-history-fix-row3">직급 변경 이력이 없습니다.</div>
                    </div>
                }
            </div>
        </>
    )

}
export default EmployeeItem;