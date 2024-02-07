import FoodData from "./foodData";
import FoodMenu from "./components/FoodMenu";
import DepartmentData from "./departmentData";
import DepartmentStore from "./components/DepartmentStore";
import libraryData from "./libraryData";
import Library from "./components/Examples/Library";

function App() {
	return (
		<>
			<Library data={libraryData} />
      <FoodMenu data={FoodData} />
      <DepartmentStore data={DepartmentData} />
		</>
	);
}

export default App;
