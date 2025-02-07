const signData = [
  {
    title: "Yield ",
     answer :
      "Drivers must slow down and be prepared to stop, yielding the right-of-way to any pedestrians and cross traffic.",
  },
  {
    title: "Do Not Enter",
     answer :
      "Drivers are approaching one-way traffic from the wrong direction and should turn around immediately.",
  },
  {
    title: "Wrong Way",
     answer :
      "Drivers are approaching one-way traffic from the wrong direction and should turn around immediately.",
  },
  {
    title: "Do Not Pass",
     answer : "Passing is unsafe and prohibited in the indicated area.",
  },
  {
    title: "Pass with Care",
     answer : "Drivers may pass when it is safe to do so.",
  },
  {
    title: "Keep Right",
     answer :
      "Drivers are approaching an obstruction and should keep to the right.",
  },
  {
    title: "Keep Right",
     answer :
      "Drivers are approaching an obstruction and should keep to the right.",
  },
  {
    title: "No Bicycles",
     answer : "No bicycles are allowed in the indicated area.",
  },
  {
    title: "No Pedestrians",
     answer : "No pedestrians are allowed in the indicated area.",
  },
  {
    title: "No Trucks",
     answer : "The indicated area is not suitable for use by large trucks.",
  },
  {
    title: "No Left Turn",
     answer :
      "Drivers may not perform a left turn at the indicated intersection.",
  },
  {
    title: "No Right Turn",
     answer :
      "Drivers may not perform a right turn at the indicated intersection.",
  },
  {
    title: "No U-Turn",
     answer : "Drivers may not perform a U-turn at the indicated location.",
  },
  {
    title: "No Parking",
     answer :
      "Parking is prohibited at any location where this sign is posted.",
  },
  {
    title: "No Parking",
     answer :
      "Parking is prohibited at any location where this sign is posted.",
  },
  {
    title: "Limited Parking",
     answer :
      "Parking is restricted in the indicated location during the posted hours.",
  },
  {
    title: "Pay Parking",
     answer :
      "Drivers may park in the indicated location if they pay the required fees and do not exceed the time limit.",
  },
  {
    title: "Right Turn Only",
     answer :
      "Traffic in the indicated lane must turn right at the intersection.",
  },
  {
    title: "Left Turn Only",
     answer :
      "Traffic in the indicated lane must turn left at the intersection.",
  },
  {
    title: "Straight Only",
     answer :
      "Traffic in the indicated lane must continue straight through the intersection.",
  },
  {
    title: "Straight or Turn",
     answer :
      "Traffic in the indicated lane may continue straight or turn in the direction of the arrow.",
  },
  {
    title: "U-Turn Only",
     answer : "Traffic in the indicated lane must complete a U-turn.",
  },
  {
    title: "Left Lane Must Turn Left",
     answer :
      "Drivers in the left lane must turn left at the indicated intersection.",
  },
  {
    title: "Multiple Railroad Tracks",
     answer :
      "The roadway intersects with a railroad crossing with multiple tracks. Drivers must be sure all tracks are clear before proceeding.",
  },
  {
    title: "DMaximum Speed Limit",
     answer :
      "This is the maximum speed at which drivers may travel. Drivers must drive at a lower speed if conditions require it.",
  },
  {
    title: "Maximum and Minimum Speed Limits",
     answer :
      "Under ideal conditions, drivers may not exceed the maximum posted speed and may not drive slower than the minimum posted speed.",
  },
  {
    title: "School Zone Speed Limit",
     answer :
      "During the posted times, or when a warning light is flashing, drivers must follow a school zone's speed limit.",
  },
  {
    title: "End School Zone",
     answer : "A school zone and its restricted speed limit come to an end.",
  },
  {
    title: "One-Way Traffic",
     answer :
      "Traffic on the roadway moves only in the direction indicated by the arrow.",
  },
  {
    title: "One-Way Traffic",
     answer :
      "Traffic on the roadway moves only in the direction indicated by the arrow.",
  },
  {
    title: "No Turn on Red",
     answer :
      "Drivers may not make a right or left turn when the traffic signal is red.",
  },
  {
    title: "Left Turn Yield on Green",
     answer :
      "Drivers may make a left turn when the traffic signal is green, but they must first yield to pedestrians and oncoming traffic.",
  },
  {
    title: "Speeding Fines Doubled",
     answer :
      "Fines for moving traffic violations are doubled in the indicated area. This sign is commonly posted in work and school zones.",
  },
  {
    title: "Slower Traffic Keep Right",
     answer :
      "Slower-moving traffic should stay in the right lane. The left lane is reserved for faster-moving vehicles to pass slower-moving traffic.",
  },
  {
    title: "Two-Way Left Turn",
     answer :
      "Traffic from both directions may use the shared center lane to turn left.",
  },
  {
    title: "Slow-Moving Vehicle",
     answer :
      "A vehicle with a reflective orange and red triangle on its rear is a slowmoving vehicle that often travels at speeds slower than 25 mph.",
  },
  {
    title: "Roundabout",
     answer :
      "Traffic ahead moves in a counterclockwise direction. Drivers should enter at a low speed and yield to traffic already using the circle.",
  },
  {
    title: "Reserved Handicap Parking",
     answer :
      "Indicated parking spaces are reserved for vehicles with the proper license plate or hanging tag registered to a person in the vehicle.",
  },
  {
    title: "Bicycle Lane",
     answer :
      "The lane is reserved for bicyclists. Passenger vehicles may only enter a bicycle lane when turning.",
  },
  {
    title: "High Occupancy Vehicle Lane",
     answer :
      "The lane is reserved during the posted times for vehicles with the indicated number of occupants.",
  },
  {
    title: "Restricted Lane Ends",
     answer : "Prior lane restrictions come to an end.",
  },
  {
    title: "Stop",
     answer :
      "Drivers must come to a complete stop and yield the right-of-way to pedestrians and cross traffic.",
  },
  {
    title: "All-Way Stop",
     answer :
      "Drivers from all directions must come to a complete stop and take turns entering the intersection. Drivers must yield to any pedestrians.",
  },
  {
    title: "Stop Here on Red",
     answer :
      "At a stop sign or red traffic signal, drivers must come to a complete stop at the indicated stop line.",
  },
  {
    title: "Divided Highway",
     answer :
      "Drivers are entering a divided highway and should keep to the right of the median. ",
  },
  {
    title: "Sharp Turn to the Left",
     answer :
      "Drivers should reduce their speed and prepare to turn sharply to the left.",
  },
  {
    title: "Sharp Turn to the Right",
     answer :
      "Drivers should reduce their speed and prepare to turn sharply to the right.",
  },
  {
    title: "Curve to the Left",
     answer :
      "Drivers should reduce their speed and prepare for the road to curve to the left.",
  },
  {
    title: "Curve to the Right",
     answer :
      "Drivers should reduce their speed and prepare for the road to curve to the right.",
  },
  {
    title: "Reverse Turn",
     answer :
      "The road ahead turns sharply in one direction and then in the other. Drivers should reduce their speed.",
  },
  {
    title: "Reverse Curve",
     answer :
      "The road ahead curves in one direction and then in the other. Drivers should reduce their speed.",
  },
  {
    title: "Winding Road",
     answer :
      "The road ahead winds in a series of curves. Drivers should reduce their speed.",
  },
  {
    title: "Directional Arrow",
     answer :
      "Drivers should reduce their speed and prepare to turn sharply in the direction indicated by the arrow.",
  },
  {
    title: "Chevron",
     answer :
      "Drivers should reduce their speed and prepare to turn sharply in the direction indicated by the chevron.",
  },
  {
    title: "Road Narrows",
     answer :
      "The road ahead narrows. Drivers should take care to stay on the traveled portion of the roadway.",
  },
  {
    title: "Merging Traffic",
     answer :
      "Drivers should be alert to traffic merging from the right and should make room for merging vehicles.",
  },
  {
    title: "Added Lane",
     answer :
      "The road ahead comes together with another road. Drivers do not have to merge but should be aware of additional traffic.",
  },
  {
    title: "Farm Machinery",
     answer :
      "The roadway is shared with farm machinery. Drivers should drive with caution and be prepared to slow down.",
  },
  {
    title: "Horse-Drawn Vehicles",
     answer :
      "The roadway is shared with horse-drawn vehicles. Drivers should drive with caution and be prepared to slow down.",
  },
  {
    title: "Cattle Crossing",
     answer :
      "Farm animals may be crossing the roadway. Drivers should be alert to animals and be prepared to slow down or stop.",
  },
  {
    title: "Deer Crossing",
     answer :
      "Deer may be on or near the roadway. Drivers should be alert to animals and be prepared to slow down or stop.",
  },
  {
    title: "Fire Station",
     answer :
      "Drivers should watch for fire engines entering the roadway to respond to an emergency.",
  },
  {
    title: "Lane Ends, Merge Left",
     answer :
      "The right lane ends ahead. Drivers should merge to the left to stay on the roadway.",
  },
  {
    title: "Lane Ends, Merge Left",
     answer :
      "The right lane ends ahead. Drivers should merge to the left to stay on the roadway.",
  },
  {
    title: "Pedestrian Crossing",
     answer :
      "Pedestrians may be present in a marked or unmarked crosswalk. Drivers must yield to pedestrians crossing a roadway.",
  },
  {
    title: "Bicycle Warning",
     answer :
      "Bicycles may be on or crossing the roadway. Bicycles are considered vehicles and motorists must respect their right to be on the road.",
  },
  {
    title: "Roundabout",
     answer :
      "Traffic ahead moves in a counterclockwise direction. Drivers should enter at a low speed and yield to traffic already using the circle.",
  },
  {
    title: "Slippery When Wet",
     answer :
      "The road becomes especially slippery under wet conditions. Drivers should reduce their speed and following distance.",
  },
  {
    title: "No Passing Zone",
     answer :
      "Passing is unsafe and prohibited in an area marked with this sign.",
  },
  {
    title: "Traffic Signal Ahead",
     answer :
      "Drivers should be prepared to respond to a traffic signal on the road ahead.",
  },
  {
    title: "Stop Ahead",
     answer :
      "Drivers should be prepared to come to a complete stop at a stop sign on the road ahead.",
  },
  {
    title: "Yield Ahead",
     answer :
      "Drivers should be prepared to slow down or stop at a yield sign on the road ahead.",
  },
  {
    title: "T Intersection",
     answer :
      "The road ends ahead. Drivers should prepare to stop before turning left or right.",
  },
  {
    title: "Crossroad",
     answer :
      "The road meets an intersecting crossroad ahead. Drivers should be alert to entering traffic.",
  },
  {
    title: "Side Road",
     answer :
      "The road meets an angled side road ahead. Drivers should be alert to entering traffic.",
  },
  {
    title: "Side Road",
     answer :
      "The road meets an intersecting side road ahead. Drivers should be alert to entering traffic.",
  },
  {
    title: "Y Intersection",
     answer :
      "Drivers are approaching a fork in the road. They should prepare to slow down or stop before turning left or right.",
  },
  {
    title: "Pavement Ends",
     answer :
      "The road surface ahead changes from pavement to gravel or dirt and tires will have less traction.",
  },
  {
    title: "Pavement Ends",
     answer :
      "The road surface ahead changes from pavement to gravel or dirt and tires will have less traction.",
  },
  {
    title: "WTraffic Island",
     answer :
      "There is a traffic island on the roadway and drivers may travel on either side of the obstruction.",
  },
  {
    title: "Divided Highway Ahead",
     answer :
      "A divided highway begins ahead. Drivers should keep to the right of the median.",
  },
  {
    title: "WDivided Highway Ends",
     answer :
      "The divided highway ends ahead. Drivers should keep to the right and be alert to oncoming traffic.",
  },
  {
    title: "Two-Way Traffic",
     answer :
      "Lanes travel in two different directions. Drivers should keep to the right and be alert to oncoming traffic.",
  },
  {
    title: "Exit Speed Limit",
     answer :
      "Drivers should slow to the posted speed limit once they have entered the freeway's deceleration lane.",
  },
  {
    title: "Reduced Speed Ahead",
     answer :
      "The speed limit is reduced on the roadway ahead. Drivers should begin to slow down.",
  },
  {
    title: "Advisory Speed",
     answer :
      "An upcoming curve or turn in the road requires a decreased speed. Travel may resume at the normal speed limit after the turn is completed.",
  },
  {
    title: "Low Shoulder",
     answer :
      "The shoulder ahead is lower than the main-traveled portion of the road. Drivers should expect a drop if they leave the roadway.",
  },
  {
    title: "Low Clearance",
     answer :
      "An overhead structure may be too low for certain vehicles to safely continue on the roadway.",
  },
  {
    title: "Downhill Slope",
     answer :
      "The road ahead slopes at a steep grade. Drivers should increase their following distance and decrease their speed.",
  },
  {
    title: "Fallen Rock",
     answer :
      "There may be large fallen rocks on the road surface. Drivers should be alert and prepared to safely maneuver around the obstacles.",
  },
  {
    title: "Drawbridge",
     answer :
      "The bridge ahead is a drawbridge. Drivers should slow to a stop when told to do so by a sign, signal, or flagger.",
  },
  {
    title: "Ice on Bridges",
     answer :
      "Bridges freeze more quickly than the rest of the road. Drivers should use caution when driving on bridges under wet or freezing conditions.",
  },
  {
    title: "Narrow Bridge",
     answer :
      "The bridge ahead is more narrow than the preceeding roadway. Drivers should use caution when driving on a narrow bridge.",
  },
  {
    title: "One-Lane Bridge",
     answer :
      "The bridge ahead has only one traffic lane. Drivers should be prepared to yield to oncoming traffic.",
  },
  {
    title: "Bump",
     answer :
      "There is a sudden bump on the road ahead. Drivers should slow down to avoid losing control of their vehicle.",
  },
  {
    title: "Dip",
     answer :
      "There is a sudden dip in the road ahead. Drivers should slow down to avoid losing control of their vehicle.",
  },
  {
    title: "Grooved Pavement",
     answer :
      "The road surface has been grooved to improve traction under slippery conditions. Cyclists should use caution.",
  },
  {
    title: "Dead End",
     answer :
      "The road ahead comes to an end. Drivers will have to turn around to leave the ending roadway.",
  },
  {
    title: "School Zone",
     answer :
      "Drivers are in a school zone and must be alert to children and pedestrians. Drivers should reduce their speed.",
  },
  {
    title: "School Crossing",
     answer :
      "Drivers are approaching a school crossing and must be alert to children and pedestrians. Drivers should reduce their speed.",
  },
  {
    title: "Playground Area",
     answer :
      "Drivers are near a playground and should be extra alert to children on or near the roadway.",
  },
  {
    title: "Railroad Crossing",
     answer :
      "The roadway intersects with railroad tracks. Drivers must yield to all trains and proceed only when it is safe to do so.",
  },
  {
    title: "Railroad Crossing",
     answer :
      "The roadway intersects with railroad tracks. Drivers must yield to all trains and proceed only when it is safe to do so.",
  },
  {
    title: "Railroad Crossing",
     answer :
      "The roadway intersects with railroad tracks. Drivers must yield to all trains and proceed only when it is safe to do so.",
  },
  {
    title: "Railroad Crossing",
     answer :
      "The roadway intersects with railroad tracks. Drivers must yield to all trains and proceed only when it is safe to do so.",
  },
  {
    title: "Uneven Grade Crossing",
     answer :
      "The roadway intersects with railroad tracks on an uneven grade. Vehicles with low undercarriages may have difficulty crossing the tracks.",
  },
  {
    title: "Roadwork Ahead",
     answer :
      "A work zone is ahead on the roadway. Drivers should proceed with caution and follow all provided directions.",
  },
  {
    title: "Roadwork Ahead",
     answer :
      "Roadwork is present for the indicated distance. Drivers should proceed with caution and follow all provided directions.",
  },
  {
    title: "Shoulder Work",
     answer :
      "Maintenance is taking place on the shoulder of the road. Drivers should proceed with caution and follow all provided directions.",
  },
  {
    title: "Flagger Ahead",
     answer :
      "A flagger is directing traffic through a work zone. Drivers should proceed with caution and follow all provided directions.",
  },
  {
    title: "Workers Present",
     answer :
      "Workers are on or near the roadway. Drivers should use extra caution when driving in a work zone where workers are present.",
  },
  {
    title: "Lane Shift",
     answer :
      "Usual traffic lanes follow a redirected path in the indicated area. Drivers should travel within the shifted lanes.",
  },
  {
    title: "Road Closed Ahead",
     answer :
      "The road ahead is closed due to maintenance. Drivers should not travel on a closed roadway.",
  },
  {
    title: "Detour",
     answer :
      "The road is closed due to maintenance and drivers should follow the posted detour.",
  },
  {
    title: "U.S. Route",
     answer : "Drivers are on a United States numbered route.",
  },
  {
    title: "Interstate Route",
     answer : "Drivers are on a numbered interstate.",
  },
  {
    title: "Junction",
     answer :
      "Drivers are approaching an area where one route meets another.",
  },
  {
    title: "Food",
     answer :
      "The exit indicated on the service sign has food options available for drivers leaving the highway.",
  },
  {
    title: "Lodging",
     answer :
      "The exit indicated on the service sign has lodging options available for drivers leaving the highway.",
  },
  {
    title: "Fuel",
     answer :
      "The exit indicated on the service sign has fuel service options available for drivers leaving the highway. Diesel may also be available.",
  },
  {
    title: "Diesel",
     answer :
      "The exit indicated on the service sign has diesel fuel service options available for drivers leaving the highway.",
  },
  {
    title: "Camping",
     answer :
      "The exit indicated on the service sign has camping locations available for drivers leaving the highway.",
  },
  {
    title: "Telephone",
     answer :
      "The location indicated on the service sign has a telephone available for public use.",
  },
  {
    title: "Litter Barrel",
     answer :
      "The location indicated on the service sign has a litter barrel available for public use.",
  },
  {
    title: "Hospital",
     answer :
      "There is a hospital at the location indicated on the service sign.",
  },
  {
    title: "Rest Area",
     answer :
      "A rest area is located off the highway in the direction of the arrow.",
  },
  {
    title: "Emergency Notification",
     answer :
      "If there is an urgent safety issue at a railroad crossing, drivers should call the number on the service sign for assistance.",
  },
  {
    title: "Handicap-Accessible",
     answer :
      "The indicated location is designed to be handicap-accessible.",
  },
  {
    title: "Evacuation Route",
     answer :
      "Drivers are on a roadway that should be used during an evacuation due to a hurricane or other emergency.",
  },
  {
    title: "Bus Station",
     answer :
      "There is a bus station at the location indicated on the sign.",
  },
  {
    title: "Park",
     answer :
      "There is a park at the location indicated on the recreation sign.",
  },
  {
    title: "Playground",
     answer :
      "There is a playground at the location indicated on the recreation sign.",
  },
  {
    title: "Wildlife Viewing Area",
     answer :
      "The location indicated on the recreation sign has a wildlife viewing area available for drivers leaving the highway.",
  },
  {
    title: "Wildlife Viewing Area",
     answer :
      "The location indicated on the recreation sign has a wildlife viewing area available for drivers leaving the highway.",
  },
  {
    title: "State Park",
     answer :
      "There is a state park at the location indicated on the recreation sign.",
  },
  {
    title: "Boat Ramp",
     answer :
      "There is a boat ramp available at the location indicated on the recreation sign.",
  },
  {
    title: "Canoe Ramp",
     answer :
      "There is a canoe ramp available at the location indicated on the recreation sign.",
  },
  {
    title: "Historical Marker",
     answer :
      "There is an area of historical significance at the location indicated on the recreation sign.",
  },
  {
    title: "Winter Recreational Area",
     answer :
      "The location indicated on the recreation sign has a winter recreational area available for drivers leaving the highway.",
  },
  {
    title: "Ski Area",
     answer :
      "The location indicated on the recreation sign has a ski area available for drivers leaving the highway.",
  },
  {
    title: "Milepost",
     answer :
      "The number on a milepost indicates a location on the highway. Mileposts often correlate with exit numbers.",
  },
  {
    title: "Destination Sign",
     answer :
      "Distances to the listed locations are posted in miles on the right side of the sign.",
  },
  {
    title: "Guide Sign",
     answer :
      "Drivers are approaching upcoming exits and should merge into the necessary lanes.",
  },
  {
    title: "Guide Sign",
     answer :
      "Drivers can access the posted route by driving in the indicated lane.",
  },
  {
    title: "Exit",
     answer :
      "There is a highway exit in the direction of the arrow. Drivers who wish to leave the roadway may signal and merge onto the off-ramp.",
  },
  {
    title: "Trolley Station",
     answer :
      "There is a trolley station at the location indicated on the sign.",
  },
  {
    title: "Airport",
     answer : "There is an airport at the location indicated on the sign.",
  },
  {
    title: "Bike Route",
     answer :
      "There is a bike route in the direction of the arrow. Drivers should be alert to bicyclists.",
  },
  {
    title: "Hiking Trail",
     answer :
      "There is a hiking trail in the direction of the arrow. Drivers should be alert to pedestrians.",
  },
  {
    title: "Parking",
     answer : "A parking lot is available at the indicated location.",
  },
];

export default signData;
