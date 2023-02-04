export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) => {
    return restaurant?.data?.name?.toLowerCase().includes(searchText?.trim()?.toLowerCase())
      || restaurant?.data?.cuisines?.filter(e => e?.trim()?.toLowerCase()?.includes(searchText?.trim()?.toLowerCase())).length

  });

  return filterData;
}
