const isHaveProperty = (_class,property) => {
 return !(typeof(_class()[property]) == 'undefined')
}



const _flat = (arr,resultArr = []) => {
	arr.map((val) => {
	  return Array.isArray(val) ? _flat(val,resultArr) : resultArr.push(val)	
        })

	return resultArr
}


const flat = (arr) => {
	
  return isHaveProperty(Array,'flat') ? arr.flat() : _flat(arr)
}


module.exports  = flat