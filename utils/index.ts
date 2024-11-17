export async function fetchCars() {
	const headers = {
		'x-rapidapi-key': '4fcc6c33bbmsh05c9e695964f33fp17fdd5jsn16754636f4b2',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
	}

	const response = await fetch(
		'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
		{
			headers: headers,
		}
	)

	const result = await response.json()

	return result
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1;
    const ageFactor = 0.05; 
  
   
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };