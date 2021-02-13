import { convertDateToISO8601Format } from '@/utils/formatDate'

type DataType = {
  日付: string
  小計: number
  公表数: number
  確定数: number
  陽性: number
  陰性: number
}

export type GraphDataType = {
  label: string
  transition: number
  cumulative: number
}

export const formatGraphInspections = (data: DataType[]) => {
  const today = new Date()
  return {
    labels: data
      .filter(d => new Date(d['日付']) < today)
      .map(d => {
        return d['日付']
      }),
    datasets: [
      data
        .filter(d => new Date(d['日付']) < today)
        .map(d => {
          return d['陽性']
        }),
      data
        .filter(d => new Date(d['日付']) < today)
        .map(d => {
          return d['陰性']
        })
    ]
  }
}

export const formatGraphReported = (data: DataType[]) => {
  const graphData: GraphDataType[] = []
  const today = new Date()
  let patSum = 0
  data
    .filter(d => new Date(d['日付']) < today)
    .forEach(d => {
      const subTotal = d['公表数']
      if (!isNaN(subTotal)) {
        patSum += subTotal
        graphData.push({
          label: convertDateToISO8601Format(d['日付']),
          transition: subTotal,
          cumulative: patSum
        })
      }
    })
  return graphData
}

export default (data: DataType[]) => {
  const graphData: GraphDataType[] = []
  const today = new Date()
  let patSum = 0
  data
    .filter(d => new Date(d['日付']) < today)
    .forEach(d => {
      const subTotal = d['小計']
      if (!isNaN(subTotal)) {
        patSum += subTotal
        graphData.push({
          label: convertDateToISO8601Format(d['日付']),
          transition: subTotal,
          cumulative: patSum
        })
      }
    })
  return graphData
}
