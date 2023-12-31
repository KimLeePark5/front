export const firstGraphData = ({slicedData1,slicedData2,slicedData3,slicedData4}) =>

    [
    {
        "id": slicedData1[0].year + "년",
        "data": slicedData1.map(item => ({
            "x": item.month,
            "y": item.cumulativeCount - slicedData2[11].cumulativeCount
        }))
    },
    {
        "id": slicedData2[1].year + "년",
        "data": slicedData2.map(item => ({
            "x": item.month,
            "y": item.cumulativeCount - slicedData3[11].cumulativeCount
        }))
    },
    {
        "id": slicedData3[2].year + "년",
        "data": slicedData3.map(item => ({
            "x": item.month,
            "y": item.cumulativeCount - slicedData4[11].cumulativeCount
        }))
    },

]

export const secondGraphData = ({secondGraphData}) =>
    secondGraphData.map((item) => ({
        "taste": item.primaryAddress,
        "50-59년생": item.fifties,
        "40-49년생": item.forties,
        "30-39년생": item.thirties,
        "30년생이하": item.twenties
    }))


export const thirdGraphData = ({thirdGraphData}) => [
    {
        "country": thirdGraphData[3].month + "월",
        "여성": thirdGraphData[3].countFemale,
        "여성Color": "hsl(72, 70%, 50%)",
        "남성": thirdGraphData[3].countMale,
        "남성Color": "hsl(336, 70%, 50%)",
        "sandwich": 44,
        "sandwichColor": "hsl(232, 70%, 50%)",
        "kebab": 100,
        "kebabColor": "hsl(308, 70%, 50%)",
        "fries": 76,
        "friesColor": "hsl(278, 70%, 50%)",
        "donut": 197,
        "donutColor": "hsl(196, 70%, 50%)"
    },
    {
        "country": thirdGraphData[2].month + "월",
        "여성": thirdGraphData[2].countFemale,
        "여성Color": "hsl(354, 70%, 50%)",
        "남성": thirdGraphData[2].countMale,
        "남성Color": "hsl(201, 70%, 50%)",
        "sandwich": 30,
        "sandwichColor": "hsl(112, 70%, 50%)",
        "kebab": 83,
        "kebabColor": "hsl(183, 70%, 50%)",
        "fries": 196,
        "friesColor": "hsl(128, 70%, 50%)",
        "donut": 139,
        "donutColor": "hsl(263, 70%, 50%)"
    },
    {
        "country": thirdGraphData[1].month + "월",
        "여성": thirdGraphData[1].countFemale,
        "여성Color": "hsl(346, 70%, 50%)",
        "남성": thirdGraphData[1].countMale,
        "남성Color": "hsl(202, 70%, 50%)",
        "sandwich": 182,
        "sandwichColor": "hsl(114, 70%, 50%)",
        "kebab": 156,
        "kebabColor": "hsl(216, 70%, 50%)",
        "fries": 194,
        "friesColor": "hsl(182, 70%, 50%)",
        "donut": 47,
        "donutColor": "hsl(349, 70%, 50%)"
    },
    {
        "country": thirdGraphData[0].month + "월",
        "여성": thirdGraphData[0].countFemale,
        "여성Color": "hsl(287, 70%, 50%)",
        "남성": thirdGraphData[0].countMale,
        "남성Color": "hsl(259, 70%, 50%)",
        "sandwich": 184,
        "sandwichColor": "hsl(47, 70%, 50%)",
        "kebab": 129,
        "kebabColor": "hsl(231, 70%, 50%)",
        "fries": 44,
        "friesColor": "hsl(209, 70%, 50%)",
        "donut": 171,
        "donutColor": "hsl(66, 70%, 50%)"
    },

]