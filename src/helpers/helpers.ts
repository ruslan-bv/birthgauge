export const CSVToArray = (data: any, delimiter = ',', omitFirstRow = false) =>
                            data
                            .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
                            .split('\n')
                            .map((v: any) => v.split(delimiter));
