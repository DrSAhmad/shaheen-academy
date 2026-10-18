/* Shaheen Academy — School track: Sindh Board. MERGES into shared 'school' track. */
(function(){
window.SHAHEEN_TRACKS = window.SHAHEEN_TRACKS || {};
window.SHAHEEN_TRACKS['school'] = window.SHAHEEN_TRACKS['school'] || {meta:{id:'school',title:'School',urdu:'اسکول',tagline:'Punjab Board · Classes 1–12',icon:'🏫'},courses:[]};
window.__saMergeCourse = window.__saMergeCourse || function(course){
  var cs = window.SHAHEEN_TRACKS['school'].courses;
  for (var i=0;i<cs.length;i++){
    if (cs[i].id===course.id){
      var have={}; cs[i].chapters.forEach(function(ch){have[ch.id]=1;});
      course.chapters.forEach(function(ch){ if(!have[ch.id]) cs[i].chapters.push(ch); });
      return;
    }
  }
  cs.push(course);
};
function CS(id,title,urdu){return {id:id,title:title,urdu:urdu||'',comingSoon:true,chapters:[],lessons:[],quiz:[]};}
window.__saMergeCourse({id:'sin-class9-physics', board:'sindh', title:'Physics', urdu:'طبیعیات', class:'Class 9', icon:'⚛️', desc:'Sindh Board Class 9 Physics — full syllabus with lessons and quizzes.', chapters:[
  {id:'sin-c9-phy-ch1', title:'Physical Quantities and Measurements', urdu:'طبیعی مقداریں اور پیمائش', comingSoon:false,
   lessons:[
     {id:'sin-c9-phy-ch1-l1', title:'What Is a Physical Quantity', html:'<h3>What Is a Physical Quantity</h3><p>A physical quantity is anything that can be measured, such as length, mass, time and temperature. Every measurement has two parts: a number and a unit, for example 5 metres or 30 seconds.</p><p>Physical quantities are divided into base quantities and derived quantities. Base quantities are independent, like length, mass and time, while derived quantities such as speed, area and force are built from base quantities.</p>'},
     {id:'sin-c9-phy-ch1-l2', title:'SI Units and Prefixes', html:'<h3>SI Units and Prefixes</h3><p>The International System of Units (SI) gives seven base units, including the metre (m) for length, kilogram (kg) for mass and second (s) for time. Using SI units everywhere keeps scientific work consistent across the world.</p><p>Prefixes make very large or very small numbers easy to write: kilo means 10³, milli means 10⁻³, micro means 10⁻⁶ and nano means 10⁻⁹. So 1 kilometre is 1000 metres and 1 millimetre is one-thousandth of a metre.</p>'},
     {id:'sin-c9-phy-ch1-l3', title:'Measuring Instruments and Errors', html:'<h3>Measuring Instruments and Errors</h3><p>A metre rule measures length, a vernier caliper measures small lengths precisely, a screw gauge measures tiny diameters, and a stopwatch measures time. The least count of an instrument is the smallest value it can measure.</p><p>No measurement is perfect. Errors can come from the instrument, the observer or the method. Significant figures show how precise a measurement is: for example, 2.50 cm is more precise than 2.5 cm because it shows the measurement was read to the millimetre.</p>'}
   ],
   quiz:[
     {q:'Which of the following is a base quantity in SI units?', options:['Length','Force','Speed','Area'], answer:0, explain:'Length is one of the seven SI base quantities; force, speed and area are derived quantities.'},
     {q:'The SI unit of mass is:', options:['gram','kilogram','pound','tonne'], answer:1, explain:'The kilogram (kg) is the SI base unit of mass; the gram is a smaller commonly used unit.'},
     {q:'One microsecond is equal to:', options:['10⁻³ s','10⁻⁶ s','10⁻⁹ s','10³ s'], answer:1, explain:'Micro means 10⁻⁶, so 1 microsecond = 10⁻⁶ seconds.'},
     {q:'The least count of a vernier caliper is usually:', options:['1 mm','0.1 mm','0.01 mm','1 cm'], answer:1, explain:'A standard vernier caliper has a least count of 0.1 mm (some precision models reach 0.02 mm).'},
     {q:'Which instrument is best for measuring the diameter of a thin wire?', options:['metre rule','vernier caliper','screw gauge','measuring cylinder'], answer:2, explain:'A screw gauge has a very small least count (0.01 mm) and is designed for tiny diameters like wire thickness.'},
     {q:'The number of significant figures in 0.00520 is:', options:['2','3','4','5'], answer:1, explain:'Leading zeros are not significant; 5, 2 and the trailing 0 are significant, giving 3 significant figures.'},
     {q:'Speed is an example of a:', options:['base quantity','derived quantity','fundamental constant','vector only'], answer:1, explain:'Speed is distance divided by time, so it is derived from the base quantities length and time.'},
     {q:'1 kilometre is equal to how many metres?', options:['100','1,000','10,000','100,000'], answer:1, explain:'Kilo means 10³, so 1 km = 1,000 m.'},
     {q:'Which prefix represents 10⁹?', options:['mega','giga','kilo','tera'], answer:1, explain:'Giga means 10⁹ (e.g. gigahertz); mega is 10⁶, kilo is 10³ and tera is 10¹².'},
     {q:'Zero error in a measuring instrument is an example of:', options:['random error','systematic error','gross mistake','no error'], answer:1, explain:'Zero error shifts every reading by the same amount, so it is a systematic error that can be corrected.'}
   ]},
  {id:'sin-c9-phy-ch2', title:'Kinematics', urdu:'حرکیات', comingSoon:false,
   lessons:[
     {id:'sin-c9-phy-ch2-l1', title:'Rest, Motion and Types of Motion', html:'<h3>Rest, Motion and Types of Motion</h3><p>A body is at rest if its position does not change with time, and in motion if its position changes with time. Motion can be described relative to a reference point called the origin.</p><p>There are three types of motion: translatory motion (a car moving along a road), rotatory motion (a spinning wheel) and vibratory motion (a swinging pendulum). Some motions combine these types.</p>'},
     {id:'sin-c9-phy-ch2-l2', title:'Distance, Displacement, Speed and Velocity', html:'<h3>Distance, Displacement, Speed and Velocity</h3><p>Distance is the total length of the path travelled and is a scalar, while displacement is the shortest straight-line distance from start to finish and is a vector. Speed is distance per unit time; velocity is displacement per unit time and has direction.</p><p>The SI unit of both speed and velocity is metre per second (m/s). A car going around a roundabout at constant speed still changes velocity because its direction keeps changing.</p>'},
     {id:'sin-c9-phy-ch2-l3', title:'Acceleration and Equations of Motion', html:'<h3>Acceleration and Equations of Motion</h3><p>Acceleration is the rate of change of velocity, a = (vf − vi)/t, measured in m/s². Positive acceleration means speeding up; negative acceleration (retardation) means slowing down.</p><p>Three equations describe uniformly accelerated motion: vf = vi + at, S = vit + ½at², and 2aS = vf² − vi². A body falling freely near the Earth accelerates at about 9.8 m/s².</p>'}
   ],
   quiz:[
     {q:'Which of the following is a vector quantity?', options:['Distance','Speed','Displacement','Time'], answer:2, explain:'Displacement has both magnitude and direction, so it is a vector; distance, speed and time are scalars.'},
     {q:'The SI unit of acceleration is:', options:['m/s','m/s²','m²/s','N'], answer:1, explain:'Acceleration is change in velocity per unit time, so its unit is m/s².'},
     {q:'A car travels 100 m in 20 s. Its average speed is:', options:['2 m/s','5 m/s','20 m/s','2000 m/s'], answer:1, explain:'Average speed = distance/time = 100/20 = 5 m/s.'},
     {q:'Which equation relates final velocity, initial velocity, acceleration and distance?', options:['vf = vi + at','S = vit + ½at²','2aS = vf² − vi²','v = S/t'], answer:2, explain:'The third equation of motion, 2aS = vf² − vi², connects velocity, acceleration and distance without time.'},
     {q:'A body moving with uniform velocity has:', options:['increasing acceleration','zero acceleration','decreasing velocity','changing speed'], answer:1, explain:'Uniform velocity means no change in velocity, so acceleration is zero.'},
     {q:'A ball dropped from rest falls with acceleration 10 m/s². Its velocity after 3 s is:', options:['10 m/s','20 m/s','30 m/s','3 m/s'], answer:2, explain:'vf = vi + at = 0 + 10×3 = 30 m/s.'},
     {q:'Negative acceleration is also called:', options:['speeding up','retardation','free fall','uniform motion'], answer:1, explain:'Negative acceleration means the velocity is decreasing, which is called retardation or deceleration.'},
     {q:'On a distance-time graph, a straight horizontal line means the body is:', options:['moving fast','at rest','accelerating','moving backwards'], answer:1, explain:'Distance is not changing with time, so the body is at rest.'},
     {q:'The slope of a velocity-time graph gives:', options:['distance','displacement','acceleration','speed'], answer:2, explain:'Slope = change in velocity / change in time = acceleration; the area under the graph gives displacement.'},
     {q:'If a body starts from rest and accelerates at 2 m/s², the distance covered in 4 s is:', options:['8 m','12 m','16 m','32 m'], answer:2, explain:'S = vit + ½at² = 0 + ½×2×16 = 16 m.'}
   ]},
  {id:'sin-c9-phy-ch3', title:'Dynamics', urdu:'ڈائنامکس', comingSoon:false,
   lessons:[
     {id:'sin-c9-phy-ch3-l1', title:'Force and Newton’s First Law', html:'<h3>Force and Newton’s First Law</h3><p>Force is a push or a pull that can change the state of motion of a body. Its SI unit is the newton (N). Forces can change speed, direction or shape of an object.</p><p>Newton’s first law says a body stays at rest or in uniform motion unless a net force acts on it. This property is called inertia: heavier objects have more inertia and are harder to move or stop.</p>'},
     {id:'sin-c9-phy-ch3-l2', title:'Newton’s Second Law and Momentum', html:'<h3>Newton’s Second Law and Momentum</h3><p>Newton’s second law states that the acceleration of a body is directly proportional to the net force and inversely proportional to its mass: F = ma. A 2 N force on a 1 kg mass produces 2 m/s² of acceleration.</p><p>Momentum is the product of mass and velocity, p = mv, with unit kg m/s. The second law can also be written as F = change in momentum / time, which explains why airbags reduce injury by increasing impact time.</p>'},
     {id:'sin-c9-phy-ch3-l3', title:'Newton’s Third Law and Friction', html:'<h3>Newton’s Third Law and Friction</h3><p>Newton’s third law says every action has an equal and opposite reaction: a rocket pushes exhaust gases down and the gases push the rocket up. The two forces act on different bodies, so they do not cancel.</p><p>Friction opposes motion between touching surfaces. It can be useful (walking, brakes) or a wasteful (engine wear). Friction depends on the nature of the surfaces and the pressing force, and rolling friction is smaller than sliding friction.</p>'}
   ],
   quiz:[
     {q:'The SI unit of force is:', options:['joule','newton','watt','pascal'], answer:1, explain:'Force is measured in newtons (N), named after Isaac Newton.'},
     {q:'A force of 10 N acts on a mass of 2 kg. The acceleration produced is:', options:['2 m/s²','5 m/s²','8 m/s²','20 m/s²'], answer:1, explain:'From F = ma, a = F/m = 10/2 = 5 m/s².'},
     {q:'Momentum is defined as:', options:['mass × acceleration','mass × velocity','force × time','mass ÷ velocity'], answer:1, explain:'Momentum p = mv, the product of mass and velocity.'},
     {q:'A 5 kg object moving at 4 m/s has momentum:', options:['9 kg m/s','20 kg m/s','1.25 kg m/s','0.8 kg m/s'], answer:1, explain:'p = mv = 5 × 4 = 20 kg m/s.'},
     {q:'Newton’s first law is also called the law of:', options:['action-reaction','inertia','gravitation','conservation'], answer:1, explain:'The first law describes inertia — the tendency of bodies to resist changes in their motion.'},
     {q:'According to Newton’s third law, action and reaction:', options:['act on the same body','act on different bodies','always cancel motion','are always vertical'], answer:1, explain:'Action and reaction forces act on different bodies, so they never cancel each other.'},
     {q:'Which has the greatest inertia?', options:['a bicycle','a car','a truck','a motorcycle'], answer:2, explain:'Inertia depends on mass; the truck has the largest mass, so it has the greatest inertia.'},
     {q:'Friction between a rolling ball and the ground is:', options:['sliding friction','rolling friction','static friction','fluid friction'], answer:1, explain:'A rolling ball experiences rolling friction, which is much smaller than sliding friction.'},
     {q:'A gun recoils when fired because of:', options:['Newton’s first law','Newton’s second law','Newton’s third law','law of gravitation'], answer:2, explain:'The bullet moves forward and the gun is pushed backward with equal and opposite momentum — the third law.'},
     {q:'If the net force on a body is zero, the body:', options:['must be at rest','moves with uniform velocity or stays at rest','must accelerate','loses mass'], answer:1, explain:'With zero net force there is no acceleration, so the body keeps its state: rest or uniform motion.'}
   ]},
  {id:'sin-c9-phy-ch4', title:'Turning Effects of Forces', urdu:'قوتوں کے گھماؤ اثرات', comingSoon:false,
   lessons:[
     {id:'sin-c9-phy-ch4-l1', title:'Torque and the Moment Arm', html:'<h3>Torque and the Moment Arm</h3><p>The turning effect of a force about a pivot is called torque or moment of a force. It equals force multiplied by the perpendicular distance from the pivot, τ = F × d.</p><p>A longer spanner opens a tight nut more easily because the moment arm is larger. The SI unit of torque is the newton-metre (N m). Opening a door is easiest when you push far from the hinges.</p>'},
     {id:'sin-c9-phy-ch4-l2', title:'Centre of Mass and Centre of Gravity', html:'<h3>Centre of Mass and Centre of Gravity</h3><p>The centre of mass is the point where the whole mass of a body can be considered concentrated. For a uniform rod it is at the middle; for a ring it lies at the empty centre.</p><p>The centre of gravity is the point where the weight of the body appears to act. A racing car has a low centre of gravity so it is less likely to topple on sharp turns.</p>'},
     {id:'sin-c9-phy-ch4-l3', title:'Equilibrium and Its States', html:'<h3>Equilibrium and Its States</h3><p>A body is in equilibrium when the net force on it is zero (first condition) and the net torque about any point is zero (second condition). A book resting on a table satisfies both.</p><p>Equilibrium has three states: stable (returns after a small push, like a cone on its base), unstable (topples, like a cone balanced on its tip) and neutral (stays in the new position, like a ball on a flat surface).</p>'}
   ],
   quiz:[
     {q:'Torque is calculated as:', options:['force + distance','force × perpendicular distance','force ÷ distance','mass × acceleration'], answer:1, explain:'Torque τ = F × d, where d is the perpendicular distance from the pivot.'},
     {q:'The SI unit of torque is:', options:['newton','joule','newton-metre','watt'], answer:2, explain:'Torque = force × distance, so its unit is the newton-metre (N m).'},
     {q:'A 20 N force is applied 0.5 m from a pivot. The torque is:', options:['10 N m','20 N m','40 N m','0.5 N m'], answer:0, explain:'τ = F × d = 20 × 0.5 = 10 N m.'},
     {q:'Why is a door handle placed far from the hinges?', options:['to look nice','to increase the moment arm','to reduce friction','to save material'], answer:1, explain:'A larger distance from the pivot gives a larger torque for the same push, so the door opens easily.'},
     {q:'The centre of mass of a uniform metre rod is at:', options:['the 0 cm mark','the 50 cm mark','the 100 cm mark','outside the rod'], answer:1, explain:'For a uniform rod the mass is spread evenly, so the centre of mass is at its midpoint, the 50 cm mark.'},
     {q:'A racing car is made with a low centre of gravity to:', options:['increase speed','improve stability','reduce weight','look sporty'], answer:1, explain:'A low centre of gravity makes toppling harder, giving the car better stability on turns.'},
     {q:'The first condition of equilibrium is that:', options:['net torque is zero','net force is zero','velocity is zero','mass is zero'], answer:1, explain:'First condition: the vector sum of all forces must be zero so there is no linear acceleration.'},
     {q:'A cone standing on its base is in:', options:['stable equilibrium','unstable equilibrium','neutral equilibrium','no equilibrium'], answer:0, explain:'On its broad base the cone returns to position after a small tilt, so it is in stable equilibrium.'},
     {q:'A ball rolling on a flat horizontal surface is in:', options:['stable equilibrium','unstable equilibrium','neutral equilibrium','dynamic equilibrium'], answer:2, explain:'The ball stays wherever it stops, which is the definition of neutral equilibrium.'},
     {q:'A tightrope walker holds a long pole to:', options:['increase weight','lower the centre of gravity','increase speed','reduce air resistance'], answer:1, explain:'The pole lowers the performer’s centre of gravity and increases stability on the rope.'}
   ]},
  {id:'sin-c9-phy-ch5', title:'Forces and Matter', urdu:'قوتیں اور مادّہ', comingSoon:false,
   lessons:[
     {id:'sin-c9-phy-ch5-l1', title:'Elasticity and Hooke’s Law', html:'<h3>Elasticity and Hooke’s Law</h3><p>Some materials return to their original shape when a stretching force is removed; this property is called elasticity. A spring is elastic as long as it is not stretched beyond its elastic limit.</p><p>Hooke’s law states that the extension of a spring is directly proportional to the applied force, F = kx, where k is the spring constant. Doubling the load doubles the extension, which is why spring balances work.</p>'},
     {id:'sin-c9-phy-ch5-l2', title:'Pressure in Solids and Fluids', html:'<h3>Pressure in Solids and Fluids</h3><p>Pressure is force per unit area, P = F/A, and its SI unit is the pascal (Pa). A sharp knife cuts well because the same force acts on a tiny area, creating huge pressure.</p><p>In a liquid, pressure increases with depth: P = ρgh. Dams are built thicker at the bottom because water pressure is greatest there. The atmosphere also exerts pressure, measured with a barometer.</p>'},
     {id:'sin-c9-phy-ch5-l3', title:'Pascal’s Law and Archimedes’ Principle', html:'<h3>Pascal’s Law and Archimedes’ Principle</h3><p>Pascal’s law says pressure applied to an enclosed fluid is transmitted equally in all directions. Hydraulic brakes and car lifts use this: a small force on a small piston creates a large force on a large piston.</p><p>Archimedes’ principle states that a body immersed in a fluid experiences an upthrust equal to the weight of the fluid it displaces. Ships float because the upthrust balances their weight; a body sinks when its weight exceeds the upthrust.</p>'}
   ],
   quiz:[
     {q:'Hooke’s law is written as:', options:['F = ma','F = kx','P = F/A','W = mg'], answer:1, explain:'Hooke’s law: applied force F equals spring constant k times extension x.'},
     {q:'The SI unit of pressure is:', options:['newton','pascal','joule','watt'], answer:1, explain:'Pressure = force/area, so its SI unit is the newton per square metre, called the pascal.'},
     {q:'A force of 100 N acts on an area of 2 m². The pressure is:', options:['50 Pa','200 Pa','102 Pa','98 Pa'], answer:0, explain:'P = F/A = 100/2 = 50 Pa.'},
     {q:'Why does a sharp knife cut better than a blunt one?', options:['it is heavier','smaller area gives greater pressure','it is longer','it is colder'], answer:1, explain:'The same force on a smaller edge area produces much greater pressure, so it cuts more easily.'},
     {q:'Pressure in a liquid increases with:', options:['volume only','depth','temperature only','colour'], answer:1, explain:'Liquid pressure P = ρgh grows with depth h, which is why dams are thicker at the base.'},
     {q:'Pascal’s law is applied in:', options:['electric bells','hydraulic brakes','thermometers','telescopes'], answer:1, explain:'Hydraulic brakes transmit pressure equally through the fluid to all wheels — a direct use of Pascal’s law.'},
     {q:'Archimedes’ principle states that upthrust equals:', options:['weight of the body','weight of displaced fluid','volume of the body','density of the body'], answer:1, explain:'The upthrust on an immersed body equals the weight of the fluid it displaces.'},
     {q:'A ship floats because:', options:['it is made of steel','upthrust balances its weight','it has engines','water is shallow'], answer:1, explain:'The hull displaces enough water that the upthrust equals the ship’s weight, so it stays afloat.'},
     {q:'Atmospheric pressure is measured with a:', options:['thermometer','barometer','ammeter','speedometer'], answer:1, explain:'A barometer measures the pressure of the atmosphere.'},
     {q:'An elastic material:', options:['breaks easily','returns to original shape after force is removed','flows like liquid','never stretches'], answer:1, explain:'Elasticity is the ability to regain the original shape once the deforming force is removed.'}
   ]},
  {id:'sin-c9-phy-ch6', title:'Gravitation', urdu:'کششِ ثقل', comingSoon:false,
   lessons:[
     {id:'sin-c9-phy-ch6-l1', title:'Newton’s Law of Gravitation', html:'<h3>Newton’s Law of Gravitation</h3><p>Every two masses in the universe attract each other with a force proportional to the product of their masses and inversely proportional to the square of the distance between them: F = Gm₁m₂/r².</p><p>G is the universal gravitational constant, 6.673 × 10⁻¹¹ N m²/kg². The force is always attractive and acts along the line joining the two masses, however far apart they are.</p>'},
     {id:'sin-c9-phy-ch6-l2', title:'Mass, Weight and the Value of g', html:'<h3>Mass, Weight and the Value of g</h3><p>Mass is the amount of matter in a body and is the same everywhere; weight is the gravitational force on the body, W = mg, and changes with location. Near Earth’s surface g is about 9.8 m/s².</p><p>On the Moon, g is about one-sixth of Earth’s, so an astronaut weighs less there but their mass is unchanged. Weight is measured with a spring balance; mass with a beam balance.</p>'},
     {id:'sin-c9-phy-ch6-l3', title:'Satellites and Orbits', html:'<h3>Satellites and Orbits</h3><p>A satellite stays in orbit because gravity provides the centripetal force needed for circular motion. The Moon is Earth’s natural satellite; communication satellites are artificial ones.</p><p>Geostationary satellites orbit at about 36,000 km above the equator and appear fixed in the sky, which makes them ideal for TV and weather signals. A satellite in a lower orbit must move faster to stay up.</p>'}
   ],
   quiz:[
     {q:'Newton’s law of gravitation: force is proportional to:', options:['sum of masses','product of masses','difference of masses','square of masses'], answer:1, explain:'F is directly proportional to the product m₁m₂ of the two masses.'},
     {q:'Gravitational force decreases with distance as:', options:['1/r','1/r²','1/r³','r²'], answer:1, explain:'It follows the inverse-square law: F ∝ 1/r².'},
     {q:'The value of the gravitational constant G is about:', options:['9.8','6.673 × 10⁻¹¹','1.6 × 10⁻¹⁹','3 × 10⁸'], answer:1, explain:'G = 6.673 × 10⁻¹¹ N m²/kg², measured by Cavendish.'},
     {q:'The weight of a 10 kg mass on Earth is about:', options:['10 N','98 N','1 N','1000 N'], answer:1, explain:'W = mg = 10 × 9.8 = 98 N.'},
     {q:'Which statement is correct?', options:['Mass changes on the Moon','Weight is the same everywhere','Mass is constant everywhere','Weight is measured in kg'], answer:2, explain:'Mass is an intrinsic property and does not change with location; weight does.'},
     {q:'A geostationary satellite appears fixed because:', options:['it does not move','its orbital period equals Earth’s rotation period','it is very heavy','it is close to Earth'], answer:1, explain:'It orbits once every 24 hours above the equator, matching Earth’s spin, so it stays over one spot.'},
     {q:'If the distance between two masses is doubled, the gravitational force becomes:', options:['double','half','one-fourth','four times'], answer:2, explain:'Inverse-square law: (1/2)² = 1/4, so the force drops to one-fourth.'},
     {q:'The Moon stays in orbit around Earth because:', options:['of air pressure','gravity provides centripetal force','of magnetism','it has engines'], answer:1, explain:'Earth’s gravity continuously pulls the Moon inward, providing the centripetal force for its orbit.'},
     {q:'Weight is measured with a:', options:['beam balance','spring balance','ruler','thermometer'], answer:1, explain:'A spring balance measures the pull of gravity (weight); a beam balance compares masses.'},
     {q:'The value of g is greatest:', options:['at the equator','at the poles','at high altitude','in a mine'], answer:1, explain:'Earth is slightly flattened, so the poles are closer to the centre and g is slightly larger there.'}
   ]},
  {id:'sin-c9-phy-ch7', title:'Properties of Matter', urdu:'مادّے کی خصوصیات', comingSoon:false,
   lessons:[
     {id:'sin-c9-phy-ch7-l1', title:'States of Matter and the Kinetic Model', html:'<h3>States of Matter and the Kinetic Model</h3><p>Matter exists as solid, liquid, gas and plasma. In the kinetic molecular model, particles are always in motion, and temperature is a measure of their average kinetic energy.</p><p>In solids particles vibrate in fixed positions; in liquids they slide past each other; in gases they move freely and fast. Heating a substance makes its particles move faster.</p>'},
     {id:'sin-c9-phy-ch7-l2', title:'Density and Pressure in Fluids', html:'<h3>Density and Pressure in Fluids</h3><p>Density is mass per unit volume, ρ = m/V, with SI unit kg/m³. A substance floats in a fluid if its density is less than the fluid’s density — ice floats on water for this reason.</p><p>The pressure at a depth h in a liquid is P = ρgh. Divers feel more pressure the deeper they go, and submarines are built strong to withstand it.</p>'},
     {id:'sin-c9-phy-ch7-l3', title:'Elasticity, Surface Tension and Viscosity', html:'<h3>Elasticity, Surface Tension and Viscosity</h3><p>Elastic materials return to shape after stretching (Hooke’s law region), while plastic materials stay deformed. Beyond the elastic limit, a spring is permanently stretched.</p><p>Surface tension makes water droplets round and lets small insects walk on water. Viscosity is a fluid’s resistance to flow: honey is more viscous than water, and viscosity decreases as temperature rises.</p>'}
   ],
   quiz:[
     {q:'Density is defined as:', options:['weight ÷ volume','mass ÷ volume','mass × volume','force × area'], answer:1, explain:'Density ρ = m/V, mass per unit volume.'},
     {q:'The SI unit of density is:', options:['g/cm³','kg/m³','N/m²','kg m/s'], answer:1, explain:'SI density is kilograms per cubic metre (kg/m³).'},
     {q:'Ice floats on water because:', options:['it is colder','its density is less than water’s','it is white','it is hard'], answer:1, explain:'A body floats when its average density is less than the fluid’s density.'},
     {q:'According to the kinetic model, temperature measures:', options:['particle size','average kinetic energy of particles','number of particles','particle colour'], answer:1, explain:'Higher temperature means faster-moving particles, i.e. greater average kinetic energy.'},
     {q:'A 2 kg object has volume 0.5 m³. Its density is:', options:['1 kg/m³','4 kg/m³','2.5 kg/m³','0.25 kg/m³'], answer:1, explain:'ρ = m/V = 2/0.5 = 4 kg/m³.'},
     {q:'Surface tension is caused by:', options:['gravity','cohesive forces between liquid molecules','air pressure','magnetism'], answer:1, explain:'Molecules at the surface pull inward on each other, creating tension like a stretched skin.'},
     {q:'Which liquid is most viscous?', options:['water','honey','alcohol','petrol'], answer:1, explain:'Honey flows the slowest, so it has the highest viscosity of the four.'},
     {q:'Pressure at 10 m depth in water (ρ = 1000 kg/m³, g = 10 m/s²) is about:', options:['1000 Pa','10,000 Pa','100,000 Pa','1,000,000 Pa'], answer:2, explain:'P = ρgh = 1000 × 10 × 10 = 100,000 Pa.'},
     {q:'In which state do particles only vibrate about fixed positions?', options:['gas','liquid','solid','plasma'], answer:2, explain:'Solid particles are locked in a lattice and can only vibrate.'},
     {q:'Viscosity of a liquid generally ____ with rising temperature.', options:['increases','decreases','stays the same','becomes zero'], answer:1, explain:'Heating gives molecules more energy to slide past each other, so viscosity falls.'}
   ]},
  {id:'sin-c9-phy-ch8', title:'Energy Sources and Transfer of Energy', urdu:'توانائی کے ذرائع اور منتقلی', comingSoon:false,
   lessons:[
     {id:'sin-c9-phy-ch8-l1', title:'Work, Energy and Power', html:'<h3>Work, Energy and Power</h3><p>Work is done when a force moves a body through a distance: W = Fd, measured in joules (J). Pushing a wall without moving it does no work in the physics sense.</p><p>Energy is the ability to do work. Kinetic energy is energy of motion, KE = ½mv², and potential energy is stored energy, e.g. gravitational PE = mgh. Power is the rate of doing work, P = W/t, measured in watts.</p>'},
     {id:'sin-c9-phy-ch8-l2', title:'Sources of Energy', html:'<h3>Sources of Energy</h3><p>Non-renewable sources like coal, oil and natural gas will run out and pollute the air when burned. Pakistan still gets much of its electricity from such fuels.</p><p>Renewable sources — solar, wind, hydro, geothermal and biomass — are replenished by nature. Solar panels and wind turbines produce electricity without smoke, making them cleaner choices for the future.</p>'},
     {id:'sin-c9-phy-ch8-l3', title:'Energy Transfer and Efficiency', html:'<h3>Energy Transfer and Efficiency</h3><p>Energy changes from one form to another: a bulb turns electrical energy into light and heat; a car engine turns chemical energy into motion. The total energy always stays the same — this is the law of conservation of energy.</p><p>No machine is 100% efficient because some energy is always wasted as heat and sound. Efficiency = (useful output energy / total input energy) × 100%. Reducing friction with lubrication improves efficiency.</p>'}
   ],
   quiz:[
     {q:'Work is defined as:', options:['force × time','force × distance','mass × velocity','energy ÷ time'], answer:1, explain:'Work W = Fd: force multiplied by the distance moved in the force’s direction.'},
     {q:'The SI unit of energy is:', options:['watt','joule','newton','pascal'], answer:1, explain:'Energy and work are both measured in joules (J).'},
     {q:'Kinetic energy of a 2 kg mass moving at 3 m/s is:', options:['6 J','9 J','12 J','18 J'], answer:1, explain:'KE = ½mv² = ½ × 2 × 9 = 9 J.'},
     {q:'A 5 kg object lifted 2 m gains potential energy of about (g = 10 m/s²):', options:['10 J','50 J','100 J','25 J'], answer:2, explain:'PE = mgh = 5 × 10 × 2 = 100 J.'},
     {q:'Power is:', options:['energy × time','rate of doing work','force × velocity only','work × distance'], answer:1, explain:'Power P = W/t, the rate at which work is done or energy transferred.'},
     {q:'Which of these is a renewable energy source?', options:['coal','natural gas','solar energy','petrol'], answer:2, explain:'Solar energy is continuously replenished by the Sun; coal, gas and petrol are finite fossil fuels.'},
     {q:'A machine’s efficiency is 80%. This means:', options:['80% of input energy becomes useful output','it runs 80 hours','it wastes no energy','it uses 80 joules'], answer:0, explain:'Efficiency = useful output ÷ total input; 20% is lost, usually as heat.'},
     {q:'A bulb converts electrical energy mainly into:', options:['light and heat','sound only','chemical energy','nuclear energy'], answer:0, explain:'A filament bulb gives light, but most of its energy leaves as waste heat.'},
     {q:'The law of conservation of energy states that energy:', options:['can be created','can be destroyed','can only change form, never created or destroyed','always increases'], answer:2, explain:'Energy is conserved: it transforms from one form to another but the total stays constant.'},
     {q:'Which device reduces energy loss due to friction?', options:['lubricant','heater','brake','fuse'], answer:0, explain:'Lubricants reduce friction, so less energy is wasted as heat.'}
   ]},
  {id:'sin-c9-phy-ch9', title:'Thermal Properties of Matter', urdu:'مادّے کی حرارتی خصوصیات', comingSoon:false,
   lessons:[
     {id:'sin-c9-phy-ch9-l1', title:'Heat and Temperature', html:'<h3>Heat and Temperature</h3><p>Temperature measures how hot or cold a body is; heat is the thermal energy that flows from a hotter body to a colder one. Two bodies at the same temperature are in thermal equilibrium.</p><p>Temperature is measured in kelvin (K) in SI, though Celsius (°C) is common in daily life: 0°C = 273 K. A thermometer works because liquids like mercury expand when heated.</p>'},
     {id:'sin-c9-phy-ch9-l2', title:'Specific Heat Capacity and Latent Heat', html:'<h3>Specific Heat Capacity and Latent Heat</h3><p>Different materials need different amounts of heat to warm up. Specific heat capacity c is the heat needed to raise 1 kg of a substance by 1 K: Q = mcΔT. Water’s high value (4200 J/kg K) keeps coastal climates mild.</p><p>When ice melts or water boils, heat is absorbed without a temperature change; this hidden heat is called latent heat. That is why steam at 100°C burns worse than boiling water.</p>'},
     {id:'sin-c9-phy-ch9-l3', title:'Thermal Expansion and Transfer of Heat', html:'<h3>Thermal Expansion and Transfer of Heat</h3><p>Most solids, liquids and gases expand when heated. Railway tracks have small gaps so they do not buckle in summer, and the linear expansion follows ΔL = αLΔT.</p><p>Heat travels by conduction (solids, e.g. a metal spoon), convection (fluids, e.g. warm air rising) and radiation (no medium needed, e.g. the Sun’s rays). Thermos flasks use a vacuum to block all three.</p>'}
   ],
   quiz:[
     {q:'Heat flows from:', options:['cold body to hot body','hot body to cold body','both directions equally','nowhere'], answer:1, explain:'Thermal energy always flows from higher temperature to lower temperature.'},
     {q:'0°C on the Kelvin scale is:', options:['0 K','273 K','100 K','373 K'], answer:1, explain:'Kelvin = Celsius + 273, so 0°C = 273 K.'},
     {q:'The heat required to raise 2 kg of water by 5 K (c = 4200 J/kg K) is:', options:['21,000 J','42,000 J','4,200 J','8,400 J'], answer:1, explain:'Q = mcΔT = 2 × 4200 × 5 = 42,000 J.'},
     {q:'Latent heat is the heat absorbed:', options:['with temperature rise','without temperature change','only by gases','only at night'], answer:1, explain:'During melting or boiling, absorbed heat changes state, not temperature.'},
     {q:'Railway tracks have gaps between rails to allow for:', options:['contraction only','thermal expansion','rusting','noise'], answer:1, explain:'Steel expands in summer heat; gaps prevent the tracks from buckling.'},
     {q:'Heat from the Sun reaches Earth by:', options:['conduction','convection','radiation','evaporation'], answer:2, explain:'Radiation needs no medium, so the Sun’s energy crosses empty space this way.'},
     {q:'A metal spoon in hot tea gets hot by:', options:['conduction','convection','radiation','insulation'], answer:0, explain:'Heat travels through the solid metal by conduction.'},
     {q:'Warm air rising in a room is an example of:', options:['conduction','convection','radiation','reflection'], answer:1, explain:'Convection is heat transfer by the movement of fluid particles.'},
     {q:'Water’s unusually high specific heat capacity means:', options:['it boils quickly','it resists temperature change','it freezes fast','it is light'], answer:1, explain:'A high c means lots of heat is needed to change water’s temperature, moderating climates.'},
     {q:'A thermos flask keeps drinks hot mainly because its vacuum layer stops:', options:['only conduction','conduction and convection','all heat transfer completely','only radiation'], answer:1, explain:'The vacuum blocks conduction and convection; the shiny walls also reduce radiation.'}
   ]}
]});
window.__saMergeCourse({id:'sin-class9-chemistry', board:'sindh', title:'Chemistry', urdu:'کیمسٹری', class:'Class 9', icon:'🧪', desc:'Sindh Board Class 9 Chemistry — full syllabus with lessons and quizzes.', chapters:[
  {id:'sin-c9-che-ch1', title:'Fundamentals of Chemistry', urdu:'کیمسٹری کے بنیادی اصول', comingSoon:false,
   lessons:[
     {id:'sin-c9-che-ch1-l1', title:'What Is Chemistry', html:'<h3>What Is Chemistry</h3><p>Chemistry is the study of matter: what it is made of, its properties and the changes it undergoes. Muslim scientists like Jabir ibn Hayyan laid the foundations of experimental chemistry centuries ago.</p><p>Chemistry has branches such as organic, inorganic and physical chemistry. Its knowledge is used in medicines, fertilizers, plastics and fuels that shape modern life.</p>'},
     {id:'sin-c9-che-ch1-l2', title:'Matter, Elements and Compounds', html:'<h3>Matter, Elements and Compounds</h3><p>An element is a pure substance of one kind of atom, like oxygen or iron. A compound is formed when elements combine chemically in fixed ratios, like water (H₂O). A mixture, such as air, can be separated by physical methods.</p><p>Atoms are the smallest units of elements, molecules are groups of atoms bonded together, and ions are atoms with an electric charge. Chemical symbols like Na for sodium come from Latin names.</p>'},
     {id:'sin-c9-che-ch1-l3', title:'Chemical Equations and the Mole', html:'<h3>Chemical Equations and the Mole</h3><p>A chemical equation shows reactants changing into products, and it must be balanced so atoms are conserved: 2H₂ + O₂ → 2H₂O. Balancing keeps the same number of each atom on both sides.</p><p>The mole is chemistry’s counting unit: one mole contains 6.022 × 10²³ particles (Avogadro’s number). So 18 g of water is one mole of water molecules, making mass calculations simple.</p>'}
   ],
   quiz:[
     {q:'Chemistry is the study of:', options:['living things only','matter and its changes','stars and planets','numbers'], answer:1, explain:'Chemistry studies matter, its composition, properties and transformations.'},
     {q:'Jabir ibn Hayyan is known as the father of:', options:['physics','chemistry','biology','astronomy'], answer:1, explain:'Jabir ibn Hayyan pioneered experimental methods in chemistry.'},
     {q:'Water (H₂O) is an example of a:', options:['element','compound','mixture','solution'], answer:1, explain:'Water is a compound of hydrogen and oxygen in a fixed 2:1 ratio.'},
     {q:'Which of these is a mixture?', options:['oxygen','table salt','air','distilled water'], answer:2, explain:'Air is a mixture of gases that can be separated physically; the others are pure substances.'},
     {q:'One mole of any substance contains:', options:['6.022 × 10²³ particles','100 particles','12 particles','6.022 × 10²⁶ particles'], answer:0, explain:'Avogadro’s number, 6.022 × 10²³, defines one mole.'},
     {q:'The balanced equation 2H₂ + O₂ → 2H₂O shows:', options:['atoms are created','atoms are conserved','mass is lost','energy is lost'], answer:1, explain:'Balancing ensures the same number of each atom on both sides — atoms are conserved.'},
     {q:'The chemical symbol for sodium is:', options:['So','S','Na','Sd'], answer:2, explain:'Na comes from sodium’s Latin name, natrium.'},
     {q:'An ion is:', options:['a neutral atom','a charged atom or molecule','a molecule of gas','a mixture'], answer:1, explain:'Ions carry positive or negative charge from gained or lost electrons.'},
     {q:'The mass of one mole of water (H₂O) is about:', options:['18 g','16 g','2 g','36 g'], answer:0, explain:'H₂O = 2(1) + 16 = 18, so one mole weighs 18 g.'},
     {q:'Which branch of chemistry studies carbon compounds?', options:['inorganic','organic','physical','analytical'], answer:1, explain:'Organic chemistry is the study of carbon-containing compounds.'}
   ]},
  {id:'sin-c9-che-ch2', title:'Atomic Structure', urdu:'ایٹم کی ساخت', comingSoon:false,
   lessons:[
     {id:'sin-c9-che-ch2-l1', title:'Subatomic Particles', html:'<h3>Subatomic Particles</h3><p>Atoms are made of three subatomic particles: protons (positive, in the nucleus), neutrons (neutral, in the nucleus) and electrons (negative, orbiting the nucleus). Protons and neutrons each weigh about 1 atomic mass unit.</p><p>The atomic number is the number of protons and defines the element; the mass number is protons plus neutrons. Isotopes are atoms of the same element with different neutron counts, like carbon-12 and carbon-14.</p>'},
     {id:'sin-c9-che-ch2-l2', title:'Rutherford and Bohr Models', html:'<h3>Rutherford and Bohr Models</h3><p>Rutherford’s gold-foil experiment showed the atom is mostly empty space with a tiny dense positive nucleus, because most alpha particles passed straight through the foil.</p><p>Bohr proposed that electrons revolve in fixed energy shells (K, L, M, N) around the nucleus. Electrons in inner shells have less energy; jumping between shells absorbs or releases energy as light.</p>'},
     {id:'sin-c9-che-ch2-l3', title:'Electronic Configuration', html:'<h3>Electronic Configuration</h3><p>Electrons fill shells in order: K holds 2, L holds 8, M holds 8 (in the simple model). Sodium (atomic number 11) is 2, 8, 1 — its single outer electron makes it very reactive.</p><p>Valence electrons in the outermost shell decide an element’s chemical behaviour. Elements with full outer shells, like neon (2, 8), are stable and unreactive.</p>'}
   ],
   quiz:[
     {q:'The nucleus of an atom contains:', options:['protons and electrons','protons and neutrons','electrons and neutrons','only electrons'], answer:1, explain:'Protons and neutrons sit in the nucleus; electrons orbit outside.'},
     {q:'The atomic number of an element equals the number of:', options:['neutrons','protons','nucleons','shells'], answer:1, explain:'Atomic number = number of protons, which identifies the element.'},
     {q:'Isotopes of an element differ in the number of:', options:['protons','electrons','neutrons','shells'], answer:2, explain:'Isotopes have the same protons but different neutrons, e.g. carbon-12 and carbon-14.'},
     {q:'Rutherford’s experiment proved that:', options:['atoms are solid spheres','the atom has a small dense nucleus','electrons are in shells','neutrons exist'], answer:1, explain:'Most alpha particles passed through gold foil, showing atoms are mostly empty space with a tiny nucleus.'},
     {q:'In Bohr’s model, the first shell (K) can hold:', options:['8 electrons','2 electrons','18 electrons','1 electron'], answer:1, explain:'K shell capacity is 2 electrons; L holds 8.'},
     {q:'The electronic configuration of sodium (atomic no. 11) is:', options:['2, 8','2, 8, 1','2, 7, 2','1, 8, 2'], answer:1, explain:'11 electrons fill as 2 in K, 8 in L and 1 in M.'},
     {q:'An element with electronic configuration 2, 8 is:', options:['very reactive','stable and unreactive','a metal','radioactive'], answer:1, explain:'A full outer shell (like neon) makes the atom stable and unreactive.'},
     {q:'Electrons were discovered by:', options:['Rutherford','J.J. Thomson','Bohr','Chadwick'], answer:1, explain:'J.J. Thomson discovered the electron using cathode rays.'},
     {q:'The mass number of an atom is:', options:['protons + electrons','protons + neutrons','neutrons − protons','electrons + neutrons'], answer:1, explain:'Mass number = total nucleons = protons + neutrons.'},
     {q:'Which particle has no electric charge?', options:['proton','electron','neutron','alpha particle'], answer:2, explain:'The neutron is electrically neutral; it was discovered by Chadwick.'}
   ]},
  {id:'sin-c9-che-ch3', title:'Periodic Table and Periodicity of Properties', urdu:'دوری جدول اور خصوصیات کی دوریّت', comingSoon:false,
   lessons:[
     {id:'sin-c9-che-ch3-l1', title:'Early Attempts at Classification', html:'<h3>Early Attempts at Classification</h3><p>Dobereiner grouped similar elements in triads, and Newlands arranged them in octaves, noticing every eighth element behaved alike. Both ideas were steps toward the modern table.</p><p>Mendeleev arranged elements by atomic mass and left gaps for undiscovered elements, even predicting their properties. Moseley later showed atomic number, not mass, is the true basis of periodicity.</p>'},
     {id:'sin-c9-che-ch3-l2', title:'The Modern Periodic Table', html:'<h3>The Modern Periodic Table</h3><p>The modern periodic law states that properties of elements are a periodic function of their atomic numbers. Vertical columns are groups and horizontal rows are periods.</p><p>There are 7 periods and 8 main groups (plus transition elements). Elements in the same group, like lithium and sodium, have similar properties because they have the same number of valence electrons.</p>'},
     {id:'sin-c9-che-ch3-l3', title:'Periodic Trends', html:'<h3>Periodic Trends</h3><p>Atomic size decreases across a period (more protons pull electrons in) and increases down a group (new shells are added). Ionization energy — the energy to remove an electron — increases across a period and decreases down a group.</p><p>Electronegativity, the pull an atom exerts on shared electrons, also increases across a period and decreases down a group. Fluorine is the most electronegative element, which explains its extreme reactivity.</p>'}
   ],
   quiz:[
     {q:'The modern periodic law is based on:', options:['atomic mass','atomic number','density','melting point'], answer:1, explain:'Moseley showed properties repeat periodically with atomic number.'},
     {q:'Vertical columns in the periodic table are called:', options:['periods','groups','series','rows'], answer:1, explain:'Groups run vertically; periods run horizontally.'},
     {q:'How many periods are in the modern periodic table?', options:['8','7','10','18'], answer:1, explain:'There are 7 horizontal periods in the modern table.'},
     {q:'Elements in the same group have similar properties because they have:', options:['same atomic mass','same number of valence electrons','same density','same size'], answer:1, explain:'The same outer-shell electron count gives similar chemical behaviour.'},
     {q:'Atomic size across a period (left to right):', options:['increases','decreases','stays the same','doubles'], answer:1, explain:'Greater nuclear charge pulls the electron shells inward, shrinking the atom.'},
     {q:'The most electronegative element is:', options:['oxygen','chlorine','fluorine','sodium'], answer:2, explain:'Fluorine attracts shared electrons more strongly than any other element.'},
     {q:'Mendeleev arranged elements in order of:', options:['atomic number','atomic mass','reactivity','density'], answer:1, explain:'Mendeleev used increasing atomic mass and left gaps for missing elements.'},
     {q:'Ionization energy down a group:', options:['increases','decreases','stays constant','becomes zero'], answer:1, explain:'Outer electrons are farther from the nucleus and easier to remove down a group.'},
     {q:'Dobereiner’s classification was based on:', options:['octaves','triads','periods','groups'], answer:1, explain:'Dobereiner grouped chemically similar elements into sets of three called triads.'},
     {q:'Which pair is in the same group?', options:['Na and Mg','Li and Na','C and N','O and Cl'], answer:1, explain:'Lithium and sodium are both group 1 alkali metals with one valence electron.'}
   ]},
  {id:'sin-c9-che-ch4', title:'Chemical Bonding', urdu:'کیمیائی بانڈنگ', comingSoon:false,
   lessons:[
     {id:'sin-c9-che-ch4-l1', title:'Why Atoms Bond', html:'<h3>Why Atoms Bond</h3><p>Atoms bond to achieve a stable electronic configuration, usually eight electrons in the outer shell — the octet rule. Sodium gives away one electron and chlorine accepts one, both becoming stable.</p><p>Bonding lowers the energy of the system, which is why bonded atoms are more stable than separate atoms. The type of bond depends on how electrons are shared or transferred.</p>'},
     {id:'sin-c9-che-ch4-l2', title:'Ionic and Covalent Bonds', html:'<h3>Ionic and Covalent Bonds</h3><p>An ionic bond forms when electrons are transferred from a metal to a non-metal, e.g. NaCl. The resulting ions attract each other; ionic compounds have high melting points and conduct electricity when molten.</p><p>A covalent bond forms when atoms share electrons, e.g. H₂ or CH₄. Double bonds share two pairs and triple bonds three pairs. A coordinate (dative) bond is a covalent bond where one atom donates both shared electrons, as in NH₄⁺.</p>'},
     {id:'sin-c9-che-ch4-l3', title:'Properties of Bonded Substances', html:'<h3>Properties of Bonded Substances</h3><p>Ionic compounds are hard, brittle, high-melting solids that conduct electricity when molten or dissolved but not as solids. Table salt is a classic example.</p><p>Covalent compounds usually have low melting and boiling points and do not conduct electricity. Metallic bonding — a sea of free electrons — explains why metals conduct heat and electricity and can be hammered into sheets.</p>'}
   ],
   quiz:[
     {q:'The octet rule states atoms tend to have:', options:['2 electrons total','8 electrons in the outer shell','8 protons','no charge'], answer:1, explain:'A full outer shell of eight electrons gives stability (except small atoms like He).'},
     {q:'An ionic bond is formed by:', options:['sharing electrons','transfer of electrons','overlapping orbitals','hydrogen bonding'], answer:1, explain:'Ionic bonds result from complete electron transfer, e.g. Na to Cl.'},
     {q:'In methane (CH₄), the bonding is:', options:['ionic','single covalent','double covalent','metallic'], answer:1, explain:'Carbon shares one electron pair with each hydrogen — four single covalent bonds.'},
     {q:'A coordinate bond differs because:', options:['electrons are transferred','one atom donates both shared electrons','three pairs are shared','no electrons are involved'], answer:1, explain:'In a dative/coordinate bond like NH₄⁺, one atom supplies both electrons of the shared pair.'},
     {q:'Ionic compounds conduct electricity when:', options:['solid','molten or dissolved','frozen','powdered dry'], answer:1, explain:'In molten or dissolved state the ions are free to move and carry current.'},
     {q:'How many electron pairs are shared in a triple bond?', options:['1','2','3','4'], answer:2, explain:'A triple bond, as in N₂, shares three pairs of electrons.'},
     {q:'Metals conduct electricity because of:', options:['ionic bonds','free mobile electrons','high density','shiny surface'], answer:1, explain:'The sea of delocalised electrons in metallic bonding carries charge freely.'},
     {q:'Which compound has an ionic bond?', options:['H₂O','NaCl','O₂','CH₄'], answer:1, explain:'Sodium chloride forms by electron transfer from Na to Cl — a classic ionic compound.'},
     {q:'Covalent compounds generally have:', options:['high melting points','low melting points','electrical conductivity','magnetic properties'], answer:1, explain:'Weak forces between covalent molecules mean they melt and boil at low temperatures.'},
     {q:'Oxygen gas (O₂) contains a:', options:['single bond','double bond','triple bond','ionic bond'], answer:1, explain:'The two oxygen atoms share two pairs of electrons — a double bond.'}
   ]},
  {id:'sin-c9-che-ch5', title:'Physical States of Matter', urdu:'مادّے کی طبعی حالتیں', comingSoon:false,
   lessons:[
     {id:'sin-c9-che-ch5-l1', title:'Kinetic Molecular Theory', html:'<h3>Kinetic Molecular Theory</h3><p>Matter is made of tiny particles in constant motion, with spaces between them and forces of attraction holding them. Gas particles move fastest and have the weakest attractions.</p><p>The theory explains behaviour: heating increases particle motion, cooling slows it, and compression forces gas particles closer together. Diffusion — like perfume spreading in a room — happens because particles move randomly.</p>'},
     {id:'sin-c9-che-ch5-l2', title:'Gases and Gas Laws', html:'<h3>Gases and Gas Laws</h3><p>Boyle’s law says that at constant temperature, pressure × volume is constant (P₁V₁ = P₂V₂): squeezing a gas raises its pressure. Charles’s law says volume is proportional to absolute temperature at constant pressure.</p><p>Gases have no fixed shape or volume, expand to fill containers, and are easily compressed. The fourth state, plasma, is ionised gas found in stars and lightning.</p>'},
     {id:'sin-c9-che-ch5-l3', title:'Liquids and Solids', html:'<h3>Liquids and Solids</h3><p>Liquids have a fixed volume but take the shape of their container; their particles slide past each other. Evaporation happens at the surface at all temperatures, while boiling happens throughout the liquid at a fixed temperature.</p><p>Solids have fixed shape and volume because particles vibrate in fixed positions. Crystalline solids like salt have ordered particles; amorphous solids like glass do not.</p>'}
   ],
   quiz:[
     {q:'Boyle’s law states that at constant temperature:', options:['P × V = constant','V ÷ T = constant','P ÷ V = constant','P + V = constant'], answer:0, explain:'Boyle’s law: pressure and volume are inversely proportional, so their product is constant.'},
     {q:'Charles’s law relates:', options:['pressure and volume','volume and temperature','pressure and temperature','mass and volume'], answer:1, explain:'Charles’s law: at constant pressure, volume is directly proportional to absolute temperature.'},
     {q:'Diffusion is fastest in:', options:['solids','liquids','gases','plasma only'], answer:2, explain:'Gas particles move fastest with weakest attractions, so gases diffuse quickest.'},
     {q:'Evaporation occurs:', options:['only at boiling point','at the surface at all temperatures','only in closed containers','only for water'], answer:1, explain:'Surface molecules can escape at any temperature; boiling is the rapid bulk change at a fixed temperature.'},
     {q:'Plasma is:', options:['frozen gas','ionised gas','compressed liquid','solidified vapour'], answer:1, explain:'Plasma consists of free ions and electrons — the state of stars and lightning.'},
     {q:'A gas is compressed to half its volume at constant temperature. Its pressure:', options:['halves','doubles','stays the same','becomes zero'], answer:1, explain:'From Boyle’s law, halving volume doubles pressure.'},
     {q:'Particles in a solid:', options:['move freely','vibrate about fixed positions','slide past each other','do not exist'], answer:1, explain:'Strong attractions lock solid particles in place; they only vibrate.'},
     {q:'Which is an amorphous solid?', options:['table salt','diamond','glass','sugar'], answer:2, explain:'Glass lacks an ordered crystal lattice, so it is amorphous.'},
     {q:'Liquids have:', options:['fixed shape and volume','fixed volume, no fixed shape','no fixed volume','no mass'], answer:1, explain:'Liquid particles flow, so liquids take the container’s shape but keep their volume.'},
     {q:'Squeezing a balloon decreases its volume and:', options:['decreases pressure','increases pressure','changes temperature only','creates vacuum'], answer:1, explain:'Less volume at the same temperature means more particle collisions — higher pressure.'}
   ]},
  {id:'sin-c9-che-ch6', title:'Solutions', urdu:'محلول', comingSoon:false,
   lessons:[
     {id:'sin-c9-che-ch6-l1', title:'What Is a Solution', html:'<h3>What Is a Solution</h3><p>A solution is a homogeneous mixture of a solute dissolved in a solvent. In salt water, salt is the solute and water is the solvent; water is called the universal solvent.</p><p>A saturated solution holds the maximum dissolved solute at a given temperature; adding more leaves undissolved solid. Heating usually lets more solute dissolve.</p>'},
     {id:'sin-c9-che-ch6-l2', title:'Concentration of Solutions', html:'<h3>Concentration of Solutions</h3><p>Concentration can be given as percentage by mass or volume. Molarity is moles of solute per litre of solution: M = n/V. A 1 M solution has one mole of solute in each litre.</p><p>Dilute solutions have little solute, concentrated ones have a lot. Adding solvent dilutes a solution; evaporating solvent concentrates it.</p>'},
     {id:'sin-c9-che-ch6-l3', title:'Solubility and Effects', html:'<h3>Solubility and Effects</h3><p>Solubility is the maximum mass of solute that dissolves in 100 g of solvent at a given temperature. Most solids become more soluble when heated, but gases become less soluble.</p><p>This is why warm fizzy drinks go flat faster — CO₂ escapes as temperature rises. Stirring and crushing speed up dissolving by increasing contact between solute and solvent.</p>'}
   ],
   quiz:[
     {q:'In a sugar solution, the solvent is:', options:['sugar','water','air','salt'], answer:1, explain:'The solvent is the dissolving medium — water; sugar is the solute.'},
     {q:'A saturated solution:', options:['has no solute','holds maximum dissolved solute','is always hot','contains two solvents'], answer:1, explain:'At saturation no more solute can dissolve at that temperature.'},
     {q:'Molarity is defined as:', options:['moles per kg of solvent','moles per litre of solution','grams per litre','litres per mole'], answer:1, explain:'Molarity M = moles of solute ÷ volume of solution in litres.'},
     {q:'A 2 M NaCl solution contains:', options:['2 g per litre','2 moles per litre','2 litres per mole','2 kg per litre'], answer:1, explain:'2 M means 2 moles of solute in every litre of solution.'},
     {q:'Adding more solvent to a solution:', options:['concentrates it','dilutes it','precipitates solute','heats it'], answer:1, explain:'More solvent with the same solute lowers the concentration — dilution.'},
     {q:'Solubility of most solid solutes ____ with temperature.', options:['decreases','increases','stays same','becomes zero'], answer:1, explain:'Heating gives particles energy to break apart, so most solids dissolve better in hot solvent.'},
     {q:'Warm fizzy drinks go flat because:', options:['sugar settles','CO₂ is less soluble when warm','sugar dissolves','the bottle shrinks'], answer:1, explain:'Gases are less soluble at higher temperatures, so CO₂ escapes.'},
     {q:'Crushing a solute speeds dissolving by:', options:['cooling it','increasing surface area','adding pressure','changing colour'], answer:1, explain:'Smaller pieces expose more surface to the solvent, so dissolving is faster.'},
     {q:'Water is called the universal solvent because:', options:['it is free','it dissolves many substances','it never freezes','it is pure'], answer:1, explain:'Water’s polarity lets it dissolve a very wide range of substances.'},
     {q:'A solution with very little solute is described as:', options:['saturated','dilute','supersaturated','concentrated'], answer:1, explain:'Dilute means low concentration; concentrated means high.'}
   ]},
  {id:'sin-c9-che-ch7', title:'Electrochemistry', urdu:'الیکٹرو کیمسٹری', comingSoon:false,
   lessons:[
     {id:'sin-c9-che-ch7-l1', title:'Oxidation and Reduction', html:'<h3>Oxidation and Reduction</h3><p>Oxidation is the loss of electrons (or gain of oxygen), and reduction is the gain of electrons (or loss of oxygen). The two always happen together in redox reactions.</p><p>Remember OIL RIG: Oxidation Is Loss, Reduction Is Gain. An oxidising agent causes oxidation by taking electrons; a reducing agent causes reduction by giving them.</p>'},
     {id:'sin-c9-che-ch7-l2', title:'Electrochemical Cells', html:'<h3>Electrochemical Cells</h3><p>A Daniel cell has a zinc electrode in zinc sulphate and a copper electrode in copper sulphate, joined by a salt bridge. Zinc is oxidised, copper ions are reduced, and electrons flow from zinc to copper.</p><p>Batteries and dry cells convert chemical energy into electrical energy through such redox reactions. The electrode where oxidation occurs is the anode; reduction happens at the cathode.</p>'},
     {id:'sin-c9-che-ch7-l3', title:'Electrolysis and Its Uses', html:'<h3>Electrolysis and Its Uses</h3><p>Electrolysis uses electricity to split a compound: passing current through molten NaCl gives sodium metal and chlorine gas. Positive ions move to the negative cathode, negative ions to the positive anode.</p><p>Electrolysis purifies copper and plates metals: electroplating coats cheap metals with chromium or silver for shine and rust protection. Rusting of iron is unwanted oxidation that painting or galvanising prevents.</p>'}
   ],
   quiz:[
     {q:'Oxidation is:', options:['gain of electrons','loss of electrons','gain of protons','loss of neutrons'], answer:1, explain:'OIL RIG: Oxidation Is Loss of electrons.'},
     {q:'In a redox reaction:', options:['only oxidation occurs','only reduction occurs','both occur together','nothing happens'], answer:2, explain:'Oxidation and reduction are coupled — one species loses electrons while another gains them.'},
     {q:'An oxidising agent:', options:['gives electrons','takes electrons','gives protons','takes neutrons'], answer:1, explain:'Oxidising agents accept electrons, causing another substance to be oxidised.'},
     {q:'In a Daniel cell, electrons flow:', options:['from copper to zinc','from zinc to copper','both ways','not at all'], answer:1, explain:'Zinc is oxidised (loses electrons), so electrons flow through the wire from zinc to copper.'},
     {q:'Oxidation takes place at the:', options:['cathode','anode','salt bridge','wire'], answer:1, explain:'Anode = oxidation; cathode = reduction.'},
     {q:'Electrolysis of molten NaCl produces:', options:['Na and Cl₂','NaOH and H₂','HCl and O₂','Na₂O'], answer:0, explain:'Sodium ions are reduced to sodium metal at the cathode; chloride is oxidised to chlorine at the anode.'},
     {q:'Electroplating is used to:', options:['melt metals','coat metals for protection and shine','make alloys','cut steel'], answer:1, explain:'Electrolysis deposits a thin protective or decorative metal layer on objects.'},
     {q:'Rusting of iron is:', options:['reduction','unwanted oxidation','neutralisation','evaporation'], answer:1, explain:'Iron is oxidised by oxygen and moisture to form rust (hydrated iron oxide).'},
     {q:'Galvanising protects iron by coating it with:', options:['copper','zinc','silver','gold'], answer:1, explain:'A zinc coating corrodes first, sacrificing itself to protect the iron underneath.'},
     {q:'In electrolysis, negative ions move toward the:', options:['cathode','anode','battery','salt bridge'], answer:1, explain:'Anions (negative) are attracted to the positive anode.'}
   ]},
  {id:'sin-c9-che-ch8', title:'Chemical Reactivity', urdu:'کیمیائی ردِعمل پذیری', comingSoon:false,
   lessons:[
     {id:'sin-c9-che-ch8-l1', title:'The Reactivity Series', html:'<h3>The Reactivity Series</h3><p>Metals can be arranged by how readily they react: potassium, sodium, calcium, magnesium, aluminium, zinc, iron, lead, copper, silver, gold. Potassium tops the series; gold barely reacts.</p><p>A more reactive metal displaces a less reactive one from its compound: iron displaces copper from copper sulphate, turning the blue solution green. This is a displacement reaction.</p>'},
     {id:'sin-c9-che-ch8-l2', title:'Reactions of Metals', html:'<h3>Reactions of Metals</h3><p>Very reactive metals like sodium react violently with cold water, giving hydrogen and an alkaline solution. Less reactive metals like iron react only with steam, and copper does not react with water at all.</p><p>Metals react with dilute acids to give a salt and hydrogen — but copper and silver are too unreactive to do so. With oxygen, magnesium burns with a brilliant white flame to form magnesium oxide.</p>'},
     {id:'sin-c9-che-ch8-l3', title:'Reactivity of Non-metals', html:'<h3>Reactivity of Non-metals</h3><p>Halogens (group 17) are the most reactive non-metals; reactivity decreases down the group, so chlorine displaces bromine and iodine from their compounds. Fluorine is the most reactive element of all.</p><p>Noble gases (group 18) are almost completely unreactive because their outer shells are full. This stability is why argon fills light bulbs and helium fills party balloons safely.</p>'}
   ],
   quiz:[
     {q:'The most reactive metal in the series is:', options:['gold','copper','potassium','iron'], answer:2, explain:'Potassium tops the reactivity series; gold is near the bottom.'},
     {q:'Iron displaces copper from copper sulphate because iron is:', options:['less reactive','more reactive','heavier','cheaper'], answer:1, explain:'A more reactive metal displaces a less reactive metal from its salt solution.'},
     {q:'Sodium reacts with cold water to give:', options:['oxygen','sodium hydroxide and hydrogen','sodium chloride','no reaction'], answer:1, explain:'2Na + 2H₂O → 2NaOH + H₂ — vigorous reaction with hydrogen gas.'},
     {q:'Which metal does NOT react with dilute HCl?', options:['zinc','copper','magnesium','iron'], answer:1, explain:'Copper is below hydrogen in the series, so it cannot displace hydrogen from acids.'},
     {q:'Magnesium burns in air with a:', options:['blue flame','brilliant white flame','green flame','no flame'], answer:1, explain:'Burning magnesium gives an intense white light and forms MgO.'},
     {q:'The most reactive halogen is:', options:['iodine','bromine','chlorine','fluorine'], answer:3, explain:'Reactivity decreases down group 17, so fluorine is the most reactive halogen.'},
     {q:'Noble gases are unreactive because:', options:['they are light','their outer shells are full','they are rare','they are gases'], answer:1, explain:'Full outer electron shells make noble gases chemically stable.'},
     {q:'Chlorine displaces bromine from KBr because chlorine is:', options:['less reactive','more reactive','lighter','denser'], answer:1, explain:'A more reactive halogen displaces a less reactive one from its halide.'},
     {q:'Which metal reacts only with steam, not cold water?', options:['sodium','potassium','iron','calcium'], answer:2, explain:'Iron is moderately reactive: it reacts with steam (3Fe + 4H₂O → Fe₃O₄ + 4H₂) but not cold water.'},
     {q:'Gold is found uncombined in nature mainly because it is:', options:['very reactive','very unreactive','very dense','very shiny'], answer:1, explain:'Gold’s extremely low reactivity means it does not corrode and occurs native.'}
   ]}
]});
window.__saMergeCourse({id:'sin-class9-biology', board:'sindh', title:'Biology', urdu:'حیاتیات', class:'Class 9', icon:'🧬', desc:'Sindh Board Class 9 Biology — full syllabus with lessons and quizzes.', chapters:[
  {id:'sin-c9-bio-ch1', title:'Introduction to Biology', urdu:'حیاتیات کا تعارف', comingSoon:false,
   lessons:[
     {id:'sin-c9-bio-ch1-l1', title:'What Is Biology', html:'<h3>What Is Biology</h3><p>Biology is the study of living organisms — their structure, functions, growth and evolution. The word comes from Greek: bios (life) and logos (study).</p><p>Living things show movement, growth, reproduction, respiration and response to stimuli. Biology is divided into zoology (animals), botany (plants) and microbiology (microbes), among many branches.</p>'},
     {id:'sin-c9-bio-ch1-l2', title:'Levels of Organization', html:'<h3>Levels of Organization</h3><p>Life is organized in levels: cell → tissue → organ → organ system → organism → population → community → ecosystem → biosphere. Each level builds on the one below.</p><p>A heart is an organ made of tissues; the digestive system is an organ system of several organs working together. Studying each level helps explain how life works as a whole.</p>'},
     {id:'sin-c9-bio-ch1-l3', title:'Biology and Other Sciences', html:'<h3>Biology and Other Sciences</h3><p>Biology connects with chemistry (biochemistry of the cell), physics (biophysics of vision and hearing) and mathematics (population statistics). It also links with geography and agriculture.</p><p>The Quran encourages the study of living things as signs of creation. Biological knowledge improves medicine, farming and conservation, directly serving human welfare.</p>'}
   ],
   quiz:[
     {q:'Biology is the study of:', options:['rocks','living organisms','chemicals only','the stars'], answer:1, explain:'Biology deals with life: its structure, function, growth and evolution.'},
     {q:'The word biology comes from Greek meaning:', options:['study of earth','study of life','study of water','study of air'], answer:1, explain:'Bios = life, logos = study or reasoning.'},
     {q:'Which is the correct order of organization?', options:['organ → cell → tissue','cell → tissue → organ','tissue → cell → organ','organ → tissue → cell'], answer:1, explain:'Cells form tissues, tissues form organs.'},
     {q:'Zoology is the study of:', options:['plants','animals','microbes','fossils'], answer:1, explain:'Zoology covers animals; botany covers plants; microbiology covers microbes.'},
     {q:'Which is NOT a characteristic of living things?', options:['reproduction','growth','melting','respiration'], answer:2, explain:'Melting is a physical change in non-living matter; the rest are life processes.'},
     {q:'A group of similar cells performing one function is a:', options:['organ','tissue','system','organism'], answer:1, explain:'Tissue = cells of one type working together, e.g. muscle tissue.'},
     {q:'Biochemistry is the link between biology and:', options:['physics','chemistry','history','geography'], answer:1, explain:'Biochemistry studies the chemical processes inside living things.'},
     {q:'An ecosystem consists of:', options:['only animals','only plants','living things and their environment','only microbes'], answer:2, explain:'An ecosystem includes the community plus non-living factors like water and air.'},
     {q:'The largest level of biological organization is the:', options:['population','community','ecosystem','biosphere'], answer:3, explain:'The biosphere includes all ecosystems on Earth.'},
     {q:'Movement, irritability and excretion are:', options:['life processes','chemical reactions','physical changes','diseases'], answer:0, explain:'These are functions by which living organisms can be identified.'}
   ]},
  {id:'sin-c9-bio-ch2', title:'Solving a Biological Problem', urdu:'حیاتیاتی مسئلے کا حل', comingSoon:false,
   lessons:[
     {id:'sin-c9-bio-ch2-l1', title:'The Scientific Method', html:'<h3>The Scientific Method</h3><p>Science solves problems step by step: recognize the problem, make observations, form a hypothesis, test it with experiments, and draw conclusions. A hypothesis is a testable proposed explanation.</p><p>Good experiments have a control for comparison and change only one variable at a time. Results must be repeatable by other scientists before they are trusted.</p>'},
     {id:'sin-c9-bio-ch2-l2', title:'The Biological Method in Action', html:'<h3>The Biological Method in Action</h3><p>Ronald Ross solved the malaria problem by hypothesizing that mosquitoes spread it. He let mosquitoes bite malaria patients, then healthy sparrows, and found the parasite in the mosquitoes’ stomachs.</p><p>His careful experiments proved mosquitoes transmit malaria, winning him the Nobel Prize. This shows how the biological method turns a guess into confirmed knowledge.</p>'},
     {id:'sin-c9-bio-ch2-l3', title:'Theory, Law and Data Organization', html:'<h3>Theory, Law and Data Organization</h3><p>A theory is a well-tested explanation (like the cell theory); a law describes what happens (like Mendel’s laws). Theories explain, laws describe.</p><p>Data is organized in tables and shown as graphs so patterns are clear. Mathematics and statistics help biologists decide whether results are significant.</p>'}
   ],
   quiz:[
     {q:'The first step in the scientific method is:', options:['experiment','recognizing the problem','conclusion','hypothesis'], answer:1, explain:'You must first identify and state the biological problem clearly.'},
     {q:'A hypothesis is:', options:['a proven fact','a testable proposed explanation','a final conclusion','an observation'], answer:1, explain:'A hypothesis predicts an outcome that experiments can confirm or reject.'},
     {q:'In a fair experiment, the scientist changes:', options:['all variables','only one variable','no variables','two variables'], answer:1, explain:'Keeping all other variables constant isolates the effect being tested.'},
     {q:'Ronald Ross discovered that malaria is spread by:', options:['dirty water','mosquitoes','bad air','flies'], answer:1, explain:'His experiments showed the malaria parasite develops inside mosquitoes.'},
     {q:'The group in an experiment kept under normal conditions is the:', options:['test group','control group','variable group','result group'], answer:1, explain:'The control provides the baseline for comparing the experimental group.'},
     {q:'A scientific law:', options:['explains why things happen','describes what happens','is just a guess','never uses maths'], answer:1, explain:'Laws describe patterns; theories explain them.'},
     {q:'Which is quantitative data?', options:['leaf is green','plant is 20 cm tall','flower smells sweet','root is rough'], answer:1, explain:'Quantitative observations use numbers and measurements.'},
     {q:'If experiments disprove a hypothesis, the scientist should:', options:['hide the results','modify or reject the hypothesis','repeat until it works','ignore it'], answer:1, explain:'Honest science follows the evidence, even when it contradicts the guess.'},
     {q:'Graphs are used in biology to:', options:['decorate reports','show patterns in data clearly','replace experiments','avoid maths'], answer:1, explain:'Visual data makes trends and relationships easy to see.'},
     {q:'Ronald Ross won the Nobel Prize for work on:', options:['tuberculosis','malaria','cholera','plague'], answer:1, explain:'His proof of mosquito transmission of malaria earned the 1902 Nobel Prize.'}
   ]},
  {id:'sin-c9-bio-ch3', title:'Biodiversity', urdu:'حیاتیاتی تنوع', comingSoon:false,
   lessons:[
     {id:'sin-c9-bio-ch3-l1', title:'What Is Biodiversity', html:'<h3>What Is Biodiversity</h3><p>Biodiversity is the variety of life on Earth — different species, genes and ecosystems. Millions of species exist, and new ones are still being discovered in rainforests and oceans.</p><p>Biodiversity gives us food, medicines and stable ecosystems. Losing species through deforestation and pollution weakens the systems humans depend on.</p>'},
     {id:'sin-c9-bio-ch3-l2', title:'Classification and the Five Kingdoms', html:'<h3>Classification and the Five Kingdoms</h3><p>To study millions of species, biologists classify them into groups. The five-kingdom system is: Monera (bacteria), Protista (e.g. Amoeba), Fungi (mushrooms), Plantae (plants) and Animalia (animals).</p><p>Classification uses hierarchy: kingdom, phylum, class, order, family, genus, species. Humans are Homo sapiens — genus Homo, species sapiens.</p>'},
     {id:'sin-c9-bio-ch3-l3', title:'Binomial Nomenclature', html:'<h3>Binomial Nomenclature</h3><p>Every species gets a two-part Latin name: genus (capitalized) + species (small), written in italics, e.g. Homo sapiens. This avoids confusion from common names.</p><p>The system was introduced by Linnaeus. A mango is Mangifera indica everywhere in the world, no matter the local language, which is why scientists prefer it.</p>'}
   ],
   quiz:[
     {q:'Biodiversity means:', options:['variety of rocks','variety of life on Earth','variety of soils','variety of climates'], answer:1, explain:'Biodiversity covers the variety of species, genes and ecosystems.'},
     {q:'The five-kingdom system does NOT include:', options:['Monera','Protista','Fungi','Virus'], answer:3, explain:'Viruses are not placed in any kingdom; the five are Monera, Protista, Fungi, Plantae, Animalia.'},
     {q:'Binomial nomenclature was introduced by:', options:['Darwin','Linnaeus','Mendel','Lamarck'], answer:1, explain:'Carolus Linnaeus created the two-name system for species.'},
     {q:'The scientific name of humans is:', options:['Homo Sapiens','homo sapiens','Homo sapiens','HOMO SAPIENS'], answer:2, explain:'Genus capitalized, species lowercase, both italicized: Homo sapiens.'},
     {q:'In classification, the smallest unit is:', options:['genus','family','species','order'], answer:2, explain:'Species is the basic and smallest unit of classification.'},
     {q:'Mushrooms belong to the kingdom:', options:['Plantae','Fungi','Protista','Monera'], answer:1, explain:'Fungi are decomposers with chitin walls — a separate kingdom.'},
     {q:'Amoeba belongs to the kingdom:', options:['Monera','Protista','Animalia','Fungi'], answer:1, explain:'Protista contains mostly unicellular eukaryotes like Amoeba and Paramecium.'},
     {q:'Bacteria belong to the kingdom:', options:['Monera','Protista','Fungi','Plantae'], answer:0, explain:'Monera (now split into bacteria and archaea) holds the prokaryotes.'},
     {q:'Conserving biodiversity matters because:', options:['species look nice','ecosystems and human life depend on it','it increases pollution','it stops farming'], answer:1, explain:'Biodiversity sustains food, medicine, clean air and stable ecosystems.'},
     {q:'Which order is correct from large to small?', options:['species → genus → family','kingdom → phylum → class','order → kingdom → phylum','genus → kingdom → species'], answer:1, explain:'The hierarchy runs kingdom, phylum, class, order, family, genus, species.'}
   ]},
  {id:'sin-c9-bio-ch4', title:'Cells and Tissues', urdu:'خلیات اور ٹشوز', comingSoon:false,
   lessons:[
     {id:'sin-c9-bio-ch4-l1', title:'Cell Theory and Cell Types', html:'<h3>Cell Theory and Cell Types</h3><p>Cell theory states: all living things are made of cells, the cell is the basic unit of life, and all cells come from pre-existing cells. It was proposed by Schleiden, Schwann and Virchow.</p><p>Prokaryotic cells (bacteria) lack a true nucleus; eukaryotic cells (plants, animals, fungi) have a membrane-bound nucleus. Eukaryotes are larger and more complex.</p>'},
     {id:'sin-c9-bio-ch4-l2', title:'Cell Organelles', html:'<h3>Cell Organelles</h3><p>The nucleus controls the cell and holds DNA; mitochondria release energy from food (the powerhouse); ribosomes make proteins; the cell membrane controls what enters and leaves.</p><p>Plant cells also have a cell wall for support, chloroplasts for photosynthesis and a large vacuole for storage. Animal cells lack these three but may have small vacuoles.</p>'},
     {id:'sin-c9-bio-ch4-l3', title:'Tissues', html:'<h3>Tissues</h3><p>A tissue is a group of similar cells doing one job. Plants have meristematic (dividing) and permanent tissues like xylem and phloem.</p><p>Animals have epithelial, muscle, nervous and connective tissues. Muscle tissue contracts for movement; nervous tissue carries messages as impulses.</p>'}
   ],
   quiz:[
     {q:'Cell theory was proposed by:', options:['Darwin','Schleiden, Schwann and Virchow','Mendel','Linnaeus'], answer:1, explain:'Schleiden and Schwann described cells; Virchow added that cells come from cells.'},
     {q:'Prokaryotic cells lack a:', options:['cell membrane','true nucleus','cytoplasm','ribosome'], answer:1, explain:'Prokaryotes like bacteria have no membrane-bound nucleus.'},
     {q:'The powerhouse of the cell is the:', options:['nucleus','ribosome','mitochondrion','vacuole'], answer:2, explain:'Mitochondria release energy from glucose during respiration.'},
     {q:'Proteins are made by:', options:['lysosomes','ribosomes','chloroplasts','vacuoles'], answer:1, explain:'Ribosomes are the sites of protein synthesis.'},
     {q:'Which structure is found in plant cells but NOT animal cells?', options:['nucleus','cell wall','cell membrane','mitochondrion'], answer:1, explain:'Plants have a rigid cellulose cell wall; animal cells do not.'},
     {q:'Photosynthesis takes place in the:', options:['mitochondria','chloroplasts','nucleus','ribosomes'], answer:1, explain:'Chloroplasts contain chlorophyll, which traps light energy.'},
     {q:'Xylem and phloem are:', options:['animal tissues','plant tissues','cell organelles','microbes'], answer:1, explain:'Xylem carries water, phloem carries food — both are plant tissues.'},
     {q:'Nervous tissue carries:', options:['blood','nerve impulses','food','oxygen'], answer:1, explain:'Neurons transmit messages as electrical impulses.'},
     {q:'The control centre of the cell is the:', options:['vacuole','nucleus','membrane','cytoplasm'], answer:1, explain:'The nucleus holds DNA and directs all cell activities.'},
     {q:'All cells come from pre-existing cells was stated by:', options:['Schleiden','Schwann','Virchow','Hooke'], answer:2, explain:'Virchow’s principle: omnis cellula e cellula.'}
   ]},
  {id:'sin-c9-bio-ch5', title:'Cell Cycle', urdu:'خلیے کا دورِ حیات', comingSoon:false,
   lessons:[
     {id:'sin-c9-bio-ch5-l1', title:'Phases of the Cell Cycle', html:'<h3>Phases of the Cell Cycle</h3><p>The cell cycle has interphase (G1, S, G2) and the M phase (mitosis + cytokinesis). During S phase the DNA is copied, so each new cell gets a full set.</p><p>In G1 the cell grows, in S DNA replicates, and in G2 the cell prepares to divide. Most of a cell’s life is spent in interphase, not in division.</p>'},
     {id:'sin-c9-bio-ch5-l2', title:'Mitosis', html:'<h3>Mitosis</h3><p>Mitosis divides the nucleus into two identical nuclei in four stages: prophase (chromosomes appear), metaphase (chromosomes line up), anaphase (chromatids separate) and telophase (two nuclei form).</p><p>Cytokinesis then splits the cytoplasm. Mitosis produces two genetically identical diploid cells and is used for growth and repair — for example, healing a skin wound.</p>'},
     {id:'sin-c9-bio-ch5-l3', title:'Meiosis and Its Importance', html:'<h3>Meiosis and Its Importance</h3><p>Meiosis produces four haploid gametes (sperm and egg) with half the chromosomes, in two divisions. Crossing over in prophase I shuffles genes, creating variation.</p><p>Fertilization restores the diploid number. Without meiosis halving the chromosomes, each generation would double its chromosome count.</p>'}
   ],
   quiz:[
     {q:'DNA is copied during:', options:['G1 phase','S phase','G2 phase','M phase'], answer:1, explain:'The S (synthesis) phase replicates DNA before division.'},
     {q:'Chromosomes line up at the equator in:', options:['prophase','metaphase','anaphase','telophase'], answer:1, explain:'Metaphase: chromosomes arrange on the metaphase plate.'},
     {q:'Sister chromatids separate during:', options:['prophase','metaphase','anaphase','telophase'], answer:2, explain:'Anaphase pulls chromatids to opposite poles.'},
     {q:'Mitosis produces:', options:['2 identical diploid cells','4 haploid cells','2 different cells','4 identical cells'], answer:0, explain:'One mitotic division gives two genetically identical diploid daughter cells.'},
     {q:'Meiosis produces:', options:['2 diploid cells','4 haploid cells','2 haploid cells','4 diploid cells'], answer:1, explain:'Two meiotic divisions yield four haploid gametes.'},
     {q:'Crossing over occurs in:', options:['prophase I of meiosis','metaphase of mitosis','anaphase II','telophase'], answer:0, explain:'Homologous chromosomes exchange segments in prophase I, creating variation.'},
     {q:'Cytokinesis is the division of the:', options:['nucleus','cytoplasm','chromosome','membrane only'], answer:1, explain:'Cytokinesis splits the cytoplasm after nuclear division.'},
     {q:'Mitosis is important for:', options:['gamete formation','growth and repair','variation','fertilization'], answer:1, explain:'Growth, repair and asexual reproduction all use mitosis.'},
     {q:'Human body cells have ___ chromosomes; gametes have ___.', options:['46, 23','23, 46','44, 22','48, 24'], answer:0, explain:'Diploid body cells have 46; meiosis halves this to 23 in gametes.'},
     {q:'The longest phase of the cell cycle is:', options:['mitosis','interphase','cytokinesis','anaphase'], answer:1, explain:'Cells spend most of their time growing and copying DNA in interphase.'}
   ]},
  {id:'sin-c9-bio-ch6', title:'Enzymes', urdu:'انزائمز', comingSoon:false,
   lessons:[
     {id:'sin-c9-bio-ch6-l1', title:'What Enzymes Are', html:'<h3>What Enzymes Are</h3><p>Enzymes are biological catalysts — usually proteins — that speed up reactions without being used up. Without enzymes, digestion and respiration would be far too slow for life.</p><p>Each enzyme works on a specific substrate: amylase digests starch, protease digests protein, lipase digests fats. The reacting molecule fits the enzyme’s active site.</p>'},
     {id:'sin-c9-bio-ch6-l2', title:'How Enzymes Work', html:'<h3>How Enzymes Work</h3><p>In the lock-and-key model, the substrate fits the active site exactly. In the induced-fit model, the active site moulds around the substrate for a snug fit.</p><p>Enzymes lower the activation energy needed to start a reaction. After the reaction, the enzyme is released unchanged and can work again.</p>'},
     {id:'sin-c9-bio-ch6-l3', title:'Factors Affecting Enzyme Action', html:'<h3>Factors Affecting Enzyme Action</h3><p>Enzymes work best at an optimum temperature (around 37°C in humans); high heat denatures them by destroying their shape. Each enzyme also has an optimum pH — pepsin likes acidic stomach pH, amylase likes near-neutral.</p><p>More substrate speeds the reaction only up to a point, after which all active sites are busy. Denaturation by heat or extreme pH permanently stops the enzyme.</p>'}
   ],
   quiz:[
     {q:'Enzymes are:', options:['carbohydrates','biological catalysts','lipids','minerals'], answer:1, explain:'Most enzymes are proteins that speed up biochemical reactions.'},
     {q:'Amylase digests:', options:['protein','starch','fats','vitamins'], answer:1, explain:'Salivary and pancreatic amylase break starch into maltose.'},
     {q:'The lock-and-key model describes:', options:['enzyme denaturation','substrate fitting the active site','pH change','protein synthesis'], answer:1, explain:'The substrate’s shape matches the enzyme’s active site like a key in a lock.'},
     {q:'Enzymes lower the:', options:['pH','activation energy','temperature','substrate amount'], answer:1, explain:'By lowering activation energy, enzymes make reactions start more easily.'},
     {q:'High temperature stops enzymes by:', options:['freezing them','denaturing them','dissolving them','multiplying them'], answer:1, explain:'Heat breaks the bonds holding the enzyme’s shape — denaturation is usually irreversible.'},
     {q:'Pepsin works best in:', options:['alkaline medium','acidic medium','neutral medium','no medium'], answer:1, explain:'Pepsin is a stomach enzyme with an optimum around pH 2.'},
     {q:'After a reaction, the enzyme is:', options:['used up','unchanged and reusable','destroyed','converted to product'], answer:1, explain:'Catalysts emerge unchanged and catalyse again.'},
     {q:'Lipase acts on:', options:['starch','proteins','fats','nucleic acids'], answer:2, explain:'Lipase digests lipids (fats) into fatty acids and glycerol.'},
     {q:'The optimum temperature for most human enzymes is about:', options:['0°C','20°C','37°C','60°C'], answer:2, explain:'Human enzymes evolved to work best near body temperature, 37°C.'},
     {q:'Increasing substrate concentration increases the rate until:', options:['enzymes denature','all active sites are occupied','pH changes','temperature falls'], answer:1, explain:'Once every active site is busy, adding more substrate cannot speed the reaction.'}
   ]},
  {id:'sin-c9-bio-ch7', title:'Bioenergetics', urdu:'حیاتیاتی توانائیات', comingSoon:false,
   lessons:[
     {id:'sin-c9-bio-ch7-l1', title:'ATP — The Energy Currency', html:'<h3>ATP — The Energy Currency</h3><p>Cells store and spend energy as ATP (adenosine triphosphate). Breaking its phosphate bonds releases energy for muscle contraction, active transport and building molecules.</p><p>ATP is remade by respiration from food. Like rechargeable credit, it is constantly spent and recharged in every living cell.</p>'},
     {id:'sin-c9-bio-ch7-l2', title:'Photosynthesis', html:'<h3>Photosynthesis</h3><p>Green plants trap light energy with chlorophyll and use it to make glucose: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in light). Oxygen is released as a by-product.</p><p>The rate depends on light intensity, CO₂ concentration and temperature — whichever is in shortest supply limits the rate (limiting factors). Photosynthesis feeds almost all life on Earth.</p>'},
     {id:'sin-c9-bio-ch7-l3', title:'Respiration', html:'<h3>Respiration</h3><p>Aerobic respiration releases energy from glucose using oxygen: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP). It happens in mitochondria and yields far more ATP than anaerobic respiration.</p><p>Without oxygen, anaerobic respiration gives little energy: in yeast it makes ethanol and CO₂ (used in baking and brewing); in muscles it makes lactic acid, causing cramps.</p>'}
   ],
   quiz:[
     {q:'ATP stands for:', options:['adenosine triphosphate','active transport protein','amino tripeptide','adenine thymine pair'], answer:0, explain:'Adenosine triphosphate is the cell’s energy currency.'},
     {q:'The word equation for photosynthesis is:', options:['glucose + oxygen → CO₂ + water','CO₂ + water → glucose + oxygen','oxygen + water → glucose','glucose → CO₂ + oxygen'], answer:1, explain:'In light, plants convert carbon dioxide and water into glucose and oxygen.'},
     {q:'Photosynthesis occurs in the:', options:['mitochondria','chloroplasts','nucleus','ribosomes'], answer:1, explain:'Chlorophyll in chloroplasts traps the light energy.'},
     {q:'Which is a limiting factor of photosynthesis?', options:['soil colour','light intensity','wind direction','leaf shape'], answer:1, explain:'Light, CO₂ and temperature can each limit the rate when in short supply.'},
     {q:'Aerobic respiration needs:', options:['no oxygen','oxygen','no glucose','darkness'], answer:1, explain:'Aerobic means ‘with oxygen’; it releases the most ATP.'},
     {q:'Anaerobic respiration in yeast produces:', options:['lactic acid','ethanol and CO₂','only water','oxygen'], answer:1, explain:'Yeast fermentation yields ethanol and carbon dioxide — the basis of brewing.'},
     {q:'Muscle cramps during heavy exercise are caused by:', options:['excess oxygen','accumulation of lactic acid','lack of glucose','too much ATP'], answer:1, explain:'Anaerobic respiration in muscles produces lactic acid.'},
     {q:'Most ATP during aerobic respiration is made in the:', options:['nucleus','cytoplasm','mitochondria','chloroplast'], answer:2, explain:'Mitochondria are the site of aerobic respiration.'},
     {q:'The energy in ATP is released by breaking:', options:['peptide bonds','phosphate bonds','hydrogen bonds','glycosidic bonds'], answer:1, explain:'Removing a phosphate group from ATP releases usable energy.'},
     {q:'Oxygen released in photosynthesis comes from:', options:['CO₂','water','glucose','air'], answer:1, explain:'Photolysis splits water, releasing oxygen as a by-product.'}
   ]},
  {id:'sin-c9-bio-ch8', title:'Nutrition', urdu:'تغذیہ', comingSoon:false,
   lessons:[
     {id:'sin-c9-bio-ch8-l1', title:'Modes of Nutrition', html:'<h3>Modes of Nutrition</h3><p>Autotrophs make their own food by photosynthesis (plants) or chemosynthesis (some bacteria). Heterotrophs depend on others: herbivores eat plants, carnivores eat animals, omnivores eat both.</p><p>Saprotrophs (fungi, bacteria) feed on dead matter and recycle nutrients; parasites (tapeworm, malaria parasite) live on or in a host and harm it.</p>'},
     {id:'sin-c9-bio-ch8-l2', title:'The Human Digestive System', html:'<h3>The Human Digestive System</h3><p>Food travels: mouth (chewing + salivary amylase) → oesophagus → stomach (acid + pepsin) → small intestine (digestion completes, absorption through villi) → large intestine (water absorbed).</p><p>The liver makes bile (emulsifies fats) and the pancreas supplies enzymes and insulin. Villi in the small intestine give a huge surface area for absorbing digested food into blood.</p>'},
     {id:'sin-c9-bio-ch8-l3', title:'Balanced Diet and Deficiencies', html:'<h3>Balanced Diet and Deficiencies</h3><p>A balanced diet has carbohydrates, proteins, fats, vitamins, minerals, water and fibre in right amounts. Vitamin C prevents scurvy, vitamin D plus calcium prevents rickets, iron prevents anaemia, iodine prevents goitre.</p><p>Fibre prevents constipation, water carries nutrients and removes waste. Malnutrition from poor diet causes deficiency diseases; overeating causes obesity.</p>'}
   ],
   quiz:[
     {q:'Autotrophs:', options:['eat animals','make their own food','eat dead matter','live as parasites'], answer:1, explain:'Autotrophs synthesize food by photosynthesis or chemosynthesis.'},
     {q:'Salivary amylase digests:', options:['protein','starch','fats','vitamins'], answer:1, explain:'Amylase in saliva starts starch digestion in the mouth.'},
     {q:'Protein digestion begins in the:', options:['mouth','stomach','small intestine','large intestine'], answer:1, explain:'Pepsin in acidic stomach juice starts breaking down proteins.'},
     {q:'Absorption of digested food mainly occurs in the:', options:['stomach','small intestine','large intestine','oesophagus'], answer:1, explain:'Villi in the small intestine absorb nutrients into the blood.'},
     {q:'Bile is produced by the:', options:['pancreas','liver','stomach','gall bladder'], answer:1, explain:'The liver makes bile, which is stored in the gall bladder and emulsifies fats.'},
     {q:'Scurvy is caused by lack of vitamin:', options:['A','B','C','D'], answer:2, explain:'Vitamin C deficiency causes scurvy (bleeding gums); citrus fruits prevent it.'},
     {q:'Goitre is caused by lack of:', options:['iron','iodine','calcium','zinc'], answer:1, explain:'Iodine deficiency swells the thyroid gland — goitre; iodised salt prevents it.'},
     {q:'Rickets is prevented by vitamin D and:', options:['iron','calcium','iodine','zinc'], answer:1, explain:'Vitamin D helps absorb calcium for strong bones; deficiency bends growing bones.'},
     {q:'Fibre in the diet:', options:['gives energy','prevents constipation','builds muscle','makes blood'], answer:1, explain:'Roughage adds bulk and keeps food moving through the gut.'},
     {q:'A parasite:', options:['makes its own food','feeds on dead matter','lives on/in a host and harms it','eats only plants'], answer:2, explain:'Parasites like tapeworms benefit at the host’s expense.'}
   ]},
  {id:'sin-c9-bio-ch9', title:'Transport', urdu:'ترسیل', comingSoon:false,
   lessons:[
     {id:'sin-c9-bio-ch9-l1', title:'Transport in Humans', html:'<h3>Transport in Humans</h3><p>The heart is a double pump: the right side sends blood to the lungs, the left side pumps oxygenated blood to the body. Arteries carry blood away from the heart, veins bring it back, capillaries exchange materials.</p><p>Blood has red cells (carry oxygen via haemoglobin), white cells (fight disease), platelets (clotting) and plasma (transports nutrients, hormones and waste). Valves stop backflow.</p>'},
     {id:'sin-c9-bio-ch9-l2', title:'Transport in Plants', html:'<h3>Transport in Plants</h3><p>Xylem vessels carry water and minerals up from roots; phloem sieve tubes carry manufactured food to all parts. Root hairs absorb water by osmosis.</p><p>Transpiration — water loss from leaves — pulls water upward (transpiration pull). Stomata control this loss, closing in dry conditions to save water.</p>'},
     {id:'sin-c9-bio-ch9-l3', title:'Disorders of the Transport System', html:'<h3>Disorders of the Transport System</h3><p>High blood pressure (hypertension) strains the heart and can cause stroke; low exercise, salt and smoking raise the risk. Anaemia (low haemoglobin) causes tiredness.</p><p>Heart attack happens when a coronary artery is blocked. Regular exercise, less salt and no smoking keep the transport system healthy.</p>'}
   ],
   quiz:[
     {q:'Arteries carry blood:', options:['to the heart','away from the heart','only to lungs','only to the brain'], answer:1, explain:'Arteries carry blood away from the heart; veins return it.'},
     {q:'Oxygen is carried in blood by:', options:['white cells','red cells','platelets','plasma'], answer:1, explain:'Haemoglobin in red blood cells binds oxygen.'},
     {q:'The left side of the heart pumps blood to the:', options:['lungs','body','right side','liver only'], answer:1, explain:'The left ventricle sends oxygenated blood around the body; the right side serves the lungs.'},
     {q:'Xylem transports:', options:['food','water and minerals','hormones','oxygen'], answer:1, explain:'Xylem vessels carry water and dissolved minerals upward from roots.'},
     {q:'Phloem transports:', options:['water','manufactured food','minerals only','oxygen'], answer:1, explain:'Phloem sieve tubes translocate sugars to growing and storage parts.'},
     {q:'Transpiration is:', options:['food making','water loss from leaves','water uptake by roots','breathing'], answer:1, explain:'Evaporation from leaf surfaces pulls the transpiration stream upward.'},
     {q:'Blood clotting is helped by:', options:['red cells','white cells','platelets','plasma proteins only'], answer:2, explain:'Platelets release clotting factors that seal wounds.'},
     {q:'Hypertension means:', options:['low blood pressure','high blood pressure','low sugar','fast pulse'], answer:1, explain:'Persistently high blood pressure strains the heart and vessels.'},
     {q:'Valves in the heart and veins:', options:['speed blood','prevent backflow','make blood cells','carry oxygen'], answer:1, explain:'One-way valves keep blood moving in the correct direction.'},
     {q:'White blood cells:', options:['carry oxygen','fight infection','clot blood','carry hormones'], answer:1, explain:'White cells engulf germs and make antibodies.'}
   ]}
]});
window.__saMergeCourse({id:'sin-class9-mathematics', board:'sindh', title:'Mathematics', urdu:'ریاضی', class:'Class 9', icon:'📐', desc:'Sindh Board Class 9 Mathematics — full syllabus with lessons and quizzes.', chapters:[
  {id:'sin-c9-mat-ch1', title:'Real and Complex Numbers', urdu:'حقیقی اور مخلوط اعداد', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch1-l1', title:'The Real Number System', html:'<h3>The Real Number System</h3><p>Real numbers are all numbers on the number line: natural numbers, whole numbers, integers, rational and irrational numbers together. Rational numbers can be written as p/q; irrational numbers like √2 and π cannot.</p><p>Terminating and recurring decimals are rational; non-terminating, non-recurring decimals are irrational. Every real number has a unique point on the number line.</p>'},
     {id:'sin-c9-mat-ch1-l2', title:'Complex Numbers', html:'<h3>Complex Numbers</h3><p>Some equations like x² = −1 have no real solution, so mathematicians defined i = √(−1), with i² = −1. A complex number has the form a + bi, where a is the real part and b the imaginary part.</p><p>Complex numbers add and multiply like binomials: (2 + 3i) + (1 − i) = 3 + 2i. They extend the number system so every quadratic equation has a solution.</p>'},
     {id:'sin-c9-mat-ch1-l3', title:'Operations and Properties', html:'<h3>Operations and Properties</h3><p>Real numbers follow closure, commutative, associative and distributive laws for addition and multiplication. Every non-zero number has a multiplicative inverse.</p><p>The absolute value |x| is the distance from zero: |−5| = 5. Rationalizing denominators removes roots from the bottom of fractions, e.g. 1/√2 = √2/2.</p>'}
   ],
   quiz:[
     {q:'Which of these is an irrational number?', options:['3/4','0.333…','√2','−5'], answer:2, explain:'√2 is non-terminating and non-recurring, so it is irrational.'},
     {q:'The value of i² is:', options:['1','−1','0','i'], answer:1, explain:'By definition i = √(−1), so i² = −1.'},
     {q:'In the complex number 4 − 7i, the imaginary part is:', options:['4','−7','7i','−7i'], answer:1, explain:'The imaginary part is the coefficient of i, which is −7.'},
     {q:'(2 + 3i) + (1 − i) equals:', options:['3 + 2i','3 + 4i','1 + 2i','3 − 2i'], answer:0, explain:'Add real and imaginary parts separately: (2+1) + (3−1)i = 3 + 2i.'},
     {q:'Which set includes all others?', options:['integers','natural numbers','rational numbers','real numbers'], answer:3, explain:'Real numbers contain rationals, which contain integers, which contain natural numbers.'},
     {q:'|−8| equals:', options:['−8','8','0','−1'], answer:1, explain:'Absolute value is distance from zero, always non-negative.'},
     {q:'0.121212… is:', options:['irrational','integer','rational','imaginary'], answer:2, explain:'A recurring decimal can be written as a fraction, so it is rational.'},
     {q:'The multiplicative inverse of 5 is:', options:['−5','1/5','5','0'], answer:1, explain:'A number times its inverse equals 1: 5 × 1/5 = 1.'},
     {q:'Which property does a + b = b + a show?', options:['associative','commutative','distributive','closure'], answer:1, explain:'Order does not matter in addition — the commutative law.'},
     {q:'√2 × √2 equals:', options:['2','4','√4','1'], answer:0, explain:'√2 × √2 = 2.'}
   ]},
  {id:'sin-c9-mat-ch2', title:'Logarithms', urdu:'لوگارتھم', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch2-l1', title:'What Is a Logarithm', html:'<h3>What Is a Logarithm</h3><p>If aʸ = x, then y = logₐx: the logarithm is the power to which the base must be raised. So log₁₀1000 = 3 because 10³ = 1000.</p><p>Common logarithms use base 10 and are written log x. Logarithms turn multiplication into addition, which is why they were invented for fast calculation.</p>'},
     {id:'sin-c9-mat-ch2-l2', title:'Laws of Logarithms', html:'<h3>Laws of Logarithms</h3><p>Three laws rule all log work: log(mn) = log m + log n; log(m/n) = log m − log n; log(mⁿ) = n log m. Also logₐa = 1 and logₐ1 = 0.</p><p>These laws simplify expressions: log 1000 − log 10 = log 100 = 2. Change of base: logₐx = log x / log a.</p>'},
     {id:'sin-c9-mat-ch2-l3', title:'Using Log Tables', html:'<h3>Using Log Tables</h3><p>Before calculators, log tables gave mantissas: log 452 = 2.6551, where 2 is the characteristic (from digits) and .6551 the mantissa (from the table).</p><p>Antilog reverses the process. Today calculators do this instantly, but the laws remain essential for solving exponential equations like 2ˣ = 30.</p>'}
   ],
   quiz:[
     {q:'log₁₀1000 equals:', options:['2','3','4','10'], answer:1, explain:'10³ = 1000, so the logarithm base 10 is 3.'},
     {q:'log(mn) equals:', options:['log m × log n','log m + log n','log m − log n','n log m'], answer:1, explain:'The product law: log of a product is the sum of the logs.'},
     {q:'log 100 − log 10 equals:', options:['log 1000','1','10','90'], answer:1, explain:'log 100 − log 10 = log(100/10) = log 10 = 1.'},
     {q:'logₐ1 equals:', options:['1','0','a','−1'], answer:1, explain:'Any base raised to 0 gives 1, so logₐ1 = 0.'},
     {q:'log 5³ can be written as:', options:['3 + log 5','3 log 5','log 5 ÷ 3','(log 5)³'], answer:1, explain:'The power law: log(mⁿ) = n log m.'},
     {q:'If 2ˣ = 8, then x equals:', options:['2','3','4','8'], answer:1, explain:'2³ = 8, so x = 3 (equivalently x = log₂8).'},
     {q:'The characteristic of log 452 is:', options:['4','2','3','0'], answer:1, explain:'Characteristic = digits before decimal minus 1 = 3 − 1 = 2.'},
     {q:'logₐa equals:', options:['0','1','a','−1'], answer:1, explain:'a¹ = a, so logₐa = 1.'},
     {q:'Common logarithms have base:', options:['2','e','10','a'], answer:2, explain:'Common logs use base 10, written simply as log x.'},
     {q:'2 log 3 + log 4 equals:', options:['log 36','log 24','log 12','log 18'], answer:0, explain:'2 log 3 + log 4 = log 9 + log 4 = log 36.'}
   ]},
  {id:'sin-c9-mat-ch3', title:'Algebraic Expressions', urdu:'الجبری اظہاریے', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch3-l1', title:'Terms and Polynomials', html:'<h3>Terms and Polynomials</h3><p>An algebraic expression combines numbers and variables with operations, e.g. 3x² − 5x + 2. Each part added or subtracted is a term; the number part is the coefficient.</p><p>A polynomial in one variable has whole-number exponents: 4x³ + 2x − 7 is degree 3. Expressions with negative or fractional exponents are not polynomials.</p>'},
     {id:'sin-c9-mat-ch3-l2', title:'Operations on Polynomials', html:'<h3>Operations on Polynomials</h3><p>Add or subtract by combining like terms: (3x² + 2x) + (x² − 5x) = 4x² − 3x. Multiply by distributing every term: (x + 2)(x + 3) = x² + 5x + 6.</p><p>Division of a polynomial by a monomial divides each term: (6x³ + 3x)/3x = 2x² + 1. Careful sign handling is the most common source of mistakes.</p>'},
     {id:'sin-c9-mat-ch3-l3', title:'Evaluating and Simplifying', html:'<h3>Evaluating and Simplifying</h3><p>To evaluate, substitute the value: if x = 2, then x³ − 4x = 8 − 8 = 0. Simplifying collects like terms and removes brackets.</p><p>The degree of a term is the sum of its exponents: 5x²y has degree 3. The leading coefficient is the coefficient of the highest-degree term.</p>'}
   ],
   quiz:[
     {q:'The degree of 4x³ + 2x − 7 is:', options:['4','3','2','7'], answer:1, explain:'Degree is the highest exponent of the variable: 3.'},
     {q:'Which is a like term of 5x²?', options:['5x','3x²','5y²','x³'], answer:1, explain:'Like terms have the same variables with the same exponents.'},
     {q:'(x + 2)(x + 3) equals:', options:['x² + 6','x² + 5x + 6','x² + 5x','2x + 5'], answer:1, explain:'FOIL: x² + 3x + 2x + 6 = x² + 5x + 6.'},
     {q:'If x = 3, the value of 2x² − 5 is:', options:['1','13','7','31'], answer:1, explain:'2(9) − 5 = 18 − 5 = 13.'},
     {q:'The coefficient of x² in 7x² − 4x + 1 is:', options:['7','−4','1','2'], answer:0, explain:'The coefficient is the number multiplying x², which is 7.'},
     {q:'(6x³ + 3x) ÷ 3x equals:', options:['2x² + 1','2x³ + x','2x²','6x² + 1'], answer:0, explain:'Divide each term: 6x³/3x = 2x² and 3x/3x = 1.'},
     {q:'Which is NOT a polynomial?', options:['x² + 1','3x − 5','x⁻¹ + 2','7'], answer:2, explain:'Polynomials cannot have negative exponents; x⁻¹ disqualifies it.'},
     {q:'The constant term of 2x² − 9x + 4 is:', options:['2','−9','4','0'], answer:2, explain:'The constant term has no variable: 4.'},
     {q:'(a + b)² expands to:', options:['a² + b²','a² + 2ab + b²','a² − 2ab + b²','2a + 2b'], answer:1, explain:'(a + b)² = a² + 2ab + b².'},
     {q:'Simplifying 4x − (2x − 3) gives:', options:['2x − 3','2x + 3','6x − 3','6x + 3'], answer:1, explain:'4x − 2x + 3 = 2x + 3 (minus times minus gives plus).'}
   ]},
  {id:'sin-c9-mat-ch4', title:'Factorization', urdu:'تجزی', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch4-l1', title:'Factors and Common Factors', html:'<h3>Factors and Common Factors</h3><p>Factorization writes an expression as a product of simpler factors: 6x² + 9x = 3x(2x + 3). Always look for a common factor first.</p><p>Grouping helps with four terms: ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y).</p>'},
     {id:'sin-c9-mat-ch4-l2', title:'Using Identities', html:'<h3>Using Identities</h3><p>The identities a² − b² = (a − b)(a + b), a² + 2ab + b² = (a + b)² and a² − 2ab + b² = (a − b)² factor many quadratics: x² − 16 = (x − 4)(x + 4).</p><p>Sum and difference of cubes: a³ + b³ = (a + b)(a² − ab + b²) and a³ − b³ = (a − b)(a² + ab + b²). So 8x³ − 27 = (2x − 3)(4x² + 6x + 9).</p>'},
     {id:'sin-c9-mat-ch4-l3', title:'Factoring Quadratics', html:'<h3>Factoring Quadratics</h3><p>For x² + bx + c, find two numbers with product c and sum b: x² + 7x + 12 = (x + 3)(x + 4) since 3 × 4 = 12 and 3 + 4 = 7.</p><p>For ax² + bx + c with a ≠ 1, split the middle term: 2x² + 7x + 3 = 2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).</p>'}
   ],
   quiz:[
     {q:'The factors of 6x² + 9x are:', options:['3x(2x + 3)','3(2x² + 3x)','x(6x + 9)','6x(x + 9)'], answer:0, explain:'Take out the common factor 3x: 3x(2x + 3).'},
     {q:'x² − 25 factors as:', options:['(x − 5)²','(x − 5)(x + 5)','(x + 5)²','(x − 25)(x + 1)'], answer:1, explain:'Difference of squares: a² − b² = (a − b)(a + b).'},
     {q:'x² + 7x + 12 factors as:', options:['(x + 6)(x + 1)','(x + 3)(x + 4)','(x + 12)(x + 1)','(x − 3)(x − 4)'], answer:1, explain:'3 × 4 = 12 and 3 + 4 = 7.'},
     {q:'x² + 10x + 25 is:', options:['(x + 5)²','(x − 5)²','(x + 10)(x + 5)','(x + 25)(x + 1)'], answer:0, explain:'Perfect square: a² + 2ab + b² = (a + b)².'},
     {q:'8x³ − 27 factors using:', options:['difference of squares','difference of cubes','sum of cubes','common factor'], answer:1, explain:'8x³ − 27 = (2x)³ − 3³, a difference of cubes.'},
     {q:'The factors of x² − 5x + 6 are:', options:['(x − 2)(x − 3)','(x + 2)(x + 3)','(x − 6)(x + 1)','(x − 1)(x − 6)'], answer:0, explain:'(−2) × (−3) = 6 and (−2) + (−3) = −5.'},
     {q:'ax + ay + bx + by factors as:', options:['(a + x)(b + y)','(a + b)(x + y)','(a − b)(x − y)','ab(x + y)'], answer:1, explain:'Group: a(x+y) + b(x+y) = (a+b)(x+y).'},
     {q:'2x² + 7x + 3 factors as:', options:['(2x + 3)(x + 1)','(2x + 1)(x + 3)','(2x − 1)(x − 3)','(x + 3)(x + 1)'], answer:1, explain:'Split 7x into 6x + x: (2x+1)(x+3) expands to 2x²+7x+3.'},
     {q:'The HCF-style first step in factorizing 12x³ − 8x² is:', options:['take out 4x²','take out 2x','use identity','group terms'], answer:0, explain:'Common factor is 4x²: 4x²(3x − 2).'},
     {q:'x³ + 1 factors as:', options:['(x + 1)(x² − x + 1)','(x + 1)³','(x − 1)(x² + x + 1)','(x + 1)(x² + x + 1)'], answer:0, explain:'Sum of cubes: (x+1)(x² − x + 1).'}
   ]},
  {id:'sin-c9-mat-ch5', title:'Algebraic Manipulation', urdu:'الجبری عملیات', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch5-l1', title:'HCF and LCM of Expressions', html:'<h3>HCF and LCM of Expressions</h3><p>The HCF is the greatest common factor: for 12x² and 18x³, HCF = 6x². The LCM is the smallest common multiple: LCM = 36x³.</p><p>For expressions, factor each fully first, then take common factors (HCF) or all factors with highest powers (LCM).</p>'},
     {id:'sin-c9-mat-ch5-l2', title:'Simplifying Rational Expressions', html:'<h3>Simplifying Rational Expressions</h3><p>Cancel common factors: (x² − 4)/(x − 2) = (x−2)(x+2)/(x−2) = x + 2 (for x ≠ 2). Never cancel terms that are added — only factors.</p><p>To add fractions, use the LCM as common denominator: 1/x + 1/y = (y + x)/xy.</p>'},
     {id:'sin-c9-mat-ch5-l3', title:'Surds and Rationalization', html:'<h3>Surds and Rationalization</h3><p>A surd is an irrational root like √3 or ∛5. Like surds can be combined: 2√3 + 5√3 = 7√3; unlike surds stay separate.</p><p>Rationalize denominators by multiplying top and bottom by the surd: 3/√5 = 3√5/5. For a + √b type denominators use the conjugate.</p>'}
   ],
   quiz:[
     {q:'The HCF of 12x² and 18x³ is:', options:['6x²','6x³','36x²','12x²'], answer:0, explain:'Common factors: 6 × x² = 6x².'},
     {q:'The LCM of 4x and 6x² is:', options:['12x²','24x²','12x','6x²'], answer:0, explain:'Take highest powers: 12 × x² = 12x².'},
     {q:'(x² − 4)/(x − 2) simplifies to (x ≠ 2):', options:['x − 2','x + 2','x² + 2','x − 4'], answer:1, explain:'(x−2)(x+2)/(x−2) = x + 2 after cancelling.'},
     {q:'1/x + 1/y equals:', options:['2/(x+y)','(x + y)/xy','1/(x + y)','(xy)/(x + y)'], answer:1, explain:'Common denominator xy: (y + x)/xy.'},
     {q:'2√3 + 5√3 equals:', options:['7√3','7√6','10√3','√21'], answer:0, explain:'Like surds add like like terms: 7√3.'},
     {q:'Rationalizing 3/√5 gives:', options:['3√5','3√5/5','√15','3/5'], answer:1, explain:'Multiply top and bottom by √5: 3√5/5.'},
     {q:'Which is a surd?', options:['√4','√9','√3','√16'], answer:2, explain:'√3 cannot be simplified to a rational number; the rest are integers.'},
     {q:'√18 simplifies to:', options:['9√2','3√2','2√3','18'], answer:1, explain:'√18 = √(9×2) = 3√2.'},
     {q:'The conjugate of 2 + √3 is:', options:['2 − √3','−2 + √3','2 + √3','√3 − 2'], answer:0, explain:'The conjugate changes the sign between the terms: 2 − √3.'},
     {q:'(x + 1)/(x + 1) for x ≠ −1 equals:', options:['0','x + 1','1','x'], answer:2, explain:'Any non-zero expression divided by itself is 1.'}
   ]},
  {id:'sin-c9-mat-ch6', title:'Linear Equations', urdu:'خطی مساواتیں', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch6-l1', title:'Equations in One Variable', html:'<h3>Equations in One Variable</h3><p>A linear equation has the variable to power 1: 3x − 7 = 11 gives x = 6. Solve by doing the same operation to both sides — add, subtract, multiply or divide.</p><p>Equations with brackets need expanding first: 2(x − 3) = 10 → 2x − 6 = 10 → x = 8. Always check the answer by substitution.</p>'},
     {id:'sin-c9-mat-ch6-l2', title:'Simultaneous Linear Equations', html:'<h3>Simultaneous Linear Equations</h3><p>Two equations in x and y, e.g. x + y = 10 and x − y = 4, are solved together. Elimination: adding gives 2x = 14, so x = 7 and y = 3.</p><p>Substitution works too: from y = 2x, put into x + y = 12 to get 3x = 12, so x = 4, y = 8. Both methods give the same unique solution when lines cross.</p>'},
     {id:'sin-c9-mat-ch6-l3', title:'Word Problems', html:'<h3>Word Problems</h3><p>Translate words to equations: if a number plus its double is 27, then x + 2x = 27, so x = 9. Define the variable first.</p><p>Age, money and geometry problems all reduce to linear equations. After solving, check that the answer makes sense in the story.</p>'}
   ],
   quiz:[
     {q:'The solution of 3x − 7 = 11 is:', options:['x = 4','x = 6','x = 18','x = 2'], answer:1, explain:'3x = 18, so x = 6.'},
     {q:'Solving 2(x − 3) = 10 gives:', options:['x = 2','x = 8','x = 5','x = 7'], answer:1, explain:'2x − 6 = 10 → 2x = 16 → x = 8.'},
     {q:'For x + y = 10 and x − y = 4, x equals:', options:['3','7','6','4'], answer:1, explain:'Adding: 2x = 14 → x = 7 (and y = 3).'},
     {q:'For the same system, y equals:', options:['3','7','10','4'], answer:0, explain:'y = 10 − x = 10 − 7 = 3.'},
     {q:'A number plus its double is 27. The number is:', options:['9','18','13.5','6'], answer:0, explain:'x + 2x = 27 → 3x = 27 → x = 9.'},
     {q:'The solution of x/3 + 2 = 5 is:', options:['x = 1','x = 9','x = 21','x = 3'], answer:1, explain:'x/3 = 3 → x = 9.'},
     {q:'Elimination method works by:', options:['graphing lines','cancelling one variable by adding/subtracting','guessing','factoring'], answer:1, explain:'Adding or subtracting equations eliminates one variable.'},
     {q:'If 5x = 2x + 12, then x equals:', options:['2','4','6','12'], answer:1, explain:'3x = 12 → x = 4.'},
     {q:'Two lines that never meet represent:', options:['one solution','no solution','infinite solutions','two solutions'], answer:1, explain:'Parallel distinct lines never intersect — no simultaneous solution.'},
     {q:'The sum of two consecutive integers is 31. The smaller is:', options:['14','15','16','17'], answer:1, explain:'x + (x+1) = 31 → 2x = 30 → x = 15.'}
   ]},
  {id:'sin-c9-mat-ch7', title:'Linear Graphs and their Applications', urdu:'خطی گراف اور ان کے استعمالات', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch7-l1', title:'The Cartesian Plane', html:'<h3>The Cartesian Plane</h3><p>Two perpendicular number lines form the x-axis (horizontal) and y-axis (vertical), meeting at the origin (0, 0). A point (3, −2) is 3 right and 2 down.</p><p>The plane splits into four quadrants. Plotting points correctly is the foundation of all graph work.</p>'},
     {id:'sin-c9-mat-ch7-l2', title:'Graph of a Linear Equation', html:'<h3>Graph of a Linear Equation</h3><p>The graph of y = 2x + 1 is a straight line: make a table of x-values, compute y, plot and join. The form y = mx + c shows gradient m and y-intercept c.</p><p>Gradient m = rise/run = (y₂ − y₁)/(x₂ − x₁). For y = 3x − 2 the gradient is 3 and the line crosses the y-axis at −2.</p>'},
     {id:'sin-c9-mat-ch7-l3', title:'Applications', html:'<h3>Applications</h3><p>Graphs solve equations visually: the x-intercept of y = 2x − 6 is where y = 0, i.e. x = 3. Distance-time graphs show speed as the gradient.</p><p>Conversion graphs (e.g. rupees to dollars) let you read values directly. Two lines’ intersection point solves simultaneous equations graphically.</p>'}
   ],
   quiz:[
     {q:'The point (3, −2) lies in:', options:['quadrant I','quadrant II','quadrant III','quadrant IV'], answer:3, explain:'Positive x and negative y is quadrant IV.'},
     {q:'In y = mx + c, m represents the:', options:['y-intercept','x-intercept','gradient','origin'], answer:2, explain:'m is the gradient (slope); c is the y-intercept.'},
     {q:'The gradient of the line through (1, 2) and (3, 8) is:', options:['2','3','4','6'], answer:2, explain:'m = (8−2)/(3−1) = 6/2 = 3.'},
     {q:'The y-intercept of y = 3x − 2 is:', options:['3','−2','2','0'], answer:1, explain:'c = −2 is where the line crosses the y-axis.'},
     {q:'The graph of y = 5 is a:', options:['vertical line','horizontal line','diagonal line','curve'], answer:1, explain:'y = constant is horizontal; x = constant is vertical.'},
     {q:'The x-intercept of y = 2x − 6 is:', options:['(0, −6)','(3, 0)','(−3, 0)','(0, 3)'], answer:1, explain:'Set y = 0: 2x − 6 = 0 → x = 3.'},
     {q:'Two parallel lines have:', options:['equal gradients','equal intercepts','different gradients','no gradient'], answer:0, explain:'Parallel lines rise at the same rate — equal gradients.'},
     {q:'The origin has coordinates:', options:['(1, 1)','(0, 0)','(1, 0)','(0, 1)'], answer:1, explain:'The axes meet at (0, 0).'},
     {q:'A distance-time graph’s gradient gives:', options:['acceleration','speed','distance','time'], answer:1, explain:'Speed = distance ÷ time = slope of the graph.'},
     {q:'The point where two graphed lines cross gives the:', options:['gradient','solution of simultaneous equations','intercept','origin'], answer:1, explain:'The intersection satisfies both equations at once.'}
   ]},
  {id:'sin-c9-mat-ch8', title:'Quadratic Equations', urdu:'دو درجی مساواتیں', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch8-l1', title:'Standard Form', html:'<h3>Standard Form</h3><p>A quadratic equation has the form ax² + bx + c = 0 with a ≠ 0. The x² term is what makes it quadratic; 3x² − 5x + 2 = 0 is in standard form.</p><p>A quadratic can have two, one or no real solutions. The solutions are also called roots or zeros of the equation.</p>'},
     {id:'sin-c9-mat-ch8-l2', title:'Solving by Factorization', html:'<h3>Solving by Factorization</h3><p>Split into factors and set each to zero: x² + 5x + 6 = 0 → (x + 2)(x + 3) = 0, so x = −2 or x = −3. Each factor gives one root.</p><p>Always bring everything to one side first: x² = 4x becomes x² − 4x = 0 → x(x − 4) = 0, so x = 0 or x = 4.</p>'},
     {id:'sin-c9-mat-ch8-l3', title:'Quadratic Formula', html:'<h3>Quadratic Formula</h3><p>When factorization is hard, use x = (−b ± √(b² − 4ac)) / 2a. For x² + 4x + 2 = 0: x = (−4 ± √8)/2 = −2 ± √2.</p><p>The formula always works. Completing the square is the method behind it: x² + 6x = (x + 3)² − 9.</p>'}
   ],
   quiz:[
     {q:'Which is a quadratic equation?', options:['2x + 3 = 0','x² − 5x + 6 = 0','x³ + 1 = 0','1/x = 2'], answer:1, explain:'A quadratic has the highest power of x equal to 2.'},
     {q:'The roots of x² + 5x + 6 = 0 are:', options:['2 and 3','−2 and −3','−2 and 3','2 and −3'], answer:1, explain:'(x+2)(x+3) = 0 gives x = −2 or x = −3.'},
     {q:'The roots of x² − 9 = 0 are:', options:['3 only','−3 only','3 and −3','9 and −9'], answer:2, explain:'x² = 9 → x = ±3.'},
     {q:'Using the quadratic formula for x² + 4x + 3 = 0, the roots are:', options:['−1 and −3','1 and 3','−1 and 3','1 and −3'], answer:0, explain:'x = (−4 ± √(16−12))/2 = (−4 ± 2)/2 = −1 or −3.'},
     {q:'In ax² + bx + c = 0, if a = 0 the equation becomes:', options:['quadratic','cubic','linear','impossible'], answer:2, explain:'Without the x² term it is a linear equation.'},
     {q:'The product of the roots of x² − 7x + 12 = 0 is:', options:['7','12','−7','−12'], answer:1, explain:'Product = c/a = 12; the roots are 3 and 4.'},
     {q:'x² = 4x has roots:', options:['0 and 4','4 only','0 only','2 and −2'], answer:0, explain:'x² − 4x = 0 → x(x−4) = 0 → x = 0 or 4.'},
     {q:'The discriminant b² − 4ac tells:', options:['the sum of roots','the nature of roots','the product of roots','the vertex'], answer:1, explain:'Its sign decides whether roots are real/distinct, equal or non-real.'},
     {q:'For 2x² + 3x − 2 = 0, a, b, c are:', options:['2, 3, −2','2, 3, 2','−2, 3, 2','2, −3, −2'], answer:0, explain:'Standard form gives a = 2, b = 3, c = −2.'},
     {q:'Completing the square: x² + 6x = (x + 3)² − __.', options:['6','9','3','36'], answer:1, explain:'(x+3)² = x² + 6x + 9, so subtract 9 to match.'}
   ]},
  {id:'sin-c9-mat-ch9', title:'Congruent Triangles', urdu:'ہم شکل مثلثیں', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch9-l1', title:'What Congruence Means', html:'<h3>What Congruence Means</h3><p>Two figures are congruent if one fits exactly over the other — same shape and same size. Congruent triangles have all three sides and all three angles equal.</p><p>The symbol ≅ means congruent. Order of vertices matters: ΔABC ≅ ΔDEF means A matches D, B matches E, C matches F.</p>'},
     {id:'sin-c9-mat-ch9-l2', title:'Congruence Conditions', html:'<h3>Congruence Conditions</h3><p>SSS: three sides equal. SAS: two sides and the included angle equal. ASA: two angles and the included side equal. AAS: two angles and a non-included side equal.</p><p>RHS: for right triangles, hypotenuse and one side equal. These five tests prove congruence without measuring everything.</p>'},
     {id:'sin-c9-mat-ch9-l3', title:'Using Congruence', html:'<h3>Using Congruence</h3><p>Congruence proves properties: in an isosceles triangle, base angles are equal (prove via SAS with the symmetry line). Construction problems use SSS to copy triangles.</p><p>In proofs, first state which test applies, then match the parts. Always give reasons, e.g. ‘vertically opposite angles’ or ‘common side’.</p>'}
   ],
   quiz:[
     {q:'Congruent triangles have:', options:['same shape only','same size only','same shape and size','same area only'], answer:2, explain:'Congruent means identical in both shape and size.'},
     {q:'SAS stands for:', options:['side-angle-side','side-and-side','sum-of-angles','square-and-side'], answer:0, explain:'Two sides and the included angle.'},
     {q:'Which is NOT a congruence test?', options:['SSS','SAS','AAA','RHS'], answer:2, explain:'AAA gives similarity, not congruence — angles alone don’t fix size.'},
     {q:'RHS applies to:', options:['all triangles','right-angled triangles','isosceles triangles','equilateral triangles'], answer:1, explain:'Right-angle, Hypotenuse, Side — for right triangles.'},
     {q:'In ΔABC ≅ ΔDEF, side AB corresponds to:', options:['DE','DF','EF','BC'], answer:0, explain:'Order matters: A↔D, B↔E, so AB ↔ DE.'},
     {q:'ASA needs:', options:['two sides and an angle','two angles and the included side','three angles','hypotenuse and side'], answer:1, explain:'Angle-Side-Angle with the side between the two angles.'},
     {q:'Base angles of an isosceles triangle are:', options:['90°','equal','60°','supplementary'], answer:1, explain:'Angles opposite the equal sides are equal.'},
     {q:'If two triangles have all three sides equal, they are congruent by:', options:['SAS','SSS','ASA','AAS'], answer:1, explain:'Side-Side-Side.'},
     {q:'Vertically opposite angles are:', options:['supplementary','equal','90°','different'], answer:1, explain:'Vertical angles formed by intersecting lines are always equal.'},
     {q:'AAS differs from ASA in that:', options:['the side is not between the angles','three angles are used','it needs right angles','it is not valid'], answer:0, explain:'In AAS the known side is not the included side.'}
   ]},
  {id:'sin-c9-mat-ch10', title:'Parallelogram and Triangle', urdu:'متوازی الاضلاع اور مثلث', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch10-l1', title:'Properties of a Parallelogram', html:'<h3>Properties of a Parallelogram</h3><p>A parallelogram has both pairs of opposite sides parallel. Its properties: opposite sides equal, opposite angles equal, diagonals bisect each other.</p><p>A rectangle, rhombus and square are all special parallelograms. In a rectangle diagonals are equal; in a rhombus diagonals are perpendicular bisectors.</p>'},
     {id:'sin-c9-mat-ch10-l2', title:'Proving a Parallelogram', html:'<h3>Proving a Parallelogram</h3><p>A quadrilateral is a parallelogram if: both pairs of opposite sides are equal, or both pairs of opposite angles are equal, or diagonals bisect each other, or one pair of opposite sides is equal and parallel.</p><p>These tests let you prove a shape is a parallelogram from minimal information, which is the heart of geometry proofs.</p>'},
     {id:'sin-c9-mat-ch10-l3', title:'Triangles and Midpoints', html:'<h3>Triangles and Midpoints</h3><p>The line joining the midpoints of two sides of a triangle is parallel to the third side and half its length (midpoint theorem). This is proved using congruent triangles.</p><p>Parallelograms on the same base and between the same parallels have equal area — a key result used in area theorems later.</p>'}
   ],
   quiz:[
     {q:'Opposite angles of a parallelogram are:', options:['supplementary','equal','90°','complementary'], answer:1, explain:'A defining property: opposite angles are equal.'},
     {q:'Diagonals of a parallelogram:', options:['are equal','bisect each other','are perpendicular','are parallel'], answer:1, explain:'The diagonals cut each other in half.'},
     {q:'Which is NOT always a parallelogram?', options:['rectangle','rhombus','square','trapezium'], answer:3, explain:'A trapezium has only one pair of parallel sides.'},
     {q:'Diagonals of a rectangle are:', options:['perpendicular','equal','parallel','unequal'], answer:1, explain:'Rectangle diagonals are equal in length (and bisect each other).'},
     {q:'A quadrilateral with one pair of opposite sides equal and parallel is a:', options:['trapezium','parallelogram','kite','rhombus'], answer:1, explain:'One pair both equal and parallel is enough to prove a parallelogram.'},
     {q:'The midpoint theorem says the segment joining midpoints is:', options:['equal to the third side','half the third side and parallel to it','perpendicular to it','twice the third side'], answer:1, explain:'It is parallel to the third side and half its length.'},
     {q:'Diagonals of a rhombus:', options:['are equal','bisect each other at right angles','are parallel','never meet'], answer:1, explain:'Rhombus diagonals are perpendicular bisectors of each other.'},
     {q:'Adjacent angles of a parallelogram are:', options:['equal','supplementary','complementary','90°'], answer:1, explain:'Consecutive angles add to 180° (co-interior angles).'},
     {q:'A square is a special:', options:['trapezium only','rectangle and rhombus','kite only','triangle'], answer:1, explain:'A square has all rectangle and rhombus properties.'},
     {q:'If both pairs of opposite sides of a quadrilateral are equal, it is a:', options:['kite','parallelogram','trapezium','isosceles triangle'], answer:1, explain:'Equal opposite sides is a valid parallelogram test.'}
   ]},
  {id:'sin-c9-mat-ch11', title:'Line Bisectors and Angle Bisectors', urdu:'خطی ناصف اور زاویائی ناصف', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch11-l1', title:'Perpendicular Bisectors', html:'<h3>Perpendicular Bisectors</h3><p>The perpendicular bisector of a segment is the line at right angles through its midpoint. Every point on it is equidistant from the segment’s endpoints.</p><p>Construction: with compass arcs from both endpoints, join the intersection points. This is used to find circumcentres of triangles.</p>'},
     {id:'sin-c9-mat-ch11-l2', title:'Angle Bisectors', html:'<h3>Angle Bisectors</h3><p>An angle bisector divides an angle into two equal parts. Every point on it is equidistant from the angle’s sides.</p><p>Construction: arc from the vertex, then equal arcs from where it cuts the sides; join their intersection to the vertex. The three angle bisectors of a triangle meet at the incentre.</p>'},
     {id:'sin-c9-mat-ch11-l3', title:'Applications in Triangles', html:'<h3>Applications in Triangles</h3><p>The perpendicular bisectors of a triangle’s sides meet at the circumcentre — the centre of the circle through all three vertices.</p><p>The angle bisectors meet at the incentre — the centre of the inscribed circle touching all three sides. These centres are key in practical geometry.</p>'}
   ],
   quiz:[
     {q:'A perpendicular bisector:', options:['halves an angle','cuts a segment at 90° through its midpoint','joins two midpoints','is always horizontal'], answer:1, explain:'It is perpendicular to the segment at its midpoint.'},
     {q:'Every point on a perpendicular bisector is equidistant from the:', options:['segment’s endpoints','angle’s sides','triangle’s vertices','origin'], answer:0, explain:'That equidistance property defines the perpendicular bisector.'},
     {q:'An angle bisector divides an angle into:', options:['three parts','two equal parts','four parts','unequal parts'], answer:1, explain:'Bisect means cut into two equal halves.'},
     {q:'The three angle bisectors of a triangle meet at the:', options:['circumcentre','incentre','centroid','orthocentre'], answer:1, explain:'The incentre is equidistant from all sides — centre of the incircle.'},
     {q:'The three perpendicular bisectors of a triangle meet at the:', options:['incentre','circumcentre','centroid','orthocentre'], answer:1, explain:'The circumcentre is equidistant from all vertices — centre of the circumcircle.'},
     {q:'The incentre is the centre of the circle:', options:['through the vertices','touching all three sides','with diameter as a side','outside the triangle'], answer:1, explain:'The incircle touches each side once.'},
     {q:'To construct a perpendicular bisector you need:', options:['a ruler only','a compass and ruler','a protractor only','a set square only'], answer:1, explain:'Compass arcs from each endpoint locate the bisector line.'},
     {q:'The circumcentre of a right triangle lies at the:', options:['right-angle vertex','midpoint of the hypotenuse','incentre','centroid'], answer:1, explain:'The hypotenuse is the diameter of the circumcircle (Thales).'},
     {q:'Points on an angle bisector are equidistant from the angle’s:', options:['vertex','sides','base','opposite side'], answer:1, explain:'Equidistance from the two arms defines the bisector.'},
     {q:'Bisecting a 90° angle gives two angles of:', options:['30°','45°','60°','90°'], answer:1, explain:'90° ÷ 2 = 45° each.'}
   ]},
  {id:'sin-c9-mat-ch12', title:'Sides and Angles of a Triangle', urdu:'مثلث کے اضلاع اور زاویے', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch12-l1', title:'Angle Sum and Exterior Angle', html:'<h3>Angle Sum and Exterior Angle</h3><p>The three interior angles of any triangle add to 180°. An exterior angle equals the sum of the two opposite interior angles.</p><p>So if two angles are 50° and 60°, the third is 70°, and each exterior angle at those vertices is 180° minus the interior angle.</p>'},
     {id:'sin-c9-mat-ch12-l2', title:'Sides and Opposite Angles', html:'<h3>Sides and Opposite Angles</h3><p>In any triangle, the longer side lies opposite the larger angle. In ΔABC, if AB > AC then angle C > angle B.</p><p>The triangle inequality: the sum of any two sides must exceed the third side. Sides 3, 4, 8 cannot form a triangle since 3 + 4 < 8.</p>'},
     {id:'sin-c9-mat-ch12-l3', title:'Pythagoras’ Theorem', html:'<h3>Pythagoras’ Theorem</h3><p>In a right triangle, hypotenuse² = base² + perpendicular² (a² + b² = c²). For sides 3 and 4, the hypotenuse is 5.</p><p>The converse also holds: if a² + b² = c², the triangle is right-angled. Triples like (5, 12, 13) satisfy it.</p>'}
   ],
   quiz:[
     {q:'The sum of interior angles of a triangle is:', options:['90°','180°','270°','360°'], answer:1, explain:'The angle-sum property: 180°.'},
     {q:'An exterior angle of a triangle equals:', options:['the adjacent interior angle','sum of the two opposite interior angles','90°','180°'], answer:1, explain:'Exterior angle theorem.'},
     {q:'Two angles of a triangle are 50° and 60°. The third is:', options:['70°','80°','60°','110°'], answer:0, explain:'180° − 50° − 60° = 70°.'},
     {q:'The longer side of a triangle lies opposite the:', options:['smaller angle','larger angle','right angle','exterior angle'], answer:1, explain:'Side length and opposite angle increase together.'},
     {q:'Can sides 3, 4, 8 form a triangle?', options:['yes','no','sometimes','only right'], answer:1, explain:'3 + 4 = 7 < 8, violating the triangle inequality.'},
     {q:'In a right triangle with legs 3 and 4, the hypotenuse is:', options:['5','7','12','25'], answer:0, explain:'√(9+16) = √25 = 5.'},
     {q:'If a² + b² = c², the triangle is:', options:['acute','right-angled','obtuse','equilateral'], answer:1, explain:'The converse of Pythagoras’ theorem.'},
     {q:'Which is a Pythagorean triple?', options:['(2,3,4)','(5,12,13)','(4,5,6)','(6,7,8)'], answer:1, explain:'5² + 12² = 25 + 144 = 169 = 13².'},
     {q:'The hypotenuse is the side:', options:['adjacent to 90°','opposite the right angle','shortest','any side'], answer:1, explain:'The hypotenuse lies opposite the right angle and is the longest side.'},
     {q:'An equilateral triangle has each angle:', options:['90°','60°','45°','180°'], answer:1, explain:'180° ÷ 3 = 60° each.'}
   ]},
  {id:'sin-c9-mat-ch13', title:'Practical Geometry - Triangles', urdu:'عملی ہندسہ - مثلثیں', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch13-l1', title:'Basic Constructions', html:'<h3>Basic Constructions</h3><p>With ruler and compass you can construct: a triangle given three sides (SSS), two sides and included angle (SAS), or two angles and a side (ASA).</p><p>Draw the base first, then use compass arcs for the other sides. The arcs’ intersection is the third vertex.</p>'},
     {id:'sin-c9-mat-ch13-l2', title:'Constructing Special Triangles', html:'<h3>Constructing Special Triangles</h3><p>An equilateral triangle: draw the base, then arcs of the same radius from each end — they meet at the apex. All angles are 60°.</p><p>A right triangle: construct a perpendicular at one end of the base, mark the height, and join. Bisectors from the last chapter locate incentres and circumcentres.</p>'},
     {id:'sin-c9-mat-ch13-l3', title:'Accuracy and Verification', html:'<h3>Accuracy and Verification</h3><p>Sharp pencils, firm compasses and light construction lines give accurate figures. Measure the finished triangle to check against given data.</p><p>Construction is exact in theory; small drawing errors are normal. Always label vertices and write the steps of construction.</p>'}
   ],
   quiz:[
     {q:'To construct a triangle by SSS you need:', options:['three angles','three sides','two sides and an angle','a protractor'], answer:1, explain:'Side-Side-Side: all three lengths given.'},
     {q:'The first step in triangle construction is usually:', options:['draw the base','draw the apex','measure angles','draw a circle'], answer:0, explain:'Start with the base segment, then locate the third vertex with arcs.'},
     {q:'An equilateral triangle is constructed using arcs of:', options:['different radii','radius equal to the base','half the base','double the base'], answer:1, explain:'Equal radii from each base endpoint give equal sides.'},
     {q:'Which instrument is essential for constructions?', options:['protractor','compass','calculator','set square only'], answer:1, explain:'The compass draws the arcs that locate points exactly.'},
     {q:'SAS construction needs:', options:['two angles','two sides and the included angle','three sides','one side only'], answer:1, explain:'Side-Angle-Side with the angle between the two sides.'},
     {q:'To construct a 90° angle at a point, you first:', options:['guess','construct a perpendicular','draw a circle','measure with ruler'], answer:1, explain:'A perpendicular gives the right angle for right-triangle constructions.'},
     {q:'The circumcentre is found by constructing:', options:['angle bisectors','perpendicular bisectors of sides','medians','altitudes'], answer:1, explain:'Perpendicular bisectors meet at the circumcentre.'},
     {q:'Light construction lines are used because:', options:['they look nice','they can be erased and don’t clutter','they are faster','they are darker'], answer:1, explain:'Faint lines keep the final figure clean.'},
     {q:'After construction, you should:', options:['ink everything','verify measurements against given data','erase all lines','start over'], answer:1, explain:'Checking confirms the construction is correct.'},
     {q:'ASA construction needs:', options:['two angles and the included side','three sides','two sides','one angle'], answer:0, explain:'Angle-Side-Angle: the side between the two known angles.'}
   ]},
  {id:'sin-c9-mat-ch14', title:'Theorems Related with Area', urdu:'رقبے سے متعلق قضیے', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch14-l1', title:'Area of Parallelograms', html:'<h3>Area of Parallelograms</h3><p>Parallelograms on the same base and between the same parallels have equal area. Sliding the top side sideways does not change the area.</p><p>Area of a parallelogram = base × height. Rectangles with the same base and height as a slanted parallelogram have equal areas.</p>'},
     {id:'sin-c9-mat-ch14-l2', title:'Area of Triangles', html:'<h3>Area of Triangles</h3><p>Triangles on the same base and between the same parallels have equal area. Area of a triangle = ½ × base × height.</p><p>A triangle and parallelogram on the same base and between the same parallels: the triangle’s area is half the parallelogram’s. The median of a triangle divides it into two equal areas.</p>'},
     {id:'sin-c9-mat-ch14-l3', title:'Using Area Theorems', html:'<h3>Using Area Theorems</h3><p>These theorems prove results without measuring: e.g. the diagonals of a parallelogram divide it into four triangles of equal area.</p><p>Area reasoning also solves construction and mensuration problems where direct measurement is hard.</p>'}
   ],
   quiz:[
     {q:'Parallelograms on the same base and between the same parallels have:', options:['equal perimeters','equal areas','equal diagonals','equal sides'], answer:1, explain:'Same base and height means same area, whatever the slant.'},
     {q:'Area of a parallelogram equals:', options:['base + height','base × height','½ × base × height','base²'], answer:1, explain:'Area = base × perpendicular height.'},
     {q:'Area of a triangle equals:', options:['base × height','½ × base × height','base + height','base²'], answer:1, explain:'A triangle is half the parallelogram on the same base and height.'},
     {q:'A median of a triangle divides it into:', options:['two unequal parts','two triangles of equal area','four parts','two parallelograms'], answer:1, explain:'Same base halves and same height give equal areas.'},
     {q:'Triangles on the same base and between the same parallels:', options:['have equal area','are congruent','have equal perimeter','are similar'], answer:0, explain:'Equal base and equal height → equal area (not necessarily congruent).'},
     {q:'A triangle and parallelogram on the same base and parallels: triangle’s area is:', options:['equal','half','double','one-fourth'], answer:1, explain:'The triangle is exactly half the parallelogram’s area.'},
     {q:'Diagonals of a parallelogram divide it into:', options:['2 equal triangles','4 triangles of equal area','4 congruent squares','3 parts'], answer:1, explain:'The four triangles formed have equal area (opposite ones congruent).'},
     {q:'If base = 8 cm and height = 5 cm, the triangle’s area is:', options:['40 cm²','20 cm²','13 cm²','26 cm²'], answer:1, explain:'½ × 8 × 5 = 20 cm².'},
     {q:'The height used in area formulas must be:', options:['any side','perpendicular to the base','the longest side','slanted'], answer:1, explain:'Height is the perpendicular distance between the parallels.'},
     {q:'Two congruent figures always have:', options:['equal area','equal perimeter only','same position','equal area and perimeter'], answer:0, explain:'Congruent figures coincide, so their areas are equal (the converse is false).'}
   ]},
  {id:'sin-c9-mat-ch15', title:'Projection of a Side of a Triangle', urdu:'مثلث کے ضلع کا عکس', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch15-l1', title:'What Is a Projection', html:'<h3>What Is a Projection</h3><p>The projection of a segment onto a line is the ‘shadow’ it casts perpendicularly onto that line. Dropping perpendiculars from the endpoints gives the projection.</p><p>In ΔABC, the projection of AB onto AC is found by dropping a perpendicular from B to line AC. Projections link Pythagoras’ theorem to general triangles.</p>'},
     {id:'sin-c9-mat-ch15-l2', title:'Projection Formulae', html:'<h3>Projection Formulae</h3><p>In any triangle: a² = b² + c² − 2b × (projection of c onto b) for an acute angle, with + for obtuse. These extend Pythagoras beyond right triangles.</p><p>If D is the foot of the altitude from B onto AC, then AB² = AD² + BD² and BC² = DC² + BD² — two Pythagoras applications giving the projection relations.</p>'},
     {id:'sin-c9-mat-ch15-l3', title:'Using Projections', html:'<h3>Using Projections</h3><p>Projection results find unknown sides without full trigonometry. They also prove the cosine rule geometrically.</p><p>Recognizing right triangles inside a figure (via altitudes) is the key skill: split, apply Pythagoras, and combine.</p>'}
   ],
   quiz:[
     {q:'The projection of a segment is found by dropping:', options:['parallel lines','perpendiculars to the line','angle bisectors','medians'], answer:1, explain:'Perpendicular ‘shadows’ from the endpoints define the projection.'},
     {q:'Projection formulae generalize:', options:['angle sum','Pythagoras’ theorem','triangle inequality','midpoint theorem'], answer:1, explain:'They extend a² + b² = c² to acute and obtuse triangles.'},
     {q:'In a right triangle, the projection of a leg onto the hypotenuse:', options:['equals the leg','is found via similar triangles','is zero','equals the hypotenuse'], answer:1, explain:'Altitude-to-hypotenuse creates similar triangles giving projection relations.'},
     {q:'The foot of an altitude is where it:', options:['bisects the side','meets the side at 90°','meets the vertex','ends'], answer:1, explain:'The foot is the point where the perpendicular meets the base line.'},
     {q:'If angle B is obtuse, the projection formula uses:', options:['minus','plus','zero','division'], answer:1, explain:'Obtuse angles add the projection term: a² = b² + c² + 2b(projection).'},
     {q:'An altitude of a triangle:', options:['bisects the base always','is perpendicular to the base','equals the median','is the longest side'], answer:1, explain:'Altitude = perpendicular from a vertex to the opposite side.'},
     {q:'In ΔABC right-angled at B, the projection of AB onto AC is:', options:['AB','BC','AD where D is the altitude foot','AC'], answer:2, explain:'Dropping the altitude from B to hypotenuse AC gives projection AD.'},
     {q:'Projection of a side onto a perpendicular line is:', options:['the full side','zero','half the side','double'], answer:1, explain:'A segment perpendicular to the line casts no ‘shadow’ — zero length.'},
     {q:'Which creates the right triangles used in projection proofs?', options:['medians','altitudes','bisectors','diagonals'], answer:1, explain:'Altitudes drop perpendiculars, forming right triangles for Pythagoras.'},
     {q:'The cosine rule is closely related to:', options:['angle bisectors','projection formulae','congruence','parallel lines'], answer:1, explain:'Both express a side via the other sides and the included angle’s projection.'}
   ]},
  {id:'sin-c9-mat-ch16', title:'Coordinate Geometry', urdu:'مختص ہندسہ', comingSoon:false,
   lessons:[
     {id:'sin-c9-mat-ch16-l1', title:'Distance Formula', html:'<h3>Distance Formula</h3><p>The distance between P(x₁, y₁) and Q(x₂, y₂) is d = √((x₂−x₁)² + (y₂−y₁)²), from Pythagoras. Distance from the origin to (x, y) is √(x² + y²).</p><p>Example: distance between (1, 2) and (4, 6) is √(9+16) = 5. The formula proves whether a triangle is isosceles or right-angled from coordinates.</p>'},
     {id:'sin-c9-mat-ch16-l2', title:'Midpoint and Section Formulae', html:'<h3>Midpoint and Section Formulae</h3><p>The midpoint of PQ is ((x₁+x₂)/2, (y₁+y₂)/2) — the average of the coordinates. The midpoint of (2, 4) and (6, 10) is (4, 7).</p><p>The section formula extends this to any ratio. Midpoints help find centres of line segments and diagonals of quadrilaterals.</p>'},
     {id:'sin-c9-mat-ch16-l3', title:'Gradient and Collinearity', html:'<h3>Gradient and Collinearity</h3><p>Gradient m = (y₂−y₁)/(x₂−x₁) measures steepness. Parallel lines have equal gradients; perpendicular lines have gradients whose product is −1.</p><p>Three points are collinear if the gradient between each pair is equal. Coordinate geometry turns shape problems into algebra.</p>'}
   ],
   quiz:[
     {q:'The distance between (1, 2) and (4, 6) is:', options:['4','5','6','7'], answer:1, explain:'√((4−1)² + (6−2)²) = √(9+16) = 5.'},
     {q:'The midpoint of (2, 4) and (6, 10) is:', options:['(4, 7)','(8, 14)','(3, 5)','(4, 6)'], answer:0, explain:'((2+6)/2, (4+10)/2) = (4, 7).'},
     {q:'Distance from the origin to (3, 4) is:', options:['5','7','12','25'], answer:0, explain:'√(3² + 4²) = √25 = 5.'},
     {q:'The gradient of the line through (0, 1) and (2, 5) is:', options:['1','2','3','4'], answer:1, explain:'m = (5−1)/(2−0) = 4/2 = 2.'},
     {q:'Two perpendicular lines have gradients whose product is:', options:['1','−1','0','2'], answer:1, explain:'m₁ × m₂ = −1 for perpendicular lines.'},
     {q:'Points (0,0), (2,2), (4,4) are:', options:['collinear','forming a triangle','parallel','perpendicular'], answer:0, explain:'Equal gradients (all 1) mean they lie on one straight line.'},
     {q:'Parallel lines have:', options:['equal gradients','gradients with product −1','zero gradient','no gradient'], answer:0, explain:'Parallel lines rise at the same rate.'},
     {q:'The distance formula is derived from:', options:['angle sum','Pythagoras’ theorem','midpoint formula','gradient'], answer:1, explain:'The coordinate differences form the legs of a right triangle.'},
     {q:'The midpoint formula takes the:', options:['difference of coordinates','average of coordinates','product of coordinates','sum of squares'], answer:1, explain:'Midpoint = average of x’s and average of y’s.'},
     {q:'A line with zero gradient is:', options:['vertical','horizontal','diagonal','curved'], answer:1, explain:'No rise means the line is horizontal (y = constant).'}
   ]}
]});
window.__saMergeCourse({id:'sin-class9-english', board:'sindh', title:'English', urdu:'انگریزی', class:'Class 9', icon:'📖', desc:'Sindh Board Class 9 English — full syllabus with lessons and quizzes.', chapters:[
  {id:'sin-c9-eng-ch1', title:'The Last Sermon of the Holy Prophet (PBUH)', urdu:'خطبہ حجۃ الوداع', comingSoon:false,
   lessons:[
     {id:'sin-c9-eng-ch1-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>This lesson presents the Farewell Sermon delivered by the Holy Prophet Muhammad (peace be upon him) on Mount Arafat during the last Hajj. It is a charter of human rights and equality.</p><p>Key teachings: all Muslims are brothers, no Arab is superior to a non-Arab, women’s rights must be honoured, and usury (interest) is forbidden.</p>'},
     {id:'sin-c9-eng-ch1-l2', title:'Vocabulary and Themes', html:'<h3>Vocabulary and Themes</h3><p>Important words: sermon (religious speech), usury (interest on loans), sanctuary (holy protected place), chattel (property, used of the old status of women).</p><p>The central theme is universal brotherhood and justice. The sermon ended the distinctions of race, colour and wealth among believers.</p>'},
     {id:'sin-c9-eng-ch1-l3', title:'Grammar Focus: Tenses', html:'<h3>Grammar Focus: Tenses</h3><p>The lesson uses past tense for historical narration: ‘He addressed a large gathering.’ Learn to change present into past: go → went, preach → preached.</p><p>Practice: reported speech and formal vocabulary. Exam questions often ask for a summary of the sermon’s main points in your own words.</p>'}
   ],
   quiz:[
     {q:'The Farewell Sermon was delivered on:', options:['Mount Uhud','Mount Arafat','Mount Hira','Mount Sinai'], answer:1, explain:'The Prophet (PBUH) addressed the gathering on Mount Arafat during Hajj.'},
     {q:'The sermon is called ‘Farewell’ because:', options:['it was short','it was the Prophet’s last Hajj sermon','it was in winter','it was private'], answer:1, explain:'It was delivered during the Prophet’s final Hajj, hence the Farewell Sermon.'},
     {q:'According to the sermon, no Arab is superior to a:', options:['non-Arab','king','scholar','trader'], answer:0, explain:'The sermon abolished racial superiority: ‘No Arab has superiority over a non-Arab.’'},
     {q:'Usury, forbidden in the sermon, means:', options:['theft','interest on loans','lying','gambling'], answer:1, explain:'Usury (riba) is interest charged on loans, declared forbidden.'},
     {q:'The sermon raised women from the status of:', options:['queens','chattel to legal equality','slaves to queens','workers to owners'], answer:1, explain:'Women were raised from the status of property (chattel) to complete legal equality.'},
     {q:'The sermon’s central theme is:', options:['war','universal brotherhood and justice','trade','poetry'], answer:1, explain:'Brotherhood, equality and justice are the sermon’s core message.'},
     {q:'The gathering addressed was of:', options:['traders','Muslim pilgrims','kings','poets'], answer:1, explain:'A very large gathering of Muslims performing Hajj listened to the sermon.'},
     {q:'‘He preached Islam’ — the past tense of preach is:', options:['preach','preached','preaching','preaches'], answer:1, explain:'Regular verbs add -ed: preach → preached.'},
     {q:'A sermon is:', options:['a poem','a religious speech','a letter','a story'], answer:1, explain:'A sermon is a religious address or discourse.'},
     {q:'The lesson teaches that all power belongs to:', options:['kings','God','tribes','wealth'], answer:1, explain:'The sermon’s Islamic society rests on: all power belongs to God.'}
   ]},
  {id:'sin-c9-eng-ch2', title:'Shah Abdul Latif', urdu:'شاہ عبداللطیف', comingSoon:false,
   lessons:[
     {id:'sin-c9-eng-ch2-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>This lesson is about Shah Abdul Latif Bhittai (1689–1752), the great Sindhi Sufi poet. His poetry collection, the Shah Jo Risalo, is loved across Sindh.</p><p>He travelled widely, met people of all classes, and used simple language to teach love, tolerance and devotion to God.</p>'},
     {id:'sin-c9-eng-ch2-l2', title:'His Message', html:'<h3>His Message</h3><p>Latif’s poetry praises honest labour, condemns hypocrisy, and celebrates the love between the soul and God. His heroines like Marvi and Sassui symbolize truth and courage.</p><p>His shrine at Bhit Shah is a centre of music and poetry where his verses are still sung. He is called the ‘saint-poet of Sindh’.</p>'},
     {id:'sin-c9-eng-ch2-l3', title:'Grammar Focus: Pronouns', html:'<h3>Grammar Focus: Pronouns</h3><p>Pronouns replace nouns: he, she, it, they. ‘Shah Latif wrote poetry. He is famous.’ — ‘He’ avoids repeating the name.</p><p>Possessive pronouns: his poetry, their songs. Exam practice: fill blanks with suitable pronouns and rewrite sentences using them.</p>'}
   ],
   quiz:[
     {q:'Shah Abdul Latif Bhittai was a:', options:['king','Sindhi Sufi poet','general','trader'], answer:1, explain:'He is the most beloved Sindhi Sufi poet, author of the Shah Jo Risalo.'},
     {q:'His poetry collection is called:', options:['Diwan-e-Ghalib','Shah Jo Risalo','Gulistan','Masnavi'], answer:1, explain:'The Shah Jo Risalo gathers his Sindhi verses.'},
     {q:'His shrine is at:', options:['Sehwan','Bhit Shah','Thatta','Hyderabad'], answer:1, explain:'Bhit Shah in Sindh hosts his shrine and annual urs.'},
     {q:'Latif’s poetry teaches:', options:['war','love, tolerance and devotion','trade','politics'], answer:1, explain:'His verses preach divine love, tolerance and honest living.'},
     {q:'‘Shah Latif wrote poetry. ___ is famous.’ The pronoun is:', options:['It','He','They','She'], answer:1, explain:'‘He’ replaces the masculine noun Shah Latif.'},
     {q:'Marvi and Sassui in his poetry symbolize:', options:['wealth','truth and courage','kings','cities'], answer:1, explain:'His heroines embody truth, love and moral courage.'},
     {q:'He is called the:', options:['king of poets','saint-poet of Sindh','poet of kings','warrior poet'], answer:1, explain:'His Sufi sainthood and poetry earned him this title.'},
     {q:'‘Their songs are sweet.’ ‘Their’ is a:', options:['personal pronoun','possessive pronoun','reflexive pronoun','demonstrative'], answer:1, explain:'Possessive pronouns show ownership: his, her, their.'},
     {q:'Latif used ___ language in his poetry.', options:['difficult Persian','simple language of the people','Arabic only','English'], answer:1, explain:'He wrote in simple Sindhi so common people could understand.'},
     {q:'Sufi poetry mainly expresses:', options:['love of God','love of money','fear of kings','trade secrets'], answer:0, explain:'Sufi verse centres on divine love and spiritual devotion.'}
   ]},
  {id:'sin-c9-eng-ch3', title:'Chasing Dreams', urdu:'خوابوں کا تعاقب', comingSoon:false,
   lessons:[
     {id:'sin-c9-eng-ch3-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>‘Chasing Dreams’ inspires students to set goals and work hard to achieve them. Dreams give direction; effort turns them into reality.</p><p>The lesson teaches that successful people face failures but never give up — persistence matters more than talent alone.</p>'},
     {id:'sin-c9-eng-ch3-l2', title:'Key Ideas', html:'<h3>Key Ideas</h3><p>Plan your dream: break a big goal into small steps, study regularly, and learn from mistakes. Time wasted today is opportunity lost.</p><p>The lesson uses examples of determined people to show that hard work beats luck. Positive thinking and discipline are the twin engines of success.</p>'},
     {id:'sin-c9-eng-ch3-l3', title:'Grammar Focus: Future Tense', html:'<h3>Grammar Focus: Future Tense</h3><p>Use will/shall for future: ‘I shall become a doctor.’ Going to for plans: ‘I am going to study tonight.’</p><p>Practice: write five sentences about your own dreams using future tense. Exam often asks for a paragraph on ‘My Aim in Life’.</p>'}
   ],
   quiz:[
     {q:'The lesson’s main message is:', options:['dreams are useless','set goals and work hard','luck decides everything','sleep more'], answer:1, explain:'It teaches goal-setting plus persistent hard work.'},
     {q:'Successful people treat failure as:', options:['the end','a lesson to learn from','bad luck','a joke'], answer:1, explain:'The lesson stresses learning from failures, not quitting.'},
     {q:'‘I ___ become a doctor.’ (future) The correct word is:', options:['become','shall','becoming','became'], answer:1, explain:'‘Shall’ (first person) expresses future intention.'},
     {q:'‘I am going to study tonight’ expresses:', options:['a habit','a plan','a dream only','the past'], answer:1, explain:'‘Going to’ is used for planned future actions.'},
     {q:'A big goal should be broken into:', options:['secrets','small steps','excuses','dreams'], answer:1, explain:'Small steps make big goals achievable.'},
     {q:'Which matters more than talent, according to the lesson?', options:['luck','persistence','money','looks'], answer:1, explain:'Persistence and hard work beat talent alone.'},
     {q:'Positive thinking helps because it:', options:['removes all problems','builds confidence and effort','guarantees luck','needs no work'], answer:1, explain:'A positive attitude sustains the effort success needs.'},
     {q:'Discipline means:', options:['doing what you like only','regular controlled effort','punishing others','avoiding work'], answer:1, explain:'Discipline is steady, organized effort toward the goal.'},
     {q:'‘She will win the prize.’ The tense is:', options:['past','present','future','perfect'], answer:2, explain:'‘Will’ marks the simple future tense.'},
     {q:'Time wasted today is:', options:['fun','opportunity lost','rest','study'], answer:1, explain:'The lesson warns that wasted time cannot be recovered.'}
   ]},
  {id:'sin-c9-eng-ch4', title:'The Great Visionaries', urdu:'عظیم دور اندیش', comingSoon:false,
   lessons:[
     {id:'sin-c9-eng-ch4-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>This lesson profiles great visionaries — leaders who saw the future and changed history, such as Quaid-e-Azam Muhammad Ali Jinnah and Allama Iqbal.</p><p>A visionary has foresight, courage and commitment. Jinnah’s vision gave Muslims of the subcontinent a homeland: Pakistan.</p>'},
     {id:'sin-c9-eng-ch4-l2', title:'Qualities of Visionaries', html:'<h3>Qualities of Visionaries</h3><p>Visionaries think beyond the present, inspire others, and stand firm under pressure. Iqbal’s poetry awakened the Muslim nation’s self-respect.</p><p>The lesson urges students to develop vision: study hard, think big, and serve the nation. Leadership begins with character.</p>'},
     {id:'sin-c9-eng-ch4-l3', title:'Grammar Focus: Adjectives', html:'<h3>Grammar Focus: Adjectives</h3><p>Adjectives describe nouns: great leader, brave nation. Degrees: great, greater, greatest — used to compare.</p><p>Practice: use adjectives to describe a national hero in a paragraph. Exam may ask for a character sketch using adjectives.</p>'}
   ],
   quiz:[
     {q:'A visionary is someone who:', options:['sees the future and leads change','lives in the past','avoids people','only dreams'], answer:0, explain:'Visionaries foresee possibilities and act to realize them.'},
     {q:'Pakistan was achieved under the leadership of:', options:['Allama Iqbal','Quaid-e-Azam','Shah Latif','Liaquat Ali Khan alone'], answer:1, explain:'Jinnah led the movement that created Pakistan in 1947.'},
     {q:'Iqbal awakened the nation through his:', options:['speeches only','poetry','paintings','trade'], answer:1, explain:'Iqbal’s Urdu and Persian poetry inspired Muslim self-awareness.'},
     {q:'‘Greater’ is the ___ degree of ‘great’.', options:['positive','comparative','superlative','none'], answer:1, explain:'Comparative compares two: greater; superlative: greatest.'},
     {q:'Which quality is NOT of a visionary?', options:['foresight','courage','selfishness','commitment'], answer:2, explain:'Visionaries serve a cause; selfishness contradicts vision.'},
     {q:'‘Brave nation’ — ‘brave’ is an:', options:['adverb','adjective','verb','pronoun'], answer:1, explain:'Adjectives describe nouns (nation).'},
     {q:'The superlative of ‘good’ is:', options:['gooder','best','better','goodest'], answer:1, explain:'Good → better → best (irregular).'},
     {q:'Leadership begins with:', options:['wealth','character','fame','power'], answer:1, explain:'The lesson teaches that character is the root of leadership.'},
     {q:'Jinnah’s vision gave Muslims:', options:['wealth','a homeland','poetry','trade'], answer:1, explain:'His vision materialized as Pakistan, a separate homeland.'},
     {q:'‘The greatest leader’ uses the:', options:['positive degree','comparative degree','superlative degree','no degree'], answer:2, explain:'‘Greatest’ is the superlative form.'}
   ]},
  {id:'sin-c9-eng-ch5', title:'Health Problems Caused by Mosquitoes', urdu:'مچھروں سے پیدا شدہ صحت کے مسائل', comingSoon:false,
   lessons:[
     {id:'sin-c9-eng-ch5-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>This lesson explains that mosquitoes spread dangerous diseases: malaria, dengue and chikungunya. The female Anopheles mosquito spreads malaria.</p><p>Symptoms of malaria include high fever, chills, sweating and headache. Dengue causes severe body pain — it is called ‘breakbone fever’.</p>'},
     {id:'sin-c9-eng-ch5-l2', title:'Prevention', html:'<h3>Prevention</h3><p>Prevent breeding: remove stagnant water from pots, tyres and coolers. Use mosquito nets, repellents and sprays; keep surroundings clean.</p><p>The lesson stresses community action: one dirty pool can breed mosquitoes for a whole neighbourhood. Cleanliness is the cheapest medicine.</p>'},
     {id:'sin-c9-eng-ch5-l3', title:'Grammar Focus: Active and Passive Voice', html:'<h3>Grammar Focus: Active and Passive Voice</h3><p>Active: ‘Mosquitoes spread malaria.’ Passive: ‘Malaria is spread by mosquitoes.’ The object becomes the subject.</p><p>Practice: change active sentences to passive. Exam often tests voice change from the lesson’s sentences.</p>'}
   ],
   quiz:[
     {q:'Malaria is spread by the:', options:['male Anopheles','female Anopheles','housefly','Aedes only'], answer:1, explain:'Only the female Anopheles mosquito transmits the malaria parasite.'},
     {q:'Dengue is also called:', options:['yellow fever','breakbone fever','black fever','red fever'], answer:1, explain:'Its severe body pain earned dengue the name ‘breakbone fever’.'},
     {q:'A malaria symptom is:', options:['high fever with chills','toothache','ear pain','hair loss'], answer:0, explain:'Cyclical high fever, chills and sweating mark malaria.'},
     {q:'Mosquitoes breed in:', options:['running water','stagnant water','dry sand','clean air'], answer:1, explain:'Still water in pots, tyres and pools is their nursery.'},
     {q:'‘Malaria is spread by mosquitoes’ is in:', options:['active voice','passive voice','future tense','direct speech'], answer:1, explain:'The object (malaria) became the subject — passive voice.'},
     {q:'The best community prevention is:', options:['more hospitals','removing stagnant water','importing medicine','closing schools'], answer:1, explain:'Destroying breeding sites stops mosquitoes at the source.'},
     {q:'Chikungunya is spread by:', options:['mosquitoes','dirty hands','cold air','dogs'], answer:0, explain:'Like dengue, it is a mosquito-borne viral disease.'},
     {q:'‘Mosquitoes spread malaria.’ The subject is:', options:['malaria','mosquitoes','spread','by'], answer:1, explain:'‘Mosquitoes’ performs the action — the subject.'},
     {q:'Using nets and repellents is:', options:['treatment','prevention','cure','surgery'], answer:1, explain:'They prevent bites, stopping disease before it starts.'},
     {q:'Cleanliness is called the cheapest medicine because it:', options:['costs nothing and prevents disease','needs doctors','uses tablets','builds hospitals'], answer:0, explain:'Prevention through cleanliness avoids costly treatment.'}
   ]},
  {id:'sin-c9-eng-ch6', title:'The Role of Women in Pakistan’s Creation and Development', urdu:'قیامِ پاکستان اور ترقی میں خواتین کا کردار', comingSoon:false,
   lessons:[
     {id:'sin-c9-eng-ch6-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>This lesson honours the women who worked beside men for Pakistan’s creation — organizing processions, raising funds and facing police baton charges.</p><p>Leaders like Fatima Jinnah (Madar-e-Millat) inspired women to join the freedom struggle. Women’s processions in Lahore defied bans bravely.</p>'},
     {id:'sin-c9-eng-ch6-l2', title:'After Independence', html:'<h3>After Independence</h3><p>Pakistani women served as teachers, doctors, nurses and legislators, building the new nation. Begum Rana Liaquat Ali Khan founded welfare organizations.</p><p>The lesson teaches that national progress needs both men and women. Educating girls multiplies a nation’s strength.</p>'},
     {id:'sin-c9-eng-ch6-l3', title:'Grammar Focus: Punctuation', html:'<h3>Grammar Focus: Punctuation</h3><p>Correct punctuation clarifies meaning: commas in lists, full stops at ends, capital letters for names like Fatima Jinnah and Pakistan.</p><p>Practice: punctuate a paragraph about a national heroine. Exams test punctuation through unseen sentences.</p>'}
   ],
   quiz:[
     {q:'Fatima Jinnah is titled:', options:['Madar-e-Millat','Quaid-e-Azam','Bibi Pak','Khatoon-e-Awwal'], answer:0, explain:'She is honoured as Madar-e-Millat (Mother of the Nation).'},
     {q:'Women’s processions in the freedom struggle were held in:', options:['Karachi','Delhi','Lahore','Dhaka'], answer:2, explain:'Lahore’s women defied bans and led famous processions.'},
     {q:'Begum Rana Liaquat Ali Khan founded:', options:['a bank','welfare organizations','a newspaper','a fort'], answer:1, explain:'She pioneered women’s welfare work after independence.'},
     {q:'The lesson’s message is that progress needs:', options:['men only','women only','both men and women','foreigners'], answer:2, explain:'National development requires the whole nation’s effort.'},
     {q:'‘Pakistan’ in a sentence begins with a capital P because it is a:', options:['common noun','proper noun','verb','adjective'], answer:1, explain:'Proper nouns (names) always take capital letters.'},
     {q:'Women faced ___ during the struggle.', options:['gifts','police baton charges','prizes','holidays'], answer:1, explain:'They bravely endured baton charges and arrests.'},
     {q:'Educating girls:', options:['wastes money','multiplies a nation’s strength','harms families','stops progress'], answer:1, explain:'An educated woman uplifts her whole family and nation.'},
     {q:'Which sentence is punctuated correctly?', options:['fatima jinnah was great.','Fatima Jinnah was great.','fatima Jinnah was great','Fatima jinnah was great.'], answer:1, explain:'Proper nouns take capitals and sentences end with full stops.'},
     {q:'Women raised ___ for the movement.', options:['funds','flags only','buildings','crops'], answer:0, explain:'They collected funds and organized support for the cause.'},
     {q:'The lesson honours women as:', options:['bystanders','partners in nation-building','opponents','outsiders'], answer:1, explain:'It presents women as equal partners in creating and developing Pakistan.'}
   ]},
  {id:'sin-c9-eng-ch7', title:'The Secret of Success', urdu:'کامیابی کا راز', comingSoon:false,
   lessons:[
     {id:'sin-c9-eng-ch7-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>‘The Secret of Success’ reveals that there is no magic formula: hard work, honesty, punctuality and perseverance are the real secrets.</p><p>The lesson contrasts successful people who toil daily with those who wait for luck. Luck favours the prepared mind.</p>'},
     {id:'sin-c9-eng-ch7-l2', title:'Stories of Achievers', html:'<h3>Stories of Achievers</h3><p>Examples show ordinary people rising through effort — a poor boy becoming a scholar, a worker becoming an officer. Character decides destiny.</p><p>The lesson warns against shortcuts and dishonesty: ill-gotten gains never last. True success includes peace of mind.</p>'},
     {id:'sin-c9-eng-ch7-l3', title:'Grammar Focus: Sentence Types', html:'<h3>Grammar Focus: Sentence Types</h3><p>Simple, compound and complex sentences: ‘He worked hard’ (simple); ‘He worked hard and he succeeded’ (compound); ‘Because he worked hard, he succeeded’ (complex).</p><p>Practice: combine pairs of simple sentences into complex ones. Exams test sentence combining and transformation.</p>'}
   ],
   quiz:[
     {q:'The real secret of success is:', options:['luck','hard work and honesty','magic','wealth'], answer:1, explain:'The lesson names effort, honesty and perseverance as the true secrets.'},
     {q:'‘Luck favours the ___ mind.’', options:['lazy','prepared','rich','young'], answer:1, explain:'Prepared people can seize opportunities when they come.'},
     {q:'‘He worked hard and he succeeded’ is a:', options:['simple sentence','compound sentence','complex sentence','phrase'], answer:1, explain:'Two independent clauses joined by ‘and’ make it compound.'},
     {q:'‘Because he worked hard, he succeeded’ is a:', options:['simple sentence','compound sentence','complex sentence','question'], answer:2, explain:'A dependent clause plus an independent clause make it complex.'},
     {q:'Shortcuts to success:', options:['always work','never last','are the best way','need no effort'], answer:1, explain:'Dishonest shortcuts collapse; only earned success endures.'},
     {q:'True success includes:', options:['money only','peace of mind','fame only','power only'], answer:1, explain:'The lesson counts inner peace as part of real success.'},
     {q:'Perseverance means:', options:['giving up','continuing despite difficulties','resting','complaining'], answer:1, explain:'Steady persistence through obstacles defines perseverance.'},
     {q:'Punctuality helps success because it:', options:['wastes time','builds trust and discipline','needs no effort','impresses only'], answer:1, explain:'Being on time shows reliability and self-discipline.'},
     {q:'Which pair shows cause and effect?', options:['He ran; she sang','He studied, so he passed','They laughed loudly','We went home'], answer:1, explain:'Studying caused passing — a cause-effect link.'},
     {q:'Honesty in work:', options:['slows success','builds lasting reputation','is old-fashioned','harms profit'], answer:1, explain:'Honest dealing earns trust that sustains long-term success.'}
   ]},
  {id:'sin-c9-eng-ch8', title:'Ghazi’s Diary', urdu:'غازی کی ڈائری', comingSoon:false,
   lessons:[
     {id:'sin-c9-eng-ch8-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>‘Ghazi’s Diary’ is the diary of a soldier (ghazi) who fought bravely for Pakistan. It records his feelings: love for the homeland, courage in battle and faith in God.</p><p>The diary form makes history personal — dates, hopes and fears written day by day. It shows the human side of war: missing family yet standing firm.</p>'},
     {id:'sin-c9-eng-ch8-l2', title:'Patriotism and Sacrifice', html:'<h3>Patriotism and Sacrifice</h3><p>The ghazi writes that defending the motherland is the highest honour. Soldiers sacrifice comfort, and some their lives, so the nation sleeps in peace.</p><p>The lesson teaches gratitude to the armed forces and love for Pakistan. Freedom is protected by such sacrifices.</p>'},
     {id:'sin-c9-eng-ch8-l3', title:'Grammar Focus: Diary Entry', html:'<h3>Grammar Focus: Diary Entry</h3><p>A diary entry has a date, informal personal tone and past tense: ‘Today we advanced… I felt proud.’ Feelings and events mix naturally.</p><p>Practice: write a diary entry about an important day in your life. Exams may ask for a diary-style paragraph.</p>'}
   ],
   quiz:[
     {q:'A ghazi is a:', options:['trader','soldier who fights for a cause','poet','farmer'], answer:1, explain:'Ghazi means a warrior/soldier, here one who fought for Pakistan.'},
     {q:'A diary records:', options:['official orders only','daily personal events and feelings','maps','laws'], answer:1, explain:'Diaries capture day-by-day experiences and emotions.'},
     {q:'The diary shows the soldier’s:', options:['fear only','love for homeland and courage','hatred','boredom'], answer:1, explain:'Patriotism, faith and bravery run through the entries.'},
     {q:'Diary entries are usually written in:', options:['future tense','past tense','present perfect only','passive voice'], answer:1, explain:'Events already happened are narrated in past tense.'},
     {q:'The lesson teaches:', options:['war is fun','soldiers’ sacrifices protect our freedom','diaries are useless','fear wins'], answer:1, explain:'It builds gratitude for those who defend the nation.'},
     {q:'A diary entry begins with a:', options:['title','date','summary','moral'], answer:1, explain:'Dated entries are the diary’s defining feature.'},
     {q:'The tone of a diary is:', options:['formal official','personal and informal','legal','scientific'], answer:1, explain:'Diaries are private and conversational in tone.'},
     {q:'The ghazi missed his ___ but stood firm.', options:['enemy','family','money','rank'], answer:1, explain:'The diary’s human touch: longing for family amid duty.'},
     {q:'Defending the motherland is described as the:', options:['worst duty','highest honour','easiest job','last option'], answer:1, explain:'Sacrifice for the homeland is presented as supreme honour.'},
     {q:'We enjoy freedom today partly because of:', options:['soldiers’ sacrifices','good weather','tall buildings','foreign aid'], answer:0, explain:'The lesson links our peace to their sacrifices.'}
   ]}
]});
window.__saMergeCourse({id:'sin-class10-physics', board:'sindh', title:'Physics', urdu:'طبیعیات', class:'Class 10', icon:'⚛️', desc:'Sindh Board Class 10 Physics — full syllabus with lessons and quizzes.', chapters:[
  {id:'sin-c10-phy-ch1', title:'Simple Harmonic Motion and Waves', urdu:'سادہ ہارمونک حرکت اور موجیں', comingSoon:false,
   lessons:[
     {id:'sin-c10-phy-ch1-l1', title:'Simple Harmonic Motion', html:'<h3>Simple Harmonic Motion</h3><p>A body is in simple harmonic motion (SHM) when its acceleration is proportional to its displacement but opposite in direction: a = −ω²x. A mass on a spring and a swinging pendulum show SHM.</p><p>The time period T is the time for one oscillation; frequency f = 1/T. A simple pendulum’s period is T = 2π√(l/g), so a longer pendulum swings more slowly.</p>'},
     {id:'sin-c10-phy-ch1-l2', title:'Damped and Undamped Motion', html:'<h3>Damped and Undamped Motion</h3><p>In ideal SHM the amplitude stays constant (undamped), but friction gradually reduces it in real systems — this is damped motion, like a car’s shock absorbers settling.</p><p>If energy is supplied to match the loss, oscillations continue steadily. Resonance occurs when a system is driven at its natural frequency, which can shatter glass with sound.</p>'},
     {id:'sin-c10-phy-ch1-l3', title:'Waves', html:'<h3>Waves</h3><p>A wave carries energy without carrying matter. In transverse waves (light, water ripples) particles vibrate across the direction of travel; in longitudinal waves (sound) they vibrate along it.</p><p>Wave speed v = fλ: speed equals frequency times wavelength. Ripple-tank experiments show reflection, refraction and diffraction of waves.</p>'}
   ],
   quiz:[
     {q:'In SHM, acceleration is:', options:['constant','proportional to displacement, opposite in direction','zero','proportional to velocity'], answer:1, explain:'The defining condition of SHM: a = −ω²x.'},
     {q:'Frequency and time period are related by:', options:['f = T','f = 1/T','f = T²','f = 2T'], answer:1, explain:'Frequency is the reciprocal of the period.'},
     {q:'The period of a simple pendulum depends on its:', options:['mass','length','amplitude only','colour'], answer:1, explain:'T = 2π√(l/g): only length (and g) matter for small swings.'},
     {q:'Wave speed equals:', options:['f + λ','fλ','f/λ','λ/f'], answer:1, explain:'v = fλ is the fundamental wave equation.'},
     {q:'Sound waves are:', options:['transverse','longitudinal','electromagnetic','stationary'], answer:1, explain:'Sound is a longitudinal pressure wave in air.'},
     {q:'Light waves are:', options:['longitudinal','transverse','sound waves','matter waves'], answer:1, explain:'Light’s electric and magnetic fields vibrate across the travel direction.'},
     {q:'Damping ___ the amplitude of oscillation.', options:['increases','decreases','keeps constant','doubles'], answer:1, explain:'Friction drains energy, shrinking each swing — damped motion.'},
     {q:'Resonance occurs when the driving frequency:', options:['is zero','equals the natural frequency','is very high','is very low'], answer:1, explain:'Matched frequencies build up large amplitudes — resonance.'},
     {q:'A wave with frequency 5 Hz and wavelength 2 m has speed:', options:['2.5 m/s','10 m/s','7 m/s','3 m/s'], answer:1, explain:'v = fλ = 5 × 2 = 10 m/s.'},
     {q:'Diffraction is the:', options:['bouncing of waves','bending of waves around obstacles','change of speed','loss of energy'], answer:1, explain:'Waves spread into shadow regions by diffraction.'}
   ]},
  {id:'sin-c10-phy-ch2', title:'Sound', urdu:'آواز', comingSoon:false,
   lessons:[
     {id:'sin-c10-phy-ch2-l1', title:'Production and Propagation', html:'<h3>Production and Propagation</h3><p>Sound is produced by vibrating bodies — vocal cords, guitar strings, drum skins. It needs a material medium and cannot travel through vacuum.</p><p>Sound travels about 343 m/s in air at room temperature, faster in water and fastest in solids. Thunder follows lightning because light is far faster than sound.</p>'},
     {id:'sin-c10-phy-ch2-l2', title:'Loudness, Pitch and Quality', html:'<h3>Loudness, Pitch and Quality</h3><p>Loudness depends on amplitude (bigger vibrations = louder sound), measured in decibels. Pitch depends on frequency: high frequency gives a shrill, high-pitched note.</p><p>Quality (timbre) lets you tell a flute from a guitar playing the same note. The audible range for humans is about 20 Hz to 20,000 Hz.</p>'},
     {id:'sin-c10-phy-ch2-l3', title:'Echo and Ultrasound', html:'<h3>Echo and Ultrasound</h3><p>An echo is sound reflected from a distant surface; the minimum distance for a clear echo is about 17 m. Ships measure ocean depth with echo sounding.</p><p>Ultrasound (above 20 kHz) is used in medical scans, cleaning instruments and checking welds. Bats navigate by echolocation with ultrasonic squeaks.</p>'}
   ],
   quiz:[
     {q:'Sound cannot travel through:', options:['air','water','vacuum','steel'], answer:2, explain:'Sound needs vibrating particles — vacuum has none.'},
     {q:'The speed of sound in air is about:', options:['3 × 10⁸ m/s','343 m/s','1500 m/s','5000 m/s'], answer:1, explain:'Roughly 343 m/s at room temperature.'},
     {q:'Loudness depends on the wave’s:', options:['frequency','amplitude','wavelength','speed'], answer:1, explain:'Bigger amplitude means more energy — louder sound.'},
     {q:'Pitch depends on:', options:['amplitude','frequency','speed','medium'], answer:1, explain:'Higher frequency = higher pitch.'},
     {q:'The human audible range is about:', options:['2–200 Hz','20–20,000 Hz','200–2000 Hz','0–100 Hz'], answer:1, explain:'Below 20 Hz is infrasound; above 20 kHz is ultrasound.'},
     {q:'An echo is:', options:['refracted sound','reflected sound','absorbed sound','diffracted sound'], answer:1, explain:'Echoes are reflections from hard distant surfaces.'},
     {q:'Ultrasound has frequency:', options:['below 20 Hz','above 20,000 Hz','exactly 20 Hz','between 20–200 Hz'], answer:1, explain:'Ultrasound is above the human hearing limit.'},
     {q:'Thunder is heard after lightning because:', options:['sound is faster','light is faster','they start together far away','air blocks sound'], answer:1, explain:'Light reaches us almost instantly; sound takes seconds.'},
     {q:'Medical ultrasound scans use sound to:', options:['heat tissue','make images of internal organs','cut skin','measure blood'], answer:1, explain:'Reflected ultrasound builds images of soft tissues safely.'},
     {q:'Sound travels fastest in:', options:['air','water','steel','vacuum'], answer:2, explain:'Particles are closest in solids, so vibrations pass quickest.'}
   ]},
  {id:'sin-c10-phy-ch3', title:'Geometrical Optics', urdu:'ہندسی بصریات', comingSoon:false,
   lessons:[
     {id:'sin-c10-phy-ch3-l1', title:'Reflection of Light', html:'<h3>Reflection of Light</h3><p>Light reflects off surfaces following two laws: the angle of incidence equals the angle of reflection, and the rays all lie in one plane. Plane mirrors form virtual, upright, same-size images.</p><p>Concave mirrors converge light (used in headlights and shaving mirrors); convex mirrors diverge it (used as car side mirrors for a wide view).</p>'},
     {id:'sin-c10-phy-ch3-l2', title:'Refraction of Light', html:'<h3>Refraction of Light</h3><p>When light enters a denser medium it bends toward the normal; entering a rarer medium it bends away. Snell’s law: n = sin i / sin r.</p><p>A straw in water looks bent because of refraction. The refractive index of glass is about 1.5; a higher index means light slows more.</p>'},
     {id:'sin-c10-phy-ch3-l3', title:'Lenses and Total Internal Reflection', html:'<h3>Lenses and Total Internal Reflection</h3><p>Convex lenses converge light to a focus (used in cameras and magnifiers); concave lenses diverge it (used for short-sightedness). The lens formula is 1/f = 1/v − 1/u in the sign convention.</p><p>When light hits a boundary beyond the critical angle, it reflects entirely — total internal reflection. This guides light in optical fibres used for the internet and endoscopy.</p>'}
   ],
   quiz:[
     {q:'The first law of reflection states:', options:['i > r','i = r','i < r','i + r = 180°'], answer:1, explain:'Angle of incidence equals angle of reflection.'},
     {q:'A plane mirror forms an image that is:', options:['real and inverted','virtual, upright and same size','real and enlarged','virtual and diminished'], answer:1, explain:'Plane-mirror images are virtual, erect and the same size as the object.'},
     {q:'Concave mirrors:', options:['diverge light','converge light','absorb light','do nothing'], answer:1, explain:'Concave mirrors bring parallel rays to a focus.'},
     {q:'Car side mirrors are:', options:['plane','concave','convex','cylindrical'], answer:2, explain:'Convex mirrors give a wide, diminished field of view.'},
     {q:'Snell’s law is:', options:['n = sin i / sin r','n = sin r / sin i','n = i/r','n = i + r'], answer:0, explain:'Refractive index = sine of incidence ÷ sine of refraction.'},
     {q:'A straw in water looks bent due to:', options:['reflection','refraction','diffraction','dispersion'], answer:1, explain:'Light bends at the water–air boundary, shifting the image.'},
     {q:'Total internal reflection needs:', options:['rare to dense medium','dense to rare beyond critical angle','any mirror','a lens'], answer:1, explain:'Beyond the critical angle going to a rarer medium, all light reflects.'},
     {q:'Optical fibres work on:', options:['refraction','total internal reflection','diffraction','polarization'], answer:1, explain:'Light bounces inside the fibre by total internal reflection.'},
     {q:'A convex lens is used to correct:', options:['short sight','long sight','both equally','neither'], answer:1, explain:'Converging lenses help long-sighted eyes focus nearby objects.'},
     {q:'The critical angle is the angle of incidence giving:', options:['90° refraction','0° refraction','total absorption','no bending'], answer:0, explain:'At the critical angle the refracted ray grazes the surface (90°).'}
   ]},
  {id:'sin-c10-phy-ch4', title:'Electrostatics', urdu:'ساکن بجلی', comingSoon:false,
   lessons:[
     {id:'sin-c10-phy-ch4-l1', title:'Electric Charge', html:'<h3>Electric Charge</h3><p>There are two kinds of charge: positive and negative. Like charges repel; unlike charges attract. Charge is measured in coulombs (C); one electron carries −1.6 × 10⁻¹⁹ C.</p><p>Charging by rubbing transfers electrons: glass rubbed with silk becomes positive, ebonite with fur becomes negative. Conductors let charge flow; insulators hold it.</p>'},
     {id:'sin-c10-phy-ch4-l2', title:'Coulomb’s Law', html:'<h3>Coulomb’s Law</h3><p>The force between two charges is F = kq₁q₂/r², where k = 9 × 10⁹ N m²/C². Doubling one charge doubles the force; doubling the distance quarters it.</p><p>This inverse-square law mirrors gravitation but is vastly stronger. It explains atomic structure: the nucleus holds electrons by electric attraction.</p>'},
     {id:'sin-c10-phy-ch4-l3', title:'Electric Field and Capacitors', html:'<h3>Electric Field and Capacitors</h3><p>An electric field is the region where a charge feels force; field lines point away from positive charges. Electric potential is work per unit charge, measured in volts.</p><p>A capacitor stores charge: two plates separated by an insulator. Capacitance C = Q/V, in farads. Capacitors smooth power supplies and store energy in camera flashes.</p>'}
   ],
   quiz:[
     {q:'Like charges:', options:['attract','repel','do nothing','merge'], answer:1, explain:'Like repels like; opposites attract.'},
     {q:'The SI unit of charge is the:', options:['volt','ampere','coulomb','ohm'], answer:2, explain:'Charge is measured in coulombs (C).'},
     {q:'Coulomb’s law: F is proportional to:', options:['1/r','1/r²','r²','r'], answer:1, explain:'Electrostatic force follows the inverse-square law.'},
     {q:'If the distance between two charges is doubled, the force becomes:', options:['double','half','one-fourth','four times'], answer:2, explain:'(1/2)² = 1/4 of the original force.'},
     {q:'Glass rubbed with silk becomes:', options:['negative','positive','neutral','magnetic'], answer:1, explain:'Glass loses electrons to silk, leaving positive charge.'},
     {q:'Electric field lines point:', options:['toward negative charges','away from positive charges','in circles','randomly'], answer:1, explain:'By convention, lines leave positive charges and enter negative ones.'},
     {q:'Capacitance is defined as:', options:['Q × V','Q/V','V/Q','Q + V'], answer:1, explain:'C = Q/V, measured in farads.'},
     {q:'A capacitor stores:', options:['current','charge and energy','resistance','magnetism'], answer:1, explain:'Separated charges on its plates store electrical energy.'},
     {q:'Conductors:', options:['hold charge still','allow charge to flow','are always metals','block fields'], answer:1, explain:'Free electrons in conductors move easily — that is conduction.'},
     {q:'Electric potential is measured in:', options:['coulombs','volts','amperes','ohms'], answer:1, explain:'Potential = work per unit charge, in volts (V).'}
   ]},
  {id:'sin-c10-phy-ch5', title:'Current Electricity', urdu:'رواں بجلی', comingSoon:false,
   lessons:[
     {id:'sin-c10-phy-ch5-l1', title:'Current, Voltage and Resistance', html:'<h3>Current, Voltage and Resistance</h3><p>Electric current is charge flow: I = Q/t, measured in amperes. Voltage (potential difference) pushes the charge; resistance opposes it.</p><p>Ohm’s law: V = IR. A bulb with 6 V across it drawing 2 A has resistance 3 Ω. Resistance depends on length, thickness and material.</p>'},
     {id:'sin-c10-phy-ch5-l2', title:'Series and Parallel Circuits', html:'<h3>Series and Parallel Circuits</h3><p>In series, the same current flows everywhere and voltages add; one broken bulb kills the whole string. Total resistance: R = R₁ + R₂.</p><p>In parallel, each branch gets full voltage and currents add; one branch can fail while others work — which is why homes are wired in parallel. Total: 1/R = 1/R₁ + 1/R₂.</p>'},
     {id:'sin-c10-phy-ch5-l3', title:'Power and Electrical Energy', html:'<h3>Power and Electrical Energy</h3><p>Electric power P = VI = I²R, in watts. A 100 W bulb on 220 V draws about 0.45 A. Energy used is billed in kilowatt-hours: E = Pt.</p><p>A 2 kW heater running 3 hours uses 6 kWh (6 ‘units’). Fuses and circuit breakers protect wiring by breaking the circuit when current is too high.</p>'}
   ],
   quiz:[
     {q:'Ohm’s law is:', options:['V = IR','I = VR','R = VI','V = I/R'], answer:0, explain:'Voltage = current × resistance.'},
     {q:'The SI unit of current is the:', options:['volt','ampere','ohm','watt'], answer:1, explain:'Current is measured in amperes (A).'},
     {q:'A 6 V battery drives 2 A through a bulb. Its resistance is:', options:['12 Ω','3 Ω','8 Ω','4 Ω'], answer:1, explain:'R = V/I = 6/2 = 3 Ω.'},
     {q:'In a series circuit:', options:['voltage is same everywhere','current is same everywhere','resistance is zero','bulbs are independent'], answer:1, explain:'Series components share one current path.'},
     {q:'Homes are wired in parallel so that:', options:['voltage adds up','each appliance gets full voltage independently','current is same','it is cheaper'], answer:1, explain:'Parallel branches each receive the full mains voltage and work independently.'},
     {q:'Two 4 Ω resistors in series give:', options:['2 Ω','8 Ω','4 Ω','16 Ω'], answer:1, explain:'Series: R = 4 + 4 = 8 Ω.'},
     {q:'Two 4 Ω resistors in parallel give:', options:['8 Ω','4 Ω','2 Ω','16 Ω'], answer:2, explain:'1/R = 1/4 + 1/4 = 1/2 → R = 2 Ω.'},
     {q:'A 100 W bulb on 220 V draws about:', options:['22 A','0.45 A','2.2 A','100 A'], answer:1, explain:'I = P/V = 100/220 ≈ 0.45 A.'},
     {q:'2 kW for 3 hours uses:', options:['6 kWh','5 kWh','2 kWh','0.66 kWh'], answer:0, explain:'E = Pt = 2 × 3 = 6 kWh (6 units).'},
     {q:'A fuse protects a circuit by:', options:['increasing voltage','melting and breaking the circuit on overload','storing charge','reducing resistance'], answer:1, explain:'Excess current melts the fuse wire, cutting the circuit.'}
   ]},
  {id:'sin-c10-phy-ch6', title:'Electromagnetism', urdu:'برقناطیسیت', comingSoon:false,
   lessons:[
     {id:'sin-c10-phy-ch6-l1', title:'Magnetic Fields and Electromagnets', html:'<h3>Magnetic Fields and Electromagnets</h3><p>A current-carrying wire produces circular magnetic field lines around it; a coil (solenoid) makes a strong field like a bar magnet. More turns or more current strengthens it.</p><p>An electromagnet is a soft-iron core in a solenoid — magnetic only while current flows. It lifts scrap iron and rings electric bells.</p>'},
     {id:'sin-c10-phy-ch6-l2', title:'Force on a Current and Motors', html:'<h3>Force on a Current and Motors</h3><p>A current-carrying conductor in a magnetic field feels a force (Fleming’s left-hand rule): this turns the coil in a DC motor. Reversing current or field reverses the motion.</p><p>Loudspeakers use the same force: alternating current makes the cone vibrate, producing sound. The force is largest when current is perpendicular to the field.</p>'},
     {id:'sin-c10-phy-ch6-l3', title:'Electromagnetic Induction and Transformers', html:'<h3>Electromagnetic Induction and Transformers</h3><p>Moving a magnet through a coil induces a voltage (Faraday’s law) — this is how generators make electricity. Faster motion or more turns give more voltage.</p><p>A transformer changes AC voltage: Vₛ/Vₚ = Nₛ/Nₚ. Step-up transformers raise voltage for long-distance transmission, cutting energy loss; step-down transformers make it safe for homes.</p>'}
   ],
   quiz:[
     {q:'A solenoid with an iron core and current is an:', options:['permanent magnet','electromagnet','generator','motor'], answer:1, explain:'It is magnetic only while current flows — an electromagnet.'},
     {q:'Fleming’s left-hand rule gives the direction of:', options:['induced current','force on a current-carrying conductor','field lines','charge flow'], answer:1, explain:'First finger field, second current, thumb force.'},
     {q:'A DC motor works on the:', options:['force on a current in a magnetic field','heating effect','induction','capacitance'], answer:0, explain:'Magnetic force on the coil’s current produces rotation.'},
     {q:'Electromagnetic induction was discovered by:', options:['Oersted','Faraday','Ampere','Ohm'], answer:1, explain:'Faraday’s law: changing magnetic flux induces voltage.'},
     {q:'In a step-up transformer:', options:['Nₛ < Nₚ','Nₛ > Nₚ','Nₛ = Nₚ','no coils'], answer:1, explain:'More secondary turns give higher secondary voltage.'},
     {q:'Transformers work on:', options:['DC only','AC only','both equally','no current'], answer:1, explain:'Only changing current (AC) induces voltage in the secondary coil.'},
     {q:'High voltage transmission reduces:', options:['voltage','energy loss as heat','current to zero','cost to zero'], answer:1, explain:'High V means low I for the same power, so I²R losses fall.'},
     {q:'An electric bell uses an:', options:['permanent magnet','electromagnet','capacitor','fuse'], answer:1, explain:'The electromagnet repeatedly pulls the hammer to ring the bell.'},
     {q:'The force on a current is maximum when it is ___ to the field.', options:['parallel','perpendicular','at 45°','unrelated'], answer:1, explain:'F = BIL sinθ is largest at 90°.'},
     {q:'A generator converts:', options:['electrical to mechanical','mechanical to electrical','heat to light','chemical to electrical'], answer:1, explain:'Spinning a coil in a magnetic field induces electric current.'}
   ]},
  {id:'sin-c10-phy-ch7', title:'Basic Electronics', urdu:'بنیادی الیکٹرانکس', comingSoon:false,
   lessons:[
     {id:'sin-c10-phy-ch7-l1', title:'Electrons and the CRO', html:'<h3>Electrons and the CRO</h3><p>Heating a metal filament boils off electrons — thermionic emission. In a cathode-ray oscilloscope (CRO), these electrons are focused into a beam that paints traces on a fluorescent screen.</p><p>The CRO displays voltage waveforms: the Y-plates deflect the beam vertically, X-plates sweep it horizontally. It measures voltage, frequency and phase.</p>'},
     {id:'sin-c10-phy-ch7-l2', title:'Analogue and Digital Signals', html:'<h3>Analogue and Digital Signals</h3><p>Analogue signals vary smoothly (a microphone’s output); digital signals jump between two levels, 0 and 1. Digital data resists noise, which is why CDs beat cassettes.</p><p>Computers process digital data with logic gates — circuits that output 1 or 0 based on input combinations.</p>'},
     {id:'sin-c10-phy-ch7-l3', title:'Logic Gates', html:'<h3>Logic Gates</h3><p>AND outputs 1 only if all inputs are 1; OR outputs 1 if any input is 1; NOT inverts its single input. NAND and NOR are their inverted versions and can build any circuit.</p><p>Truth tables list every input-output combination. A burglar alarm might use OR (any sensor triggers it) while a safe needs AND (all codes correct).</p>'}
   ],
   quiz:[
     {q:'Thermionic emission is the release of ___ from a hot filament.', options:['protons','electrons','neutrons','photons'], answer:1, explain:'Heat gives electrons enough energy to escape the metal.'},
     {q:'A CRO displays:', options:['sound','voltage waveforms','magnetic fields','temperature'], answer:1, explain:'The electron beam traces voltage against time on the screen.'},
     {q:'Digital signals have:', options:['smooth variation','two levels, 0 and 1','infinite levels','no noise ever'], answer:1, explain:'Binary 0/1 levels make digital signals noise-resistant.'},
     {q:'An AND gate outputs 1 when:', options:['any input is 1','all inputs are 1','no input is 1','inputs differ'], answer:1, explain:'AND needs every input high to output high.'},
     {q:'An OR gate outputs 0 only when:', options:['any input is 1','all inputs are 0','inputs are equal','power is off'], answer:1, explain:'OR is 0 solely when every input is 0.'},
     {q:'A NOT gate:', options:['adds inputs','inverts its input','multiplies','stores data'], answer:1, explain:'NOT flips 0 to 1 and 1 to 0.'},
     {q:'NAND is:', options:['AND followed by NOT','OR followed by NOT','NOT followed by AND','two NOTs'], answer:0, explain:'NAND = NOT-AND: invert the AND output.'},
     {q:'The output of OR with inputs 0 and 1 is:', options:['0','1','2','undefined'], answer:1, explain:'Any 1 makes OR output 1.'},
     {q:'The output of AND with inputs 1 and 0 is:', options:['1','0','2','undefined'], answer:1, explain:'AND needs all 1s; one 0 gives 0.'},
     {q:'Truth tables show:', options:['circuit cost','all input-output combinations','wire colours','power use'], answer:1, explain:'They list the output for every possible input set.'}
   ]},
  {id:'sin-c10-phy-ch8', title:'Information Technology', urdu:'انفارمیشن ٹیکنالوجی', comingSoon:false,
   lessons:[
     {id:'sin-c10-phy-ch8-l1', title:'Data, Information and Computers', html:'<h3>Data, Information and Computers</h3><p>Data are raw facts and figures; information is processed, meaningful data. A computer takes input, processes it and gives output — the IPO cycle.</p><p>Hardware is the physical machine; software is the programs. System software (operating systems) manages hardware; application software (browsers, word processors) does tasks.</p>'},
     {id:'sin-c10-phy-ch8-l2', title:'Storage and Networks', html:'<h3>Storage and Networks</h3><p>Data is stored on hard disks, SSDs, USB drives and CDs, measured in bytes, kilobytes, megabytes and gigabytes. Cloud storage keeps data on internet servers.</p><p>A LAN connects nearby computers (a school lab); a WAN spans countries (the internet). The internet links networks worldwide using routers and servers.</p>'},
     {id:'sin-c10-phy-ch8-l3', title:'IT in Daily Life', html:'<h3>IT in Daily Life</h3><p>IT powers online banking, e-learning, telemedicine and e-commerce. Email, video calls and social media shrink distances between people.</p><p>Responsible use matters: protect passwords, avoid sharing personal data, and respect copyright. IT creates jobs but also demands digital safety awareness.</p>'}
   ],
   quiz:[
     {q:'Processed, meaningful data is called:', options:['data','information','hardware','software'], answer:1, explain:'Information is data given meaning by processing.'},
     {q:'The IPO cycle stands for:', options:['input-process-output','internet-program-online','insert-print-open','inbox-post-outbox'], answer:0, explain:'Computers take input, process it, and produce output.'},
     {q:'An operating system is:', options:['application software','system software','hardware','a virus'], answer:1, explain:'It manages hardware and runs other programs.'},
     {q:'1 gigabyte is about:', options:['1000 bytes','1 million bytes','1 billion bytes','1 trillion bytes'], answer:2, explain:'1 GB ≈ 10⁹ bytes (1024 MB).'},
     {q:'A LAN is a network covering a:', options:['country','small local area','continent','planet'], answer:1, explain:'Local Area Networks link nearby computers, e.g. in one building.'},
     {q:'The internet is an example of a:', options:['LAN','WAN','PAN','SAN'], answer:1, explain:'It is a Wide Area Network spanning the globe.'},
     {q:'Cloud storage keeps data:', options:['on your disk only','on internet servers','on paper','in RAM'], answer:1, explain:'Cloud providers store your files on their servers, reachable online.'},
     {q:'Which is application software?', options:['Windows','Linux','web browser','BIOS'], answer:2, explain:'Browsers perform user tasks; the rest are system-level.'},
     {q:'A strong password should be:', options:['your name','long with mixed characters','12345','your birthday'], answer:1, explain:'Length plus mixed characters resists guessing and cracking.'},
     {q:'E-commerce means:', options:['email','buying and selling online','electronic games','e-books only'], answer:1, explain:'Electronic commerce is trade conducted over the internet.'}
   ]},
  {id:'sin-c10-phy-ch9', title:'Atomic and Nuclear Physics', urdu:'ایٹمی اور نیوکلیئر طبیعیات', comingSoon:false,
   lessons:[
     {id:'sin-c10-phy-ch9-l1', title:'The Atom and Radioactivity', html:'<h3>The Atom and Radioactivity</h3><p>Atoms have a tiny nucleus of protons and neutrons with electrons around it. Some nuclei are unstable and decay, emitting radiation — this is radioactivity.</p><p>Three radiations: alpha (helium nuclei, stopped by paper), beta (fast electrons, stopped by aluminium), gamma (electromagnetic waves, need lead). All ionize matter and are dangerous in excess.</p>'},
     {id:'sin-c10-phy-ch9-l2', title:'Half-Life and Uses', html:'<h3>Half-Life and Uses</h3><p>Half-life is the time for half the radioactive nuclei in a sample to decay. After two half-lives, one-quarter remains. Carbon-14 dating uses this to age ancient remains.</p><p>Radioisotopes serve medicine (cancer therapy, tracers), industry (thickness gauges) and power. Background radiation comes from cosmic rays, rocks and even bananas.</p>'},
     {id:'sin-c10-phy-ch9-l3', title:'Fission, Fusion and Safety', html:'<h3>Fission, Fusion and Safety</h3><p>Nuclear fission splits heavy nuclei (uranium-235), releasing huge energy — used in power stations and, tragically, atomic bombs. Chain reactions must be controlled with control rods.</p><p>Nuclear fusion joins light nuclei (hydrogen into helium), powering the Sun. It promises clean energy but needs extreme temperatures. Radiation safety: minimize time, maximize distance and shielding.</p>'}
   ],
   quiz:[
     {q:'Alpha particles are:', options:['electrons','helium nuclei','photons','neutrons'], answer:1, explain:'An alpha particle is 2 protons + 2 neutrons — a helium nucleus.'},
     {q:'Which radiation is stopped by paper?', options:['alpha','beta','gamma','X-rays'], answer:0, explain:'Alpha is the least penetrating; paper blocks it.'},
     {q:'Gamma rays are stopped by:', options:['paper','aluminium','thick lead','wood'], answer:2, explain:'Only dense shielding like lead blocks penetrating gamma rays.'},
     {q:'Half-life is the time for:', options:['all atoms to decay','half the nuclei to decay','atoms to double','radiation to stop'], answer:1, explain:'After one half-life, 50% of the radioactive nuclei remain.'},
     {q:'After two half-lives, the fraction remaining is:', options:['1/2','1/4','3/4','0'], answer:1, explain:'Half of a half = one-quarter.'},
     {q:'Nuclear fission:', options:['joins light nuclei','splits heavy nuclei','burns coal','creates electrons'], answer:1, explain:'Splitting uranium-235 releases enormous energy.'},
     {q:'The Sun’s energy comes from:', options:['fission','fusion','burning gas','chemical reactions'], answer:1, explain:'Fusion of hydrogen into helium powers the Sun.'},
     {q:'Carbon-14 dating is used to:', options:['find oil','date ancient organic remains','make bombs','treat cancer'], answer:1, explain:'The steady decay of C-14 clocks archaeological samples.'},
     {q:'Control rods in a reactor:', options:['speed fission','absorb neutrons to control the chain reaction','cool water','make steam'], answer:1, explain:'They soak up neutrons, keeping the reaction steady.'},
     {q:'Radiation safety rule does NOT include:', options:['minimize time','maximize distance','use shielding','stand close'], answer:3, explain:'Time, distance and shielding — standing close increases dose.'}
   ]}
]});
window.__saMergeCourse({id:'sin-class10-chemistry', board:'sindh', title:'Chemistry', urdu:'کیمسٹری', class:'Class 10', icon:'🧪', desc:'Sindh Board Class 10 Chemistry — full syllabus with lessons and quizzes.', chapters:[
  {id:'sin-c10-che-ch1', title:'Chemical Equilibrium', urdu:'کیمیائی توازن', comingSoon:false,
   lessons:[
     {id:'sin-c10-che-ch1-l1', title:'Reversible Reactions', html:'<h3>Reversible Reactions</h3><p>Some reactions go both ways: N₂ + 3H₂ ⇌ 2NH₃. The double arrow shows the forward reaction makes ammonia while the reverse breaks it down.</p><p>In a closed vessel, products build up until the reverse reaction catches up. Nothing escapes, so the system settles into balance rather than finishing.</p>'},
     {id:'sin-c10-che-ch1-l2', title:'Dynamic Equilibrium', html:'<h3>Dynamic Equilibrium</h3><p>At equilibrium the forward and reverse rates are equal, so concentrations stay constant — but reactions have NOT stopped; molecules keep interconverting. That is why it is called dynamic.</p><p>It is like a busy shop where customers enter and leave at the same rate: the number inside stays fixed while individuals keep moving.</p>'},
     {id:'sin-c10-che-ch1-l3', title:'Law of Mass Action and Kc', html:'<h3>Law of Mass Action and Kc</h3><p>For aA + bB ⇌ cC + dD, the equilibrium constant Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ. A large Kc means mostly products; a small Kc means mostly reactants.</p><p>Le Chatelier’s principle: if disturbed, equilibrium shifts to oppose the change — more pressure favours the side with fewer gas molecules; heat favours the endothermic direction.</p>'}
   ],
   quiz:[
     {q:'A reversible reaction is shown by:', options:['→','⇌','⇒','⇐'], answer:1, explain:'The double half-arrow marks reactions proceeding both ways.'},
     {q:'At dynamic equilibrium:', options:['reactions stop','forward and reverse rates are equal','only products exist','concentrations keep changing'], answer:1, explain:'Equal opposing rates keep concentrations constant while reactions continue.'},
     {q:'For N₂ + 3H₂ ⇌ 2NH₃, Kc equals:', options:['[NH₃]²/([N₂][H₂]³)','([N₂][H₂]³)/[NH₃]²','[N₂][H₂]/[NH₃]','constant always'], answer:0, explain:'Products over reactants, each raised to its coefficient.'},
     {q:'A very large Kc means the equilibrium lies:', options:['toward reactants','toward products','in the middle','nowhere'], answer:1, explain:'Large Kc = product-rich mixture at equilibrium.'},
     {q:'Le Chatelier’s principle: a system at equilibrium, when disturbed, shifts to:', options:['stop reacting','oppose the change','speed both ways equally','explode'], answer:1, explain:'The system counteracts the imposed change.'},
     {q:'Increasing pressure on N₂ + 3H₂ ⇌ 2NH₃ shifts equilibrium:', options:['left (4 gas moles)','right (2 gas moles)','no shift','stops'], answer:1, explain:'Higher pressure favours the side with fewer gas molecules.'},
     {q:'Adding a catalyst to an equilibrium mixture:', options:['shifts it right','shifts it left','does not shift it, only speeds arrival','destroys it'], answer:2, explain:'Catalysts speed both directions equally; the position is unchanged.'},
     {q:'Equilibrium can only be reached in a:', options:['open vessel','closed vessel','hot vessel','cold vessel'], answer:1, explain:'Matter must not escape, or the balance can never settle.'},
     {q:'If Qc > Kc, the reaction will:', options:['go right','go left (form more reactants)','stay','stop'], answer:1, explain:'Too much product drives the net reaction backward.'},
     {q:'Concentrations at equilibrium are:', options:['equal','constant but not necessarily equal','zero','infinite'], answer:1, explain:'Constant does not mean equal — a common exam trap.'}
   ]},
  {id:'sin-c10-che-ch2', title:'Acids, Bases and Salts', urdu:'تیزاب، اساس اور نمکیات', comingSoon:false,
   lessons:[
     {id:'sin-c10-che-ch2-l1', title:'Theories of Acids and Bases', html:'<h3>Theories of Acids and Bases</h3><p>Arrhenius: acids give H⁺ in water, bases give OH⁻. Brønsted–Lowry: acids donate protons, bases accept them — so NH₃ is a base though it has no OH.</p><p>Conjugate pairs: HCl/Cl⁻ — when HCl donates H⁺ it becomes Cl⁻, its conjugate base. Water is amphoteric: it can act as acid or base.</p>'},
     {id:'sin-c10-che-ch2-l2', title:'Strength, pH and Indicators', html:'<h3>Strength, pH and Indicators</h3><p>Strong acids (HCl, H₂SO₄) ionize fully; weak acids (CH₃COOH) partly. pH = −log[H⁺]: below 7 is acidic, 7 neutral, above 7 basic. Each pH unit is a 10× change.</p><p>Indicators signal pH by colour: litmus turns red in acid, blue in base; phenolphthalein is colourless in acid, pink in base; methyl orange is red in acid, yellow in base.</p>'},
     {id:'sin-c10-che-ch2-l3', title:'Salts and Neutralization', html:'<h3>Salts and Neutralization</h3><p>Acid + base → salt + water (neutralization). Salts have families: normal (NaCl), acidic (NH₄Cl), basic (Na₂CO₃) and double salts.</p><p>Uses: NaCl for food, Na₂CO₃ (washing soda) for cleaning, CaOCl₂ (bleaching powder) for disinfecting water, plaster of Paris for casts.</p>'}
   ],
   quiz:[
     {q:'Brønsted–Lowry: a base is a:', options:['proton donor','proton acceptor','electron donor','neutron acceptor'], answer:1, explain:'Bases accept H⁺; acids donate H⁺.'},
     {q:'The conjugate base of HCl is:', options:['H₂Cl⁺','Cl⁻','H⁺','Cl₂'], answer:1, explain:'HCl minus one proton leaves Cl⁻.'},
     {q:'pH of a neutral solution is:', options:['0','1','7','14'], answer:2, explain:'pH 7 is neutral at 25°C.'},
     {q:'A solution with pH 3 is:', options:['basic','neutral','acidic','salty'], answer:2, explain:'Below 7 is acidic; pH 3 is strongly acidic.'},
     {q:'Phenolphthalein in basic solution turns:', options:['red','pink','blue','yellow'], answer:1, explain:'Colourless in acid, pink in base.'},
     {q:'Litmus turns ___ in acids.', options:['blue','red','green','yellow'], answer:1, explain:'Blue litmus → red signals acid.'},
     {q:'Acid + base gives:', options:['salt + water','salt + hydrogen','base + acid','nothing'], answer:0, explain:'Neutralization: acid + base → salt + water.'},
     {q:'Which is a strong acid?', options:['CH₃COOH','HCl','H₂CO₃','NH₄OH'], answer:1, explain:'HCl ionizes completely; the rest are weak.'},
     {q:'Washing soda is:', options:['NaCl','Na₂CO₃','NaHCO₃','CaO'], answer:1, explain:'Sodium carbonate, Na₂CO₃, is washing soda.'},
     {q:'Each pH unit change means H⁺ concentration changes by:', options:['2×','10×','100×','it stays same'], answer:1, explain:'pH is logarithmic: one unit = tenfold change.'}
   ]},
  {id:'sin-c10-che-ch3', title:'Organic Chemistry', urdu:'نامیاتی کیمسٹری', comingSoon:false,
   lessons:[
     {id:'sin-c10-che-ch3-l1', title:'What Makes Organic Chemistry', html:'<h3>What Makes Organic Chemistry</h3><p>Organic compounds contain carbon, usually with hydrogen, oxygen or nitrogen. Carbon’s four bonds and catenation (self-linking) create millions of compounds — from fuels to DNA.</p><p>Vital force theory claimed organics needed a ‘life force’ until Wöhler made urea from inorganic chemicals in 1828, proving they follow ordinary chemistry.</p>'},
     {id:'sin-c10-che-ch3-l2', title:'Hydrocarbons', html:'<h3>Hydrocarbons</h3><p>Alkanes (single bonds, CₙH₂ₙ₊₂) like methane CH₄ are saturated; alkenes (C=C, CₙH₂ₙ) like ethene and alkynes (C≡C, CₙH₂ₙ₋₂) like ethyne are unsaturated.</p><p>Alkanes burn and substitute (methane + Cl₂ in sunlight); alkenes add across the double bond (test: decolourize bromine water) and polymerize into plastics.</p>'},
     {id:'sin-c10-che-ch3-l3', title:'Functional Groups and Isomerism', html:'<h3>Functional Groups and Isomerism</h3><p>Functional groups define families: −OH alcohols, −COOH carboxylic acids, −CHO aldehydes, −CO− ketones. Ethanol (drinking alcohol/fuel) and ethanoic acid (vinegar) are everyday examples.</p><p>Isomers share a molecular formula but differ in structure: butane and methylpropane are both C₄H₁₀. Structural differences change boiling points and reactivity.</p>'}
   ],
   quiz:[
     {q:'Organic compounds must contain:', options:['oxygen','carbon','nitrogen','sulphur'], answer:1, explain:'Carbon is the defining element of organic chemistry.'},
     {q:'Wöhler disproved vital force theory by making:', options:['methane','urea','benzene','ethanol'], answer:1, explain:'Synthesizing urea from inorganic ammonium cyanate (1828) ended the theory.'},
     {q:'The general formula of alkanes is:', options:['CₙH₂ₙ','CₙH₂ₙ₊₂','CₙH₂ₙ₋₂','CₙHₙ'], answer:1, explain:'Alkanes: CₙH₂ₙ₊₂ (methane CH₄, ethane C₂H₆).'},
     {q:'Ethene contains a:', options:['single bond','double bond','triple bond','ionic bond'], answer:1, explain:'Alkenes have C=C double bonds.'},
     {q:'Alkenes decolourize:', options:['litmus','bromine water','phenolphthalein','lime water'], answer:1, explain:'Addition across the double bond removes bromine’s colour — the unsaturation test.'},
     {q:'The functional group −COOH belongs to:', options:['alcohols','aldehydes','carboxylic acids','ketones'], answer:2, explain:'Carboxyl group −COOH defines carboxylic acids like vinegar’s ethanoic acid.'},
     {q:'Butane and methylpropane are:', options:['isotopes','isomers','polymers','allotropes'], answer:1, explain:'Same formula C₄H₁₀, different structures — structural isomers.'},
     {q:'Methane reacts with chlorine in sunlight by:', options:['addition','substitution','elimination','neutralization'], answer:1, explain:'Alkanes undergo substitution: CH₄ + Cl₂ → CH₃Cl + HCl.'},
     {q:'Ethanol’s functional group is:', options:['−COOH','−OH','−CHO','−CO−'], answer:1, explain:'The hydroxyl group −OH makes it an alcohol.'},
     {q:'Plastics like polythene are made by:', options:['polymerization of alkenes','burning alkanes','neutralization','distillation'], answer:0, explain:'Alkene monomers join into long polymer chains.'}
   ]},
  {id:'sin-c10-che-ch4', title:'Biochemistry', urdu:'حیاتی کیمسٹری', comingSoon:false,
   lessons:[
     {id:'sin-c10-che-ch4-l1', title:'Carbohydrates', html:'<h3>Carbohydrates</h3><p>Carbohydrates (C, H, O) are the body’s main fuel. Monosaccharides like glucose are single sugars; disaccharides like sucrose are pairs; polysaccharides like starch and cellulose are long chains.</p><p>Starch stores energy in plants, glycogen in animals; cellulose builds plant walls. Benedict’s test turns brick-red for reducing sugars like glucose.</p>'},
     {id:'sin-c10-che-ch4-l2', title:'Proteins and Lipids', html:'<h3>Proteins and Lipids</h3><p>Proteins are chains of amino acids joined by peptide bonds; they build muscles, enzymes and antibodies. Biuret test gives violet colour for proteins.</p><p>Lipids (fats and oils) store energy, insulate and protect organs. Saturated fats (ghee) are solid; unsaturated (oils) are liquid. Fats give more than twice the energy of carbohydrates per gram.</p>'},
     {id:'sin-c10-che-ch4-l3', title:'Vitamins and Nucleic Acids', html:'<h3>Vitamins and Nucleic Acids</h3><p>Vitamins are needed in tiny amounts: A (vision), B-complex (energy release), C (immunity, anti-scurvy), D (bones), E and K (blood clotting). Lack causes deficiency diseases.</p><p>DNA (double helix) stores genetic instructions; RNA helps build proteins. Nucleic acids are polymers of nucleotides — the molecules of heredity.</p>'}
   ],
   quiz:[
     {q:'Glucose is a:', options:['disaccharide','monosaccharide','polysaccharide','protein'], answer:1, explain:'Glucose is a single-sugar monosaccharide.'},
     {q:'Starch is stored energy in:', options:['animals','plants','bacteria','fungi'], answer:1, explain:'Plants store glucose as starch; animals use glycogen.'},
     {q:'Proteins are made of:', options:['glucose units','amino acids','fatty acids','nucleotides'], answer:1, explain:'Amino acids link by peptide bonds into proteins.'},
     {q:'Biuret test detects:', options:['sugars','proteins','fats','starch'], answer:1, explain:'Violet colour with Biuret reagent confirms protein.'},
     {q:'Which gives most energy per gram?', options:['carbohydrates','proteins','fats','vitamins'], answer:2, explain:'Fats yield ~9 kcal/g vs ~4 kcal/g for carbs and proteins.'},
     {q:'Vitamin C prevents:', options:['night blindness','scurvy','rickets','beriberi'], answer:1, explain:'Scurvy (bleeding gums) is the vitamin C deficiency disease.'},
     {q:'DNA’s shape is a:', options:['single strand','double helix','triple chain','flat sheet'], answer:1, explain:'Watson and Crick’s double helix stores genetic code.'},
     {q:'Nucleic acids are polymers of:', options:['amino acids','nucleotides','glucose','fatty acids'], answer:1, explain:'Nucleotides (sugar + phosphate + base) build DNA and RNA.'},
     {q:'Cellulose is a:', options:['protein','polysaccharide','lipid','vitamin'], answer:1, explain:'Cellulose is a long glucose polymer forming plant cell walls.'},
     {q:'Rickets is prevented by vitamin:', options:['A','B','C','D'], answer:3, explain:'Vitamin D plus calcium builds strong bones.'}
   ]},
  {id:'sin-c10-che-ch5', title:'Environmental Chemistry-I: The Atmosphere', urdu:'ماحولیاتی کیمسٹری-1: کرۂ ہوا', comingSoon:false,
   lessons:[
     {id:'sin-c10-che-ch5-l1', title:'Layers of the Atmosphere', html:'<h3>Layers of the Atmosphere</h3><p>Air is 78% nitrogen, 21% oxygen, plus CO₂ and others. Layers: troposphere (weather), stratosphere (ozone layer), mesosphere, thermosphere.</p><p>The ozone layer absorbs harmful UV rays. Temperature falls in the troposphere but rises in the stratosphere due to ozone absorbing UV.</p>'},
     {id:'sin-c10-che-ch5-l2', title:'Air Pollution', html:'<h3>Air Pollution</h3><p>Pollutants: CO (from incomplete fuel burning, binds haemoglobin), SO₂ and NOₓ (cause acid rain), particulates (smog). Vehicles and factories are major sources.</p><p>Acid rain (pH < 5.6) damages buildings, crops and lakes. Smog — smoke plus fog — chokes cities like Lahore in winter.</p>'},
     {id:'sin-c10-che-ch5-l3', title:'Ozone Depletion and Global Warming', html:'<h3>Ozone Depletion and Global Warming</h3><p>CFCs from old refrigerators and sprays destroy ozone, letting more UV through (skin cancer risk). The Montreal Protocol phased CFCs out.</p><p>Greenhouse gases (CO₂, methane) trap heat — the greenhouse effect. Excess CO₂ from fossil fuels drives global warming, melting glaciers and raising seas.</p>'}
   ],
   quiz:[
     {q:'Air is mostly:', options:['oxygen','nitrogen','carbon dioxide','hydrogen'], answer:1, explain:'About 78% nitrogen, 21% oxygen.'},
     {q:'The ozone layer lies in the:', options:['troposphere','stratosphere','mesosphere','thermosphere'], answer:1, explain:'Ozone concentrates in the stratosphere, absorbing UV.'},
     {q:'Acid rain has pH:', options:['7','above 7','below 5.6','exactly 5.6'], answer:2, explain:'Dissolved SO₂/NOₓ make rain acidic, below pH 5.6.'},
     {q:'Carbon monoxide is dangerous because it:', options:['smells bad','binds haemoglobin, blocking oxygen','causes rain','heats air'], answer:1, explain:'CO binds haemoglobin ~200× more strongly than oxygen.'},
     {q:'CFCs damage the:', options:['ozone layer','troposphere','oceans','soil'], answer:0, explain:'Chlorine from CFCs destroys stratospheric ozone.'},
     {q:'The Montreal Protocol targeted:', options:['CO₂','CFCs','plastic','noise'], answer:1, explain:'It phased out ozone-depleting CFCs worldwide.'},
     {q:'A greenhouse gas is:', options:['oxygen','carbon dioxide','nitrogen','helium'], answer:1, explain:'CO₂ traps outgoing heat — the greenhouse effect.'},
     {q:'Smog is:', options:['smoke + fog','soil + fog','steam + gas','dust + rain'], answer:0, explain:'Smoke mixed with fog creates smog.'},
     {q:'Weather occurs in the:', options:['stratosphere','troposphere','mesosphere','thermosphere'], answer:1, explain:'The lowest layer, the troposphere, holds all weather.'},
     {q:'Global warming is mainly driven by excess:', options:['oxygen','CO₂ from fossil fuels','nitrogen','water vapour only'], answer:1, explain:'Burning fossil fuels raises CO₂, trapping more heat.'}
   ]},
  {id:'sin-c10-che-ch6', title:'Environmental Chemistry-II: Water', urdu:'ماحولیاتی کیمسٹری-2: پانی', comingSoon:false,
   lessons:[
     {id:'sin-c10-che-ch6-l1', title:'Water — The Essential Solvent', html:'<h3>Water — The Essential Solvent</h3><p>Water covers 71% of Earth but only about 2.5% is fresh, and much is locked in ice. Its polarity makes it the universal solvent.</p><p>Hard water contains dissolved Ca²⁺ and Mg²⁺; it wastes soap and furs kettles. Temporary hardness (bicarbonates) is removed by boiling; permanent hardness needs washing soda or ion exchange.</p>'},
     {id:'sin-c10-che-ch6-l2', title:'Water Pollution', html:'<h3>Water Pollution</h3><p>Pollutants: sewage (disease), industrial chemicals (mercury, lead), fertilizers (algal blooms), oil spills. Polluted water spreads cholera, typhoid and dysentery.</p><p>Eutrophication: excess nutrients grow algae that rot, depleting oxygen and killing fish. Factories must treat waste before discharge.</p>'},
     {id:'sin-c10-che-ch6-l3', title:'Purification and Conservation', html:'<h3>Purification and Conservation</h3><p>Purification steps: screening, sedimentation, filtration, chlorination (kills germs). Boiling is the simplest home method.</p><p>Save water: fix leaks, use efficient irrigation, harvest rainwater. Clean drinking water is a basic right and a shared responsibility.</p>'}
   ],
   quiz:[
     {q:'Hard water contains dissolved:', options:['Na⁺ and K⁺','Ca²⁺ and Mg²⁺','Fe³⁺ only','Cl⁻ only'], answer:1, explain:'Calcium and magnesium ions cause hardness.'},
     {q:'Temporary hardness is removed by:', options:['filtration','boiling','cooling','adding salt'], answer:1, explain:'Boiling drives off CO₂, precipitating calcium carbonate.'},
     {q:'Permanent hardness is removed by:', options:['boiling','washing soda / ion exchange','filtering','cooling'], answer:1, explain:'Washing soda precipitates Ca²⁺/Mg²⁺; ion exchange swaps them for Na⁺.'},
     {q:'Chlorination of water:', options:['removes hardness','kills germs','adds minerals','cools water'], answer:1, explain:'Chlorine disinfects drinking water.'},
     {q:'Eutrophication is caused by:', options:['oil spills','excess nutrients growing algae','plastic','heat'], answer:1, explain:'Fertilizer runoff feeds algal blooms that deplete oxygen.'},
     {q:'Cholera spreads through:', options:['air','clean water','polluted water','touch'], answer:2, explain:'Waterborne diseases travel in contaminated water.'},
     {q:'About ___ of Earth’s water is fresh.', options:['71%','2.5%','50%','10%'], answer:1, explain:'Only ~2.5% is fresh; most is frozen or groundwater.'},
     {q:'Oil spills harm marine life mainly by:', options:['cooling water','coating and suffocating organisms','adding nutrients','heating water'], answer:1, explain:'Oil coats feathers, gills and blocks oxygen exchange.'},
     {q:'The first step in water treatment is usually:', options:['chlorination','screening','filtration','boiling'], answer:1, explain:'Screens remove large debris before finer treatment.'},
     {q:'Hard water wastes soap because it forms:', options:['lather','scum with Ca/Mg ions','lather faster','perfume'], answer:1, explain:'Soap reacts with hardness ions to make insoluble scum.'}
   ]},
  {id:'sin-c10-che-ch7', title:'Analytical Chemistry', urdu:'تجزیاتی کیمسٹری', comingSoon:false,
   lessons:[
     {id:'sin-c10-che-ch7-l1', title:'Qualitative vs Quantitative', html:'<h3>Qualitative vs Quantitative</h3><p>Qualitative analysis finds WHAT is present (which ions); quantitative analysis finds HOW MUCH. Both are essential in labs, medicine and industry.</p><p>A forensic lab identifies poisons qualitatively, then measures the dose quantitatively — the dose decides the danger.</p>'},
     {id:'sin-c10-che-ch7-l2', title:'Tests for Ions and Gases', html:'<h3>Tests for Ions and Gases</h3><p>Flame tests: sodium gives golden yellow, potassium lilac, calcium brick red. Carbonate + acid → CO₂ (turns lime water milky); ammonium + heat + NaOH → NH₃ (pungent).</p><p>Hydrogen pops with a lit splint; oxygen relights a glowing splint; CO₂ extinguishes flames and milkies lime water.</p>'},
     {id:'sin-c10-che-ch7-l3', title:'Quantitative Methods', html:'<h3>Quantitative Methods</h3><p>Titration measures volumes to find unknown concentrations: acid-base titrations use indicators like phenolphthalein. The mole concept converts volumes to masses.</p><p>Gravimetric analysis weighs precipitates. Modern instruments — spectroscopy, chromatography — detect traces in food, drugs and the environment.</p>'}
   ],
   quiz:[
     {q:'Qualitative analysis determines:', options:['how much','what is present','the temperature','the colour only'], answer:1, explain:'Qualitative = identity of substances present.'},
     {q:'Quantitative analysis determines:', options:['what is present','how much is present','the colour','the smell'], answer:1, explain:'Quantitative = amounts or concentrations.'},
     {q:'Sodium flame test gives:', options:['lilac','golden yellow','brick red','green'], answer:1, explain:'Na⁺ colours a flame golden yellow.'},
     {q:'CO₂ turns lime water:', options:['blue','milky','red','green'], answer:1, explain:'Calcium carbonate precipitate makes lime water milky.'},
     {q:'Hydrogen gas with a lit splint:', options:['relights','pops','extinguishes','does nothing'], answer:1, explain:'The ‘pop test’ identifies hydrogen.'},
     {q:'Oxygen is tested with a:', options:['lit splint','glowing splint, which relights','wet paper','magnet'], answer:1, explain:'Oxygen rekindles a glowing splint.'},
     {q:'Titration is used to find:', options:['colours','unknown concentrations','melting points','odours'], answer:1, explain:'Measured volumes + known molarity give the unknown.'},
     {q:'Ammonium ions with NaOH on heating give:', options:['CO₂','NH₃','H₂','O₂'], answer:1, explain:'Ammonia’s pungent smell confirms NH₄⁺.'},
     {q:'Chromatography separates:', options:['metals','mixtures into components','gases only','solids only'], answer:1, explain:'Components travel at different rates and separate.'},
     {q:'In acid-base titration, phenolphthalein is:', options:['the acid','an indicator','the base','a precipitate'], answer:1, explain:'It changes colour at the end point.'}
   ]},
  {id:'sin-c10-che-ch8', title:'Chemical Industries', urdu:'کیمیائی صنعتیں', comingSoon:false,
   lessons:[
     {id:'sin-c10-che-ch8-l1', title:'Metallurgy', html:'<h3>Metallurgy</h3><p>Metals are extracted from ores: concentration, roasting/calcination, reduction (carbon or electrolysis), refining. Iron is extracted in the blast furnace using coke and limestone.</p><p>Steel (iron + carbon) is stronger than iron; stainless steel adds chromium. Aluminium is extracted by electrolysis of bauxite (Hall–Héroult).</p>'},
     {id:'sin-c10-che-ch8-l2', title:'Fertilizers and Cement', html:'<h3>Fertilizers and Cement</h3><p>Urea (NH₂CONH₂, 46% nitrogen) is made from ammonia and CO₂; DAP adds phosphorus. Fertilizers feed crops but overuse pollutes water.</p><p>Cement is made by heating limestone and clay in a rotary kiln; mixed with water it sets hard. Pakistan’s cement industry is a major exporter.</p>'},
     {id:'sin-c10-che-ch8-l3', title:'Petrochemicals, Soap and Safety', html:'<h3>Petrochemicals, Soap and Safety</h3><p>Fractional distillation of petroleum gives petrol, diesel, kerosene. Petrochemicals make plastics, detergents and synthetic fibres.</p><p>Soap is made by saponification (oil + NaOH); detergents work in hard water. Industry must treat waste and protect workers — safety gear and effluent plants are essential.</p>'}
   ],
   quiz:[
     {q:'Iron is extracted in the:', options:['blast furnace','electrolytic cell','open pit only','beaker'], answer:0, explain:'The blast furnace reduces iron ore with coke.'},
     {q:'Steel is iron plus:', options:['nickel','carbon','copper','zinc'], answer:1, explain:'A little carbon hardens iron into steel.'},
     {q:'Urea contains ___ nitrogen.', options:['23%','46%','16%','60%'], answer:1, explain:'Urea (NH₂CONH₂) is 46% nitrogen — a rich fertilizer.'},
     {q:'Cement is made from:', options:['sand only','limestone and clay','gypsum only','iron ore'], answer:1, explain:'Heated limestone + clay form cement clinker.'},
     {q:'Fractional distillation of petroleum separates by:', options:['density','boiling point','colour','smell'], answer:1, explain:'Fractions condense at different heights by boiling point.'},
     {q:'Soap is made by:', options:['fermentation','saponification','distillation','filtration'], answer:1, explain:'Oil/fat + NaOH → soap + glycerol.'},
     {q:'Detergents work better than soap in:', options:['soft water','hard water','rain','distilled water'], answer:1, explain:'Detergents don’t form scum with Ca²⁺/Mg²⁺.'},
     {q:'Aluminium is extracted by:', options:['carbon reduction','electrolysis of bauxite','blast furnace','roasting'], answer:1, explain:'Hall–Héroult electrolysis extracts Al from bauxite.'},
     {q:'Overuse of fertilizers causes:', options:['more oxygen','water pollution via runoff','cleaner rivers','less growth'], answer:1, explain:'Nutrient runoff triggers eutrophication.'},
     {q:'Industrial safety requires:', options:['no rules','protective gear and waste treatment','faster work','less staff'], answer:1, explain:'Gear protects workers; effluent plants protect the environment.'}
   ]}
]});
window.__saMergeCourse({id:'sin-class10-biology', board:'sindh', title:'Biology', urdu:'حیاتیات', class:'Class 10', icon:'🧬', desc:'Sindh Board Class 10 Biology — full syllabus with lessons and quizzes.', chapters:[
  {id:'sin-c10-bio-ch1', title:'Gaseous Exchange', urdu:'گیسی تبادلہ', comingSoon:false,
   lessons:[
     {id:'sin-c10-bio-ch1-l1', title:'Gaseous Exchange in Plants', html:'<h3>Gaseous Exchange in Plants</h3><p>Plants exchange gases through stomata in leaves and lenticels in stems. In daylight, photosynthesis uses CO₂ and releases O₂; at night, respiration uses O₂ and releases CO₂.</p><p>Guard cells open and close stomata, balancing gas intake against water loss. The spongy mesophyll gives a large internal surface for diffusion.</p>'},
     {id:'sin-c10-bio-ch1-l2', title:'The Human Respiratory System', html:'<h3>The Human Respiratory System</h3><p>Air travels: nose (warms, filters) → trachea → bronchi → bronchioles → alveoli, where oxygen diffuses into blood and CO₂ diffuses out. Alveoli’s huge surface and thin walls suit diffusion.</p><p>Breathing in (inspiration): ribs rise, diaphragm flattens, chest expands, air rushes in. Breathing out reverses it. Haemoglobin carries oxygen as oxyhaemoglobin.</p>'},
     {id:'sin-c10-bio-ch1-l3', title:'Disorders and Healthy Lungs', html:'<h3>Disorders and Healthy Lungs</h3><p>Asthma narrows airways (wheezing), bronchitis inflames bronchi (smokers’ cough), emphysema destroys alveoli. Smoking is the top preventable cause.</p><p>Exercise strengthens breathing muscles; clean air keeps lungs healthy. Tuberculosis, a bacterial lung infection, is treated with long antibiotic courses.</p>'}
   ],
   quiz:[
     {q:'Gaseous exchange in leaves occurs through:', options:['lenticels only','stomata','root hairs','xylem'], answer:1, explain:'Stomatal pores allow CO₂ in and O₂/H₂O vapour out.'},
     {q:'In daylight, a leaf mainly:', options:['takes in O₂','takes in CO₂, releases O₂','takes in N₂','releases CO₂ only'], answer:1, explain:'Photosynthesis dominates: CO₂ in, O₂ out.'},
     {q:'Stomata are opened and closed by:', options:['xylem','guard cells','phloem','root hairs'], answer:1, explain:'Guard cells’ turgor changes open or close the pore.'},
     {q:'Oxygen diffuses into blood at the:', options:['bronchi','trachea','alveoli','nose'], answer:2, explain:'Alveoli’s thin walls and rich capillaries suit diffusion.'},
     {q:'During inspiration, the diaphragm:', options:['domes up','flattens','stops','vibrates'], answer:1, explain:'Flattening enlarges the chest cavity, drawing air in.'},
     {q:'Haemoglobin carries oxygen as:', options:['carboxyhaemoglobin','oxyhaemoglobin','methaemoglobin','plasma protein'], answer:1, explain:'Oxygen binds haemoglobin reversibly as oxyhaemoglobin.'},
     {q:'Asthma:', options:['destroys alveoli','narrows airways causing wheeze','fills lungs with fluid','stops the heart'], answer:1, explain:'Inflamed, constricted bronchioles cause wheezing.'},
     {q:'Emphysema mainly damages the:', options:['trachea','alveoli','nose','diaphragm'], answer:1, explain:'Alveolar walls break down, shrinking the exchange surface.'},
     {q:'The top preventable cause of lung disease is:', options:['exercise','smoking','cold air','talking'], answer:1, explain:'Smoking causes bronchitis, emphysema and lung cancer.'},
     {q:'Tuberculosis is treated with:', options:['surgery only','long antibiotic courses','vitamins only','rest only'], answer:1, explain:'TB bacteria need months of antibiotics to clear.'}
   ]},
  {id:'sin-c10-bio-ch2', title:'Homeostasis', urdu:'ہومیوسٹیسس', comingSoon:false,
   lessons:[
     {id:'sin-c10-bio-ch2-l1', title:'What Is Homeostasis', html:'<h3>What Is Homeostasis</h3><p>Homeostasis keeps the internal environment steady — temperature, water, salts and glucose — despite outside changes. Enzymes need this stability to work.</p><p>It uses feedback: sensors detect change, coordinators decide, effectors correct. Sweating when hot is negative feedback in action.</p>'},
     {id:'sin-c10-bio-ch2-l2', title:'Osmoregulation by the Kidneys', html:'<h3>Osmoregulation by the Kidneys</h3><p>The kidneys filter blood and adjust water and salts. Each nephron filters at the glomerulus, reabsorbs useful substances in tubules, and secretes wastes into urine.</p><p>ADH hormone controls water reabsorption: less water intake → more ADH → concentrated urine. Kidney failure needs dialysis or transplant.</p>'},
     {id:'sin-c10-bio-ch2-l3', title:'Thermoregulation and Glucose Control', html:'<h3>Thermoregulation and Glucose Control</h3><p>When hot, skin vessels dilate and sweat evaporates to cool; when cold, vessels constrict and shivering generates heat. The hypothalamus is the thermostat.</p><p>Blood glucose is held steady by insulin (lowers) and glucagon (raises) from the pancreas. Diabetes is insulin failure — managed by diet, drugs or insulin.</p>'}
   ],
   quiz:[
     {q:'Homeostasis means:', options:['no change ever','keeping the internal environment steady','changing with weather','stopping all activity'], answer:1, explain:'Internal conditions are held within narrow limits.'},
     {q:'The functional unit of the kidney is the:', options:['alveolus','nephron','neuron','villi'], answer:1, explain:'Each nephron filters blood and forms urine.'},
     {q:'ADH controls:', options:['glucose','water reabsorption','temperature','pressure'], answer:1, explain:'Anti-diuretic hormone decides how much water the kidneys keep.'},
     {q:'Filtration in the nephron occurs at the:', options:['tubule','glomerulus','ureter','bladder'], answer:1, explain:'High-pressure capillaries filter blood into Bowman’s capsule.'},
     {q:'When the body is hot, skin blood vessels:', options:['constrict','dilate','close','disappear'], answer:1, explain:'Dilation brings warm blood to the surface to lose heat.'},
     {q:'Shivering:', options:['cools the body','generates heat by muscle activity','pumps blood','aids sleep'], answer:1, explain:'Rapid muscle contractions release heat when cold.'},
     {q:'Insulin:', options:['raises blood glucose','lowers blood glucose','raises temperature','filters blood'], answer:1, explain:'Insulin moves glucose into cells, lowering blood sugar.'},
     {q:'Diabetes mellitus results from:', options:['excess insulin','insulin lack or resistance','excess water','low salt'], answer:1, explain:'Without working insulin, glucose stays high in blood.'},
     {q:'The body’s thermostat is the:', options:['kidney','hypothalamus','pancreas','liver'], answer:1, explain:'The hypothalamus monitors and adjusts temperature.'},
     {q:'Kidney failure can be treated by:', options:['exercise','dialysis or transplant','vitamins','rest'], answer:1, explain:'Dialysis filters blood artificially; transplant replaces the organ.'}
   ]},
  {id:'sin-c10-bio-ch3', title:'Coordination and Control', urdu:'ربط اور کنٹرول', comingSoon:false,
   lessons:[
     {id:'sin-c10-bio-ch3-l1', title:'The Nervous System', html:'<h3>The Nervous System</h3><p>Neurons carry messages as electrical impulses: dendrites receive, axons send, synapses pass the signal chemically to the next neuron.</p><p>The CNS (brain + spinal cord) decides; peripheral nerves carry messages. A reflex arc (e.g. pulling from heat) bypasses the brain for speed.</p>'},
     {id:'sin-c10-bio-ch3-l2', title:'The Brain', html:'<h3>The Brain</h3><p>The cerebrum handles thought and voluntary action; the cerebellum coordinates movement and balance; the medulla controls heartbeat and breathing automatically.</p><p>The spinal cord links brain and body and runs reflexes. Meninges and cerebrospinal fluid protect this delicate system.</p>'},
     {id:'sin-c10-bio-ch3-l3', title:'Hormonal Control', html:'<h3>Hormonal Control</h3><p>Endocrine glands release hormones into blood: pituitary (growth hormone — the master gland), thyroid (thyroxine, needs iodine), pancreas (insulin), adrenals (adrenaline for emergencies).</p><p>Hormones act slower but longer than nerves. Thyroxine shortage causes goitre; excess growth hormone causes gigantism; adrenaline prepares ‘fight or flight’.</p>'}
   ],
   quiz:[
     {q:'Neurons carry messages as:', options:['hormones','electrical impulses','blood flow','sound'], answer:1, explain:'Nerve impulses are electrochemical signals.'},
     {q:'The gap between two neurons is the:', options:['axon','synapse','dendrite','node'], answer:1, explain:'Chemicals cross the synapse to continue the signal.'},
     {q:'A reflex action is:', options:['slow and thought out','fast and automatic','voluntary','learned'], answer:1, explain:'Reflex arcs bypass the brain for instant response.'},
     {q:'The cerebrum controls:', options:['heartbeat','thought and voluntary actions','balance','breathing'], answer:1, explain:'The cerebrum is the seat of consciousness and will.'},
     {q:'Balance and coordination are managed by the:', options:['cerebrum','cerebellum','medulla','hypothalamus'], answer:1, explain:'The cerebellum fine-tunes movement.'},
     {q:'The master gland is the:', options:['thyroid','pituitary','adrenal','pancreas'], answer:1, explain:'The pituitary directs other endocrine glands.'},
     {q:'Adrenaline prepares the body for:', options:['sleep','fight or flight','digestion','growth'], answer:1, explain:'Adrenal glands release it in emergencies.'},
     {q:'Goitre is caused by lack of:', options:['iron','iodine','calcium','zinc'], answer:1, explain:'Iodine is needed to make thyroxine; shortage swells the thyroid.'},
     {q:'Insulin is secreted by the:', options:['thyroid','pancreas','pituitary','liver'], answer:1, explain:'Pancreatic islets release insulin and glucagon.'},
     {q:'Hormones travel via:', options:['nerves','blood','air','bones'], answer:1, explain:'Endocrine glands are ductless — hormones go straight into blood.'}
   ]},
  {id:'sin-c10-bio-ch4', title:'Support and Movement', urdu:'سہارا اور حرکت', comingSoon:false,
   lessons:[
     {id:'sin-c10-bio-ch4-l1', title:'The Human Skeleton', html:'<h3>The Human Skeleton</h3><p>The adult skeleton has 206 bones: axial (skull, spine, ribs) and appendicular (limbs). Bones support, protect organs, make blood cells and store minerals.</p><p>Bone is living tissue — hard with calcium, yet slightly flexible. Cartilage cushions joints; ligaments join bone to bone.</p>'},
     {id:'sin-c10-bio-ch4-l2', title:'Joints and Muscles', html:'<h3>Joints and Muscles</h3><p>Joints: fixed (skull), hinge (elbow, knee — one direction), ball-and-socket (shoulder, hip — all directions). Synovial fluid lubricates movable joints.</p><p>Muscles work in antagonistic pairs: biceps contracts to bend the arm while triceps relaxes; they swap to straighten it. Tendons join muscle to bone.</p>'},
     {id:'sin-c10-bio-ch4-l3', title:'Disorders', html:'<h3>Disorders</h3><p>Arthritis inflames joints (pain, stiffness); osteoporosis weakens bones (common in old age, needs calcium and vitamin D). Fractures need immobilization to heal.</p><p>Exercise, calcium-rich diet and good posture keep the system strong. Rickets (vitamin D lack) bends children’s soft bones.</p>'}
   ],
   quiz:[
     {q:'An adult human skeleton has ___ bones.', options:['106','206','306','406'], answer:1, explain:'Adults have 206 bones (babies have more, some fuse).'},
     {q:'Ribs and skull belong to the ___ skeleton.', options:['appendicular','axial','limb','joint'], answer:1, explain:'The axial skeleton is the central framework.'},
     {q:'Ligaments join:', options:['muscle to bone','bone to bone','skin to muscle','nerve to bone'], answer:1, explain:'Tough ligaments stabilize joints bone-to-bone.'},
     {q:'Tendons join:', options:['bone to bone','muscle to bone','muscle to skin','nerve to muscle'], answer:1, explain:'Tendons anchor contracting muscle to bone.'},
     {q:'The elbow is a ___ joint.', options:['ball-and-socket','hinge','fixed','gliding'], answer:1, explain:'Hinge joints move in one plane like a door.'},
     {q:'The shoulder is a ___ joint.', options:['hinge','fixed','ball-and-socket','pivot'], answer:2, explain:'Ball-and-socket allows rotation in all directions.'},
     {q:'To bend the arm, the ___ contracts.', options:['triceps','biceps','both equally','neither'], answer:1, explain:'Biceps flexes the elbow; triceps extends it — antagonistic pair.'},
     {q:'Arthritis affects the:', options:['muscles','joints','bones only','skin'], answer:1, explain:'Arthritis is joint inflammation causing pain and stiffness.'},
     {q:'Osteoporosis is prevented by:', options:['iron','calcium and vitamin D','vitamin C','iodine'], answer:1, explain:'Calcium builds bone; vitamin D absorbs it.'},
     {q:'Cartilage:', options:['makes blood','cushions joints','contracts','carries nerves'], answer:1, explain:'Smooth cartilage pads bone ends in joints.'}
   ]},
  {id:'sin-c10-bio-ch5', title:'Reproduction', urdu:'تولید', comingSoon:false,
   lessons:[
     {id:'sin-c10-bio-ch5-l1', title:'Asexual Reproduction', html:'<h3>Asexual Reproduction</h3><p>One parent, no gametes, offspring identical (clones): binary fission in Amoeba, budding in Hydra and yeast, spores in fungi, vegetative propagation in plants.</p><p>It is fast and needs no partner, but no variation means one disease can wipe out the whole population — as with cloned banana crops.</p>'},
     {id:'sin-c10-bio-ch5-l2', title:'Sexual Reproduction in Plants', html:'<h3>Sexual Reproduction in Plants</h3><p>Flowers hold male anthers (pollen) and female carpels (ovules). Pollination transfers pollen; fertilization joins gametes to form a seed.</p><p>Agents: wind, insects, water. After fertilization the ovary becomes fruit and ovules become seeds; germination needs water, warmth and oxygen.</p>'},
     {id:'sin-c10-bio-ch5-l3', title:'Human Reproduction', html:'<h3>Human Reproduction</h3><p>Male: testes make sperm; female: ovaries release eggs monthly, uterus hosts the embryo. Fertilization usually occurs in the oviduct.</p><p>The menstrual cycle (~28 days) prepares the uterus; pregnancy lasts ~9 months. STDs like AIDS spread through unprotected contact — awareness and prevention save lives.</p>'}
   ],
   quiz:[
     {q:'Binary fission occurs in:', options:['Hydra','Amoeba','yeast','humans'], answer:1, explain:'Amoeba splits into two identical daughter cells.'},
     {q:'Budding occurs in:', options:['Amoeba','Hydra and yeast','mushrooms','fish'], answer:1, explain:'A small bud grows and detaches — Hydra and yeast.'},
     {q:'Asexual reproduction produces offspring that are:', options:['varied','identical clones','half identical','always weak'], answer:1, explain:'No gamete mixing means genetic copies.'},
     {q:'Pollen is produced in the:', options:['carpel','anther','ovary','stigma'], answer:1, explain:'Anthers are the male part bearing pollen.'},
     {q:'Fertilization in flowering plants forms:', options:['fruit only','seed (ovule → seed)','leaf','root'], answer:1, explain:'The fertilized ovule develops into the seed.'},
     {q:'Sperm are produced in the:', options:['ovaries','testes','uterus','prostate only'], answer:1, explain:'Testes make sperm continuously after puberty.'},
     {q:'Fertilization in humans usually occurs in the:', options:['uterus','oviduct','ovary','vagina'], answer:1, explain:'Sperm meets egg in the fallopian tube (oviduct).'},
     {q:'The menstrual cycle averages:', options:['14 days','28 days','40 days','7 days'], answer:1, explain:'About 28 days from one period to the next.'},
     {q:'Seeds need ___ to germinate.', options:['light only','water, warmth and oxygen','fertilizer only','darkness only'], answer:1, explain:'These three trigger the embryo to grow.'},
     {q:'AIDS spreads through:', options:['mosquitoes','unprotected sexual contact and infected blood','handshakes','air'], answer:1, explain:'HIV transmits via body fluids, not casual contact.'}
   ]},
  {id:'sin-c10-bio-ch6', title:'Inheritance', urdu:'وراثت', comingSoon:false,
   lessons:[
     {id:'sin-c10-bio-ch6-l1', title:'Mendel’s Laws', html:'<h3>Mendel’s Laws</h3><p>Mendel crossed pea plants: the law of segregation says the two alleles of a gene separate into different gametes; the law of independent assortment says different genes sort independently.</p><p>Dominant alleles (T) mask recessive (t): Tt looks tall like TT; only tt is short. Genotype is the gene pair; phenotype is the visible trait.</p>'},
     {id:'sin-c10-bio-ch6-l2', title:'Punnett Squares', html:'<h3>Punnett Squares</h3><p>Cross Tt × Tt: the square predicts 3 tall : 1 short offspring genotypically 1TT : 2Tt : 1tt. Test crosses reveal unknown genotypes.</p><p>Human traits like attached earlobes follow these patterns. Pedigree charts track traits through families.</p>'},
     {id:'sin-c10-bio-ch6-l3', title:'DNA, Sex and Linked Traits', html:'<h3>DNA, Sex and Linked Traits</h3><p>DNA’s double helix carries genes; chromosomes come in pairs — humans have 46. Females are XX, males XY; the father’s sperm decides the child’s sex.</p><p>Some genes ride the X chromosome: colour blindness and haemophilia pass mostly to sons (sex-linked inheritance). Mutations — DNA changes — cause variation and some diseases.</p>'}
   ],
   quiz:[
     {q:'Mendel worked on:', options:['fruit flies','pea plants','mice','maize'], answer:1, explain:'Pea plant crosses revealed the laws of inheritance.'},
     {q:'The law of segregation states:', options:['genes mix','allele pairs separate into gametes','all traits blend','only dominants pass'], answer:1, explain:'Each gamete gets one allele of each pair.'},
     {q:'In Tt, the phenotype is:', options:['short','tall','medium','unknown'], answer:1, explain:'Dominant T masks recessive t — the plant is tall.'},
     {q:'Tt × Tt gives phenotypic ratio:', options:['1:1','3:1','9:3:3:1','1:2:1'], answer:1, explain:'3 tall : 1 short (genotypes 1:2:1).'},
     {q:'Genotype means:', options:['visible trait','the gene combination','the family tree','the chromosome number'], answer:1, explain:'Genotype (e.g. Tt) underlies phenotype (tall).'},
     {q:'Humans have ___ chromosomes.', options:['23','44','46','48'], answer:2, explain:'23 pairs = 46 total; gametes carry 23.'},
     {q:'A child’s sex is decided by the:', options:['mother’s egg','father’s sperm','uterus','diet'], answer:1, explain:'X or Y from the father makes XX (girl) or XY (boy).'},
     {q:'Colour blindness is:', options:['sex-linked','always fatal','contagious','curable by diet'], answer:0, explain:'The gene sits on the X chromosome, affecting mostly males.'},
     {q:'A mutation is a:', options:['cell division','change in DNA','type of gamete','protein'], answer:1, explain:'DNA changes create new alleles — the raw material of variation.'},
     {q:'Independent assortment concerns:', options:['one gene','different genes sorting independently','linked genes only','sex only'], answer:1, explain:'Mendel’s second law: gene pairs separate independently.'}
   ]},
  {id:'sin-c10-bio-ch7', title:'Man and His Environment', urdu:'انسان اور اس کا ماحول', comingSoon:false,
   lessons:[
     {id:'sin-c10-bio-ch7-l1', title:'Ecology Basics', html:'<h3>Ecology Basics</h3><p>Ecology studies organisms and their environment. Producers (plants) make food; consumers eat; decomposers (bacteria, fungi) recycle nutrients.</p><p>A food chain: grass → goat → man. Food webs interlink chains. Energy flows one way and shrinks at each trophic level (~10% passed on).</p>'},
     {id:'sin-c10-bio-ch7-l2', title:'Pollution', html:'<h3>Pollution</h3><p>Air pollution (smoke, vehicle exhaust), water pollution (sewage, chemicals), land pollution (plastic, pesticides) and noise pollution harm health and ecosystems.</p><p>Acid rain, smog and algal blooms are pollution’s signatures. Pakistan’s cities battle smog each winter from smoke and vehicle fumes.</p>'},
     {id:'sin-c10-bio-ch7-l3', title:'Conservation', html:'<h3>Conservation</h3><p>Conservation protects nature: national parks (Kirthar, Hingol), wildlife sanctuaries and laws against hunting endangered species like the Indus dolphin and markhor.</p><p>Plant trees, reduce-reuse-recycle, save water and energy. Sustainable living meets today’s needs without stealing from tomorrow.</p>'}
   ],
   quiz:[
     {q:'Producers in an ecosystem are:', options:['animals','green plants','fungi','bacteria'], answer:1, explain:'Plants convert sunlight into food energy.'},
     {q:'Decomposers:', options:['eat plants','recycle nutrients from dead matter','make food','eat animals'], answer:1, explain:'Bacteria and fungi return nutrients to the soil.'},
     {q:'In grass → goat → man, man is a:', options:['producer','primary consumer','secondary consumer','decomposer'], answer:2, explain:'Man eats the goat (primary consumer), so is secondary.'},
     {q:'About how much energy passes to the next trophic level?', options:['100%','50%','10%','1%'], answer:2, explain:'Roughly 10% transfers; the rest is lost as heat.'},
     {q:'Smog is caused by:', options:['clean air','smoke + vehicle exhaust + fog','rain only','wind'], answer:1, explain:'Pollutants trapped with fog create smog.'},
     {q:'The markhor is:', options:['extinct','an endangered national animal needing protection','a fish','a crop'], answer:1, explain:'Pakistan’s national animal is protected by conservation laws.'},
     {q:'Acid rain results from:', options:['pure water','SO₂ and NOₓ pollution','oxygen','dust'], answer:1, explain:'These gases dissolve in rain, acidifying it.'},
     {q:'A food web is:', options:['one chain','interlinked food chains','a spider web','a net'], answer:1, explain:'Webs show the many feeding relationships in nature.'},
     {q:'Kirthar is a:', options:['city','national park','river','desert town'], answer:1, explain:'Kirthar National Park protects Sindh’s wildlife.'},
     {q:'Sustainable living means:', options:['using everything now','meeting needs without harming future generations','no technology','no farming'], answer:1, explain:'Sustainability balances today’s use with tomorrow’s needs.'}
   ]},
  {id:'sin-c10-bio-ch8', title:'Biotechnology', urdu:'بایوٹیکنالوجی', comingSoon:false,
   lessons:[
     {id:'sin-c10-bio-ch8-l1', title:'What Is Biotechnology', html:'<h3>What Is Biotechnology</h3><p>Biotechnology uses living organisms or their products for human benefit — from ancient bread-making to modern gene therapy.</p><p>It spans fermentation (food), genetic engineering (modified organisms) and medical applications like insulin production.</p>'},
     {id:'sin-c10-bio-ch8-l2', title:'Fermentation and Food', html:'<h3>Fermentation and Food</h3><p>Yeast ferments sugar to ethanol and CO₂ (brewing, baking); bacteria make yogurt, cheese and vinegar. Single-cell protein from microbes can supplement food.</p><p>Fermenters are controlled vessels: sterile, with right temperature and nutrients, producing on an industrial scale.</p>'},
     {id:'sin-c10-bio-ch8-l3', title:'Genetic Engineering', html:'<h3>Genetic Engineering</h3><p>Scientists cut and paste genes: human insulin gene into bacteria makes cheap insulin for diabetics; Bt cotton resists pests; golden rice makes vitamin A.</p><p>GMOs raise debates on safety and ethics, so they are tested and regulated. Gene therapy aims to cure inherited diseases by fixing faulty genes.</p>'}
   ],
   quiz:[
     {q:'Biotechnology uses:', options:['only chemicals','living organisms for human benefit','only machines','only plants'], answer:1, explain:'It harnesses life — microbes, cells, genes — usefully.'},
     {q:'Yeast fermentation of sugar gives:', options:['lactic acid','ethanol and CO₂','methane','vinegar'], answer:1, explain:'Alcoholic fermentation: sugar → ethanol + CO₂.'},
     {q:'Baking uses yeast for the:', options:['ethanol','CO₂ that raises dough','heat','colour'], answer:1, explain:'CO₂ bubbles make bread rise; alcohol evaporates.'},
     {q:'Human insulin for diabetics is now made by:', options:['pigs only','genetically engineered bacteria','plants','chemical synthesis'], answer:1, explain:'Bacteria with the human insulin gene produce it cheaply.'},
     {q:'Bt cotton is:', options:['a pesticide','pest-resistant GM crop','a fertilizer','a weed'], answer:1, explain:'Its bacterial gene kills bollworm pests.'},
     {q:'Golden rice is engineered to make:', options:['iron','vitamin A','protein','oil'], answer:1, explain:'It produces beta-carotene against vitamin A deficiency.'},
     {q:'A fermenter must be:', options:['open and dirty','sterile with controlled conditions','frozen','dry'], answer:1, explain:'Sterility and control keep the desired microbes productive.'},
     {q:'Gene therapy aims to:', options:['clone humans','cure diseases by fixing genes','make robots','extend food'], answer:1, explain:'Correcting faulty genes could cure inherited disorders.'},
     {q:'Yogurt is made by bacterial:', options:['fermentation','distillation','freezing','burning'], answer:0, explain:'Lactic-acid bacteria ferment milk into yogurt.'},
     {q:'GMOs are regulated because of:', options:['cost only','safety and ethical concerns','taste','colour'], answer:1, explain:'Testing and rules address health and environmental questions.'}
   ]},
  {id:'sin-c10-bio-ch9', title:'Pharmacology', urdu:'فارماکولوجی', comingSoon:false,
   lessons:[
     {id:'sin-c10-bio-ch9-l1', title:'Drugs and Their Sources', html:'<h3>Drugs and Their Sources</h3><p>Pharmacology studies drugs — their sources, uses and effects. Drugs come from plants (morphine from poppy, quinine from cinchona), microbes and laboratories.</p><p>A drug cures, prevents or diagnoses disease — but dose decides: the right dose heals, overdose harms. Always follow a doctor’s prescription.</p>'},
     {id:'sin-c10-bio-ch9-l2', title:'Antibiotics and Vaccines', html:'<h3>Antibiotics and Vaccines</h3><p>Antibiotics (penicillin from Penicillium fungus) kill or stop bacteria — useless against viruses, so they cannot cure flu. Overuse breeds resistant superbugs.</p><p>Vaccines train immunity with weakened germs: polio drops, BCG, measles shots. Pakistan’s polio campaigns protect every child.</p>'},
     {id:'sin-c10-bio-ch9-l3', title:'Drug Abuse and Safe Use', html:'<h3>Drug Abuse and Safe Use</h3><p>Narcotics (heroin, cannabis) and even misused medicines damage health, families and society. Addiction is a disease needing treatment, not just punishment.</p><p>Store medicines safely away from children, check expiry dates, and never share prescriptions. Rational use — right drug, right dose, right duration — saves lives.</p>'}
   ],
   quiz:[
     {q:'Pharmacology is the study of:', options:['plants','drugs and their effects','diseases only','surgery'], answer:1, explain:'It covers drug sources, actions, uses and side effects.'},
     {q:'Penicillin was discovered from:', options:['bacteria','Penicillium fungus','a plant','soil'], answer:1, explain:'Fleming’s mould gave the first antibiotic.'},
     {q:'Antibiotics work against:', options:['viruses','bacteria','both equally','neither'], answer:1, explain:'They target bacteria; viruses need other treatments.'},
     {q:'Vaccines:', options:['cure disease','train immunity to prevent disease','kill germs directly','replace drugs'], answer:1, explain:'Weakened germs teach the immune system in advance.'},
     {q:'Quinine, the anti-malaria drug, comes from:', options:['poppy','cinchona bark','fungus','coal'], answer:1, explain:'Cinchona bark was the traditional malaria remedy.'},
     {q:'Drug resistance grows because of:', options:['correct use','antibiotic overuse and misuse','vaccines','clean water'], answer:1, explain:'Misuse selects resistant bacteria — a global threat.'},
     {q:'Addiction should be treated as:', options:['a crime only','a disease needing treatment','a habit to ignore','a joke'], answer:1, explain:'Medical and social support help recovery.'},
     {q:'Medicines should be stored:', options:['anywhere','away from children, cool and dry','in sunlight','open'], answer:1, explain:'Safe storage prevents accidental poisoning.'},
     {q:'Expired medicines:', options:['work better','should not be used','are stronger','are safe'], answer:1, explain:'Expired drugs may be ineffective or harmful.'},
     {q:'Polio in Pakistan is fought with:', options:['antibiotics','vaccination campaigns',' surgery','isolation only'], answer:1, explain:'Oral polio vaccine drives aim to eradicate the disease.'}
   ]}
]});
window.__saMergeCourse({id:'sin-class10-mathematics', board:'sindh', title:'Mathematics', urdu:'ریاضی', class:'Class 10', icon:'📐', desc:'Sindh Board Class 10 Mathematics — full syllabus with lessons and quizzes.', chapters:[
  {id:'sin-c10-mat-ch1', title:'Quadratic Equations', urdu:'دو درجی مساواتیں', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch1-l1', title:'Standard Form and Roots', html:'<h3>Standard Form and Roots</h3><p>A quadratic equation is ax² + bx + c = 0 (a ≠ 0). Its solutions (roots) are the x-values making it zero — at most two real roots.</p><p>Standardize first: 2x² = 8x − 6 becomes 2x² − 8x + 6 = 0 before solving.</p>'},
     {id:'sin-c10-mat-ch1-l2', title:'Solving by Factorization', html:'<h3>Solving by Factorization</h3><p>Factor and set each factor to zero: x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0, so x = 2 or 3. This is fastest when factors are obvious.</p><p>If the equation is x² = 16, write x² − 16 = 0 → (x−4)(x+4) = 0, giving x = ±4.</p>'},
     {id:'sin-c10-mat-ch1-l3', title:'Quadratic Formula', html:'<h3>Quadratic Formula</h3><p>x = (−b ± √(b²−4ac)) / 2a always works. For 2x² + 5x + 2 = 0: x = (−5 ± √(25−16))/4 = (−5 ± 3)/4, so x = −1/2 or −2.</p><p>Completing the square derives the formula. Choose factorization for easy numbers, the formula for the rest.</p>'}
   ],
   quiz:[
     {q:'The standard form of a quadratic is:', options:['ax + b = 0','ax² + bx + c = 0, a ≠ 0','ax³ + b = 0','a/x = b'], answer:1, explain:'Highest power 2 with a ≠ 0 defines quadratics.'},
     {q:'Roots of x² − 5x + 6 = 0 are:', options:['−2, −3','2, 3','−2, 3','1, 6'], answer:1, explain:'(x−2)(x−3) = 0 → x = 2 or 3.'},
     {q:'Roots of x² − 16 = 0 are:', options:['4 only','−4 only','4 and −4','8 and −8'], answer:2, explain:'x² = 16 → x = ±4.'},
     {q:'For 2x² + 5x + 2 = 0, the roots are:', options:['−1/2 and −2','1/2 and 2','−1 and −2','−5 and 2'], answer:0, explain:'Formula gives (−5 ± 3)/4 = −2 or −1/2.'},
     {q:'A quadratic has at most ___ real roots.', options:['1','2','3','4'], answer:1, explain:'Degree 2 means at most two real solutions.'},
     {q:'x² + 2x + 1 = 0 has root:', options:['1','−1','0','2'], answer:1, explain:'(x+1)² = 0 → x = −1 (repeated).'},
     {q:'Before solving, you should:', options:['guess','write in standard form','draw a graph','use a calculator'], answer:1, explain:'Standard form reveals a, b, c for any method.'},
     {q:'The quadratic formula’s denominator is:', options:['a','2a','b','2b'], answer:1, explain:'x = (−b ± √Δ)/2a.'},
     {q:'x² = 7x has roots:', options:['7 only','0 and 7','√7 only','0 only'], answer:1, explain:'x² − 7x = 0 → x(x−7) = 0.'},
     {q:'Factorization is quickest when:', options:['numbers are large','integer factors are obvious','a = 0','there are no roots'], answer:1, explain:'Nice integers factor fast; otherwise use the formula.'}
   ]},
  {id:'sin-c10-mat-ch2', title:'Theory of Quadratic Equations', urdu:'دو درجی مساواتوں کا نظریہ', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch2-l1', title:'The Discriminant', html:'<h3>The Discriminant</h3><p>Δ = b² − 4ac decides the nature of roots: Δ > 0 → two distinct real roots; Δ = 0 → two equal real roots; Δ < 0 → no real roots (complex pair).</p><p>For x² + 2x + 5 = 0, Δ = 4 − 20 = −16 < 0, so no real roots. For x² − 6x + 9 = 0, Δ = 0, giving the repeated root x = 3.</p>'},
     {id:'sin-c10-mat-ch2-l2', title:'Sum and Product of Roots', html:'<h3>Sum and Product of Roots</h3><p>If roots are α and β: sum α + β = −b/a, product αβ = c/a. For 2x² − 7x + 3 = 0: sum = 7/2, product = 3/2.</p><p>These let you check answers fast and build equations: x² − (sum)x + (product) = 0.</p>'},
     {id:'sin-c10-mat-ch2-l3', title:'Forming Equations', html:'<h3>Forming Equations</h3><p>Given roots 4 and −1: sum = 3, product = −4, so x² − 3x − 4 = 0. Any non-zero multiple is also correct.</p><p>Word problems on numbers and areas often reduce to quadratics — translate, solve, and reject meaningless roots (like negative lengths).</p>'}
   ],
   quiz:[
     {q:'The discriminant is:', options:['b² + 4ac','b² − 4ac','−b² + 4ac','4ac − b'], answer:1, explain:'Δ = b² − 4ac.'},
     {q:'Δ > 0 means:', options:['equal roots','two distinct real roots','no real roots','one root'], answer:1, explain:'Positive discriminant gives two different real roots.'},
     {q:'Δ = 0 means:', options:['no real roots','two equal real roots','complex roots','infinite roots'], answer:1, explain:'Zero discriminant: one repeated real root.'},
     {q:'For x² + 2x + 5 = 0, Δ equals:', options:['16','−16','24','−24'], answer:1, explain:'4 − 20 = −16 < 0: no real roots.'},
     {q:'Sum of roots of ax² + bx + c = 0 is:', options:['b/a','−b/a','c/a','−c/a'], answer:1, explain:'α + β = −b/a.'},
     {q:'Product of roots is:', options:['−b/a','b/a','c/a','−c/a'], answer:2, explain:'αβ = c/a.'},
     {q:'For 2x² − 7x + 3 = 0, the sum of roots is:', options:['7/2','−7/2','3/2','−3/2'], answer:0, explain:'−b/a = 7/2.'},
     {q:'Equation with roots 4 and −1 is:', options:['x² − 3x − 4 = 0','x² + 3x − 4 = 0','x² − 3x + 4 = 0','x² + 3x + 4 = 0'], answer:0, explain:'x² − (sum)x + product = x² − 3x − 4 = 0.'},
     {q:'If roots are equal, Δ is:', options:['positive','zero','negative','undefined'], answer:1, explain:'Equal roots need Δ = 0.'},
     {q:'x² − 6x + 9 = 0 has:', options:['two distinct roots','one repeated root 3','no real roots','roots 6 and 9'], answer:1, explain:'Δ = 36 − 36 = 0 → x = 3 (double).'}
   ]},
  {id:'sin-c10-mat-ch3', title:'Variations', urdu:'تغیرات', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch3-l1', title:'Direct and Inverse Variation', html:'<h3>Direct and Inverse Variation</h3><p>y varies directly as x (y ∝ x) means y = kx: doubling x doubles y. Cost of petrol varies directly with litres bought.</p><p>y varies inversely as x (y ∝ 1/x) means y = k/x: more workers finish a job in fewer days. Doubling workers halves the time.</p>'},
     {id:'sin-c10-mat-ch3-l2', title:'Joint Variation', html:'<h3>Joint Variation</h3><p>y varies jointly as x and z (y ∝ xz): y = kxz. The volume of a box varies jointly with length, width and height.</p><p>Combined variation mixes types: y ∝ x/z gives y = kx/z. Identify the type from the story before writing the equation.</p>'},
     {id:'sin-c10-mat-ch3-l3', title:'The k-Method', html:'<h3>The k-Method</h3><p>Find k from given values, then use it: if y ∝ x and y = 12 when x = 3, then k = 4, so y = 4x; when x = 10, y = 40.</p><p>Proportional reasoning also proves theorems: the k-method shows ratios stay constant, a favourite in exam proofs.</p>'}
   ],
   quiz:[
     {q:'y ∝ x means:', options:['y = k/x','y = kx','y = k + x','y = xᵏ'], answer:1, explain:'Direct variation: y = kx for some constant k.'},
     {q:'If y ∝ x and y = 12 when x = 3, then k equals:', options:['4','3','36','9'], answer:0, explain:'k = y/x = 12/3 = 4.'},
     {q:'With k = 4, when x = 10, y equals:', options:['14','40','2.5','400'], answer:1, explain:'y = 4 × 10 = 40.'},
     {q:'y ∝ 1/x is called:', options:['direct variation','inverse variation','joint variation','partial variation'], answer:1, explain:'y = k/x: as x grows, y shrinks.'},
     {q:'More workers, fewer days is:', options:['direct','inverse','joint','no'], answer:1, explain:'Workers × days is constant — inverse variation.'},
     {q:'y ∝ xz means y:', options:['varies directly with x only','varies jointly with x and z','varies inversely','is constant'], answer:1, explain:'Joint variation with two variables: y = kxz.'},
     {q:'If y = kx/z and k = 6, x = 4, z = 3, then y equals:', options:['72','8','2','18'], answer:1, explain:'y = 6×4/3 = 8.'},
     {q:'The constant k is found from:', options:['any values','given paired values','guessing','zero'], answer:1, explain:'One known (x, y) pair determines k.'},
     {q:'Petrol cost vs litres is:', options:['inverse','direct','joint','none'], answer:1, explain:'Twice the litres costs twice as much.'},
     {q:'In y = k/x, doubling x:', options:['doubles y','halves y','keeps y','zeroes y'], answer:1, explain:'Inverse: y becomes k/(2x) = half.'}
   ]},
  {id:'sin-c10-mat-ch4', title:'Partial Fractions', urdu:'جزوی کسریں', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch4-l1', title:'What Are Partial Fractions', html:'<h3>What Are Partial Fractions</h3><p>A proper rational function (numerator degree < denominator degree) can be split into simpler fractions: 1/((x+1)(x+2)) = A/(x+1) + B/(x+2).</p><p>Partial fractions make integration and equation-solving easier. First check the fraction is proper; if not, divide first.</p>'},
     {id:'sin-c10-mat-ch4-l2', title:'Linear Factors', html:'<h3>Linear Factors</h3><p>For distinct linear factors, write one constant-numerator fraction per factor. Solve (2x+1)/((x+1)(x+2)) = A/(x+1) + B/(x+2): multiply out and compare coefficients.</p><p>Shortcut: substitute x = −1 to kill the B term and find A; substitute x = −2 to find B. Here A = −1, B = 3.</p>'},
     {id:'sin-c10-mat-ch4-l3', title:'Repeated and Quadratic Factors', html:'<h3>Repeated and Quadratic Factors</h3><p>A repeated factor (x+1)² needs A/(x+1) + B/(x+1)². An irreducible quadratic (x²+1) needs (Ax+B)/(x²+1).</p><p>Always verify by recombining — the sum must equal the original fraction. This check catches arithmetic slips.</p>'}
   ],
   quiz:[
     {q:'Partial fractions apply to ___ rational functions.', options:['improper','proper','any','no'], answer:1, explain:'Numerator degree must be less than denominator degree.'},
     {q:'1/((x+1)(x+2)) splits into:', options:['A/(x+1) + B/(x+2)','A/(x+1) + B/(x+1)','one fraction','Ax + B'], answer:0, explain:'One simple fraction per distinct linear factor.'},
     {q:'For (x+1)² in the denominator, the form includes:', options:['A/(x+1) only','A/(x+1) + B/(x+1)²','Ax + B','(Ax+B)/(x+1)'], answer:1, explain:'Repeated factors need a term for each power.'},
     {q:'For an irreducible quadratic factor, the numerator is:', options:['a constant','Ax + B','x²','zero'], answer:1, explain:'Form: (Ax+B)/(quadratic).'},
     {q:'The shortcut to find A uses x-values that:', options:['are zero','make other denominators zero','are large','are fractions'], answer:1, explain:'Killing other terms isolates one constant.'},
     {q:'Before splitting, an improper fraction must be:', options:['factored','divided (polynomial division)','squared','ignored'], answer:1, explain:'Divide to get a proper fraction plus a polynomial.'},
     {q:'The final check is to:', options:['differentiate','recombine into the original','graph it','square it'], answer:1, explain:'Adding the parts must reproduce the original fraction.'},
     {q:'Partial fractions help in:', options:['painting','integration and solving equations','cooking','sports'], answer:1, explain:'Simple fractions integrate and manipulate easily.'},
     {q:'If degree of numerator ≥ denominator, first:', options:['split directly','do polynomial division','give up','factor only'], answer:1, explain:'Make it proper before decomposing.'},
     {q:'A/(x+1) + B/(x+2) combined has denominator:', options:['x + 3','(x+1)(x+2)','x² + 1','2x + 3'], answer:1, explain:'The common denominator is the product (x+1)(x+2).'}
   ]},
  {id:'sin-c10-mat-ch5', title:'Sets and Functions', urdu:'سیٹ اور فنکشنز', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch5-l1', title:'Sets and Operations', html:'<h3>Sets and Operations</h3><p>A set is a well-defined collection: A = {1, 2, 3}. Union A∪B has elements in either; intersection A∩B has elements in both; complement A′ has elements outside A.</p><p>Venn diagrams picture these operations. For A = {1,2,3}, B = {3,4}: A∪B = {1,2,3,4}, A∩B = {3}.</p>'},
     {id:'sin-c10-mat-ch5-l2', title:'Relations and Functions', html:'<h3>Relations and Functions</h3><p>A relation pairs elements of two sets; a function is a relation where each input has exactly one output. f(x) = 2x + 1 gives f(3) = 7.</p><p>Vertical-line test: a graph is a function if no vertical line hits it twice. Domain = allowed inputs; range = resulting outputs.</p>'},
     {id:'sin-c10-mat-ch5-l3', title:'Types of Functions', html:'<h3>Types of Functions</h3><p>One-one: distinct inputs give distinct outputs. Onto: every output is hit. Into: some outputs missed. Bijective = one-one and onto.</p><p>Inverse functions undo each other: if f(x) = 2x, then f⁻¹(x) = x/2. Composite (fog)(x) = f(g(x)) applies g first, then f.</p>'}
   ],
   quiz:[
     {q:'A∪B contains elements:', options:['in both','in either A or B','in neither','only in A'], answer:1, explain:'Union collects everything from both sets.'},
     {q:'A∩B contains elements:', options:['in either','in both A and B','in neither','only in B'], answer:1, explain:'Intersection keeps only common elements.'},
     {q:'For A={1,2,3}, B={3,4}, A∩B equals:', options:['{1,2,3,4}','{3}','{1,2}','{4}'], answer:1, explain:'Only 3 is in both.'},
     {q:'A function gives each input:', options:['many outputs','exactly one output','no output','two outputs'], answer:1, explain:'Single-valuedness defines a function.'},
     {q:'If f(x) = 2x + 1, f(3) equals:', options:['6','7','8','9'], answer:1, explain:'2(3) + 1 = 7.'},
     {q:'The domain of a function is the set of:', options:['outputs','allowed inputs','all numbers','integers'], answer:1, explain:'Domain = inputs; range = outputs.'},
     {q:'A graph is a function if:', options:['it is straight','no vertical line cuts it twice','it is curved','it passes (0,0)'], answer:1, explain:'The vertical-line test checks single-valuedness.'},
     {q:'If f(x) = 2x, then f⁻¹(x) equals:', options:['2x','x/2','x + 2','x − 2'], answer:1, explain:'The inverse undoes doubling: divide by 2.'},
     {q:'(fog)(x) means:', options:['f + g','f(g(x))','f × g','g(f(x))'], answer:1, explain:'Apply g first, then f — composition.'},
     {q:'A bijective function is:', options:['one-one only','onto only','one-one and onto','neither'], answer:2, explain:'Bijective = both one-one and onto.'}
   ]},
  {id:'sin-c10-mat-ch6', title:'Basic Statistics', urdu:'بنیادی شماریات', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch6-l1', title:'Data and Frequency Tables', html:'<h3>Data and Frequency Tables</h3><p>Statistics collects, organizes and interprets data. Raw scores become a frequency table: values with their counts (e.g. marks 60–70: 5 students).</p><p>Grouped data uses class intervals like 50–60. Tally marks make counting easy and error-free.</p>'},
     {id:'sin-c10-mat-ch6-l2', title:'Measures of Central Tendency', html:'<h3>Measures of Central Tendency</h3><p>Mean = sum ÷ count (e.g. mean of 4, 6, 8 is 6). Median = middle value when ordered (for 3, 5, 9, median is 5). Mode = most frequent value.</p><p>Each suits different data: mean for symmetric, median for skewed (salaries), mode for categories (shoe sizes).</p>'},
     {id:'sin-c10-mat-ch6-l3', title:'Presentation of Data', html:'<h3>Presentation of Data</h3><p>Bar charts compare categories with bars; histograms show grouped data with touching bars; pie charts show parts of a whole with angles = (value/total) × 360°.</p><p>Choose honestly: truncated axes mislead. Cumulative frequency curves (ogives) help find medians of grouped data.</p>'}
   ],
   quiz:[
     {q:'The mean of 4, 6, 8 is:', options:['5','6','7','18'], answer:1, explain:'(4+6+8)/3 = 18/3 = 6.'},
     {q:'The median of 3, 9, 5 (ordered 3, 5, 9) is:', options:['3','5','9','17'], answer:1, explain:'The middle value is 5.'},
     {q:'The mode of 2, 3, 3, 5, 3 is:', options:['2','3','5','11'], answer:1, explain:'3 occurs most often (three times).'},
     {q:'A pie chart’s full angle is:', options:['90°','180°','270°','360°'], answer:3, explain:'The whole circle represents 100% = 360°.'},
     {q:'In a pie chart, a 25% sector has angle:', options:['25°','90°','180°','45°'], answer:1, explain:'0.25 × 360° = 90°.'},
     {q:'Histograms differ from bar charts because bars:', options:['are coloured','touch each other','are vertical','are short'], answer:1, explain:'Touching bars show continuous grouped data.'},
     {q:'The median is better than the mean for:', options:['symmetric data','skewed data like salaries','small data','no data'], answer:1, explain:'Outliers distort the mean; the median resists them.'},
     {q:'Tally marks help in:', options:['drawing','counting frequencies','measuring','colouring'], answer:1, explain:'Tallies count occurrences systematically.'},
     {q:'Cumulative frequency is used to find the:', options:['mean','median of grouped data','mode only','range'], answer:1, explain:'The ogive’s middle value estimates the median.'},
     {q:'Range of 12, 5, 20, 8 is:', options:['8','15','20','12'], answer:1, explain:'Max − min = 20 − 5 = 15.'}
   ]},
  {id:'sin-c10-mat-ch7', title:'Introduction to Trigonometry', urdu:'تکون میتری کا تعارف', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch7-l1', title:'Trigonometric Ratios', html:'<h3>Trigonometric Ratios</h3><p>In a right triangle: sin θ = perpendicular/hypotenuse, cos θ = base/hypotenuse, tan θ = perpendicular/base. Remember SOH-CAH-TOA.</p><p>Their reciprocals: cosec = 1/sin, sec = 1/cos, cot = 1/tan. Ratios depend only on the angle, not the triangle’s size.</p>'},
     {id:'sin-c10-mat-ch7-l2', title:'Special Angles', html:'<h3>Special Angles</h3><p>Memorize: sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3; sin 45° = cos 45° = 1/√2, tan 45° = 1; sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3.</p><p>These come from half an equilateral triangle (30°/60°) and half a square (45°). They appear constantly in exams.</p>'},
     {id:'sin-c10-mat-ch7-l3', title:'Identities and Applications', html:'<h3>Identities and Applications</h3><p>Key identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, tan θ = sin θ/cos θ. Use them to simplify: (1 − sin²θ) = cos²θ.</p><p>Trigonometry finds heights and distances: angle of elevation (looking up) and depression (looking down) turn word problems into right triangles.</p>'}
   ],
   quiz:[
     {q:'sin θ equals:', options:['base/hypotenuse','perpendicular/hypotenuse','perpendicular/base','hypotenuse/base'], answer:1, explain:'SOH: sine = opposite (perpendicular) ÷ hypotenuse.'},
     {q:'tan 45° equals:', options:['0','1','√3','1/√3'], answer:1, explain:'tan 45° = 1.'},
     {q:'sin 30° equals:', options:['√3/2','1/2','1','√2/2'], answer:1, explain:'sin 30° = 1/2.'},
     {q:'cos 60° equals:', options:['√3/2','1/2','1','0'], answer:1, explain:'cos 60° = 1/2.'},
     {q:'The identity sin²θ + cos²θ equals:', options:['0','1','2','tan²θ'], answer:1, explain:'The fundamental Pythagorean identity equals 1.'},
     {q:'tan θ in terms of sin and cos is:', options:['sin θ × cos θ','sin θ / cos θ','cos θ / sin θ','1/(sin θ cos θ)'], answer:1, explain:'tan θ = opposite/adjacent = sin θ/cos θ.'},
     {q:'sec θ is the reciprocal of:', options:['sin θ','cos θ','tan θ','cot θ'], answer:1, explain:'sec = 1/cos; cosec = 1/sin; cot = 1/tan.'},
     {q:'Angle of elevation is measured:', options:['downward','upward from the horizontal','vertically','randomly'], answer:1, explain:'Looking up from horizontal gives the angle of elevation.'},
     {q:'1 + tan²θ equals:', options:['cos²θ','sec²θ','cosec²θ','sin²θ'], answer:1, explain:'Dividing sin²+cos²=1 by cos² gives this identity.'},
     {q:'If sin θ = 3/5 in a right triangle, cos θ equals:', options:['4/5','3/4','5/4','5/3'], answer:0, explain:'3-4-5 triangle: cos θ = 4/5.'}
   ]},
  {id:'sin-c10-mat-ch8', title:'Projection of a Side of a Triangle', urdu:'مثلث کے ضلع کا عکس', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch8-l1', title:'Projection Reminder', html:'<h3>Projection Reminder</h3><p>The projection of one side onto another is its perpendicular ‘shadow’. In ΔABC with altitude from B to AC at D, AD is the projection of AB onto AC.</p><p>This chapter proves the projection formulae rigorously with Pythagoras applied to the two right triangles formed by the altitude.</p>'},
     {id:'sin-c10-mat-ch8-l2', title:'Acute-Angled Case', html:'<h3>Acute-Angled Case</h3><p>If angle A is acute: a² = b² + c² − 2b·(projection of c on b). The projection shortens the side — hence the minus sign.</p><p>Proof sketch: in the two right triangles, subtract the Pythagoras equations and simplify to get the formula.</p>'},
     {id:'sin-c10-mat-ch8-l3', title:'Obtuse-Angled Case and Uses', html:'<h3>Obtuse-Angled Case and Uses</h3><p>If angle A is obtuse, the altitude falls outside: a² = b² + c² + 2b·(projection). The sign flips because the projection extends beyond the side.</p><p>These formulae are the geometric form of the cosine rule and solve triangles when trigonometry is not yet allowed.</p>'}
   ],
   quiz:[
     {q:'In the acute-angle projection formula, the sign before 2b·(projection) is:', options:['plus','minus','zero','division'], answer:1, explain:'Acute: a² = b² + c² − 2b(projection).'},
     {q:'In the obtuse-angle case, the sign is:', options:['minus','plus','zero','undefined'], answer:1, explain:'Obtuse: a² = b² + c² + 2b(projection).'},
     {q:'The altitude from B meets AC at:', options:['the midpoint','the foot D at 90°','the vertex','outside always'], answer:1, explain:'The foot of the perpendicular is D.'},
     {q:'AD is the projection of ___ onto AC.', options:['BC','AB','BD','AC'], answer:1, explain:'Dropping from B, the shadow of AB on AC is AD.'},
     {q:'Projection formulae are the geometric form of the:', options:['sine rule','cosine rule','Pythagoras only','angle sum'], answer:1, explain:'They express the cosine rule without trigonometry.'},
     {q:'The proofs use:', options:['similarity only','Pythagoras on two right triangles','congruence','parallel lines'], answer:1, explain:'Each altitude creates two right triangles for Pythagoras.'},
     {q:'If the altitude falls outside the segment, the angle is:', options:['acute','obtuse','right','zero'], answer:1, explain:'Obtuse angles push the altitude foot beyond the side.'},
     {q:'Projection of a side onto itself equals:', options:['zero','the side’s full length','half','double'], answer:1, explain:'A segment’s shadow on its own line is itself.'},
     {q:'The cosine rule generalizes:', options:['angle bisectors','projection formulae with trig','congruence','parallelism'], answer:1, explain:'a² = b² + c² − 2bc·cos A is the trig version.'},
     {q:'In a right triangle, the projection formula reduces to:', options:['angle sum','Pythagoras’ theorem','midpoint theorem','nothing'], answer:1, explain:'With a 90° angle the projection term vanishes: a² = b² + c².'}
   ]},
  {id:'sin-c10-mat-ch9', title:'Chords of a Circle', urdu:'دائرے کے وتر', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch9-l1', title:'Basic Terms', html:'<h3>Basic Terms</h3><p>A chord joins two points on a circle; the diameter is the longest chord through the centre. An arc is part of the circumference; a segment is the region between a chord and its arc.</p><p>The radius is perpendicular to a chord’s midpoint — the key theorem: the perpendicular from the centre to a chord bisects the chord.</p>'},
     {id:'sin-c10-mat-ch9-l2', title:'Equal Chords', html:'<h3>Equal Chords</h3><p>Equal chords are equidistant from the centre, and conversely chords equidistant from the centre are equal. This pairs length with distance neatly.</p><p>Proofs use congruent right triangles formed by dropping perpendiculars from the centre to the chords.</p>'},
     {id:'sin-c10-mat-ch9-l3', title:'Using the Theorems', html:'<h3>Using the Theorems</h3><p>To find a chord’s length given its distance from the centre, draw the radius to an endpoint and apply Pythagoras in the right triangle formed.</p><p>These results underpin later theorems on arcs, angles and tangents — master them now.</p>'}
   ],
   quiz:[
     {q:'The longest chord of a circle is the:', options:['radius','diameter','arc','tangent'], answer:1, explain:'The diameter passes through the centre — the longest possible chord.'},
     {q:'The perpendicular from the centre to a chord:', options:['is parallel','bisects the chord','trisects it','misses it'], answer:1, explain:'This fundamental theorem links centre, chord and midpoint.'},
     {q:'Equal chords are ___ from the centre.', options:['at varying distances','equidistant','infinitely far','at zero distance'], answer:1, explain:'Equal length ⟺ equal distance from centre.'},
     {q:'A chord 6 cm long is 4 cm from the centre. The radius is:', options:['5 cm','10 cm','8 cm','7 cm'], answer:0, explain:'Half-chord 3, distance 4: r = √(9+16) = 5 cm.'},
     {q:'An arc is:', options:['a straight line','part of the circumference','the centre','a diameter'], answer:1, explain:'Arcs are curved portions of the circle.'},
     {q:'The region between a chord and its arc is a:', options:['sector','segment','quadrant','tangent'], answer:1, explain:'Segment = chord + minor arc region; sector = two radii + arc.'},
     {q:'Dropping perpendiculars from the centre to equal chords forms:', options:['similar triangles','congruent right triangles','parallelograms','squares'], answer:1, explain:'RHS congruence proves the equidistance theorems.'},
     {q:'If two chords are equidistant from the centre, they are:', options:['parallel','equal','perpendicular','diameters'], answer:1, explain:'The converse of the equal-chords theorem.'},
     {q:'The diameter is ___ the radius.', options:['equal to','twice','half','thrice'], answer:1, explain:'d = 2r.'},
     {q:'A line through the centre and the midpoint of a chord is ___ to the chord.', options:['parallel','perpendicular','at 45°','coincident'], answer:1, explain:'The converse: centre–midpoint line is perpendicular.'}
   ]},
  {id:'sin-c10-mat-ch10', title:'Tangent to a Circle', urdu:'دائرے کا مماس', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch10-l1', title:'Tangent Basics', html:'<h3>Tangent Basics</h3><p>A tangent touches the circle at exactly one point. The tangent at any point is perpendicular to the radius through that point — the most used circle theorem.</p><p>From an external point, exactly two tangents can be drawn to a circle, and their lengths are equal.</p>'},
     {id:'sin-c10-mat-ch10-l2', title:'Tangent Properties', html:'<h3>Tangent Properties</h3><p>Equal tangent segments from one external point form congruent triangles with the centre. The line from the centre to the external point bisects the angle between the tangents.</p><p>A tangent is the limiting case of a secant as its two intersection points merge — a useful way to remember tangent-secant theorems.</p>'},
     {id:'sin-c10-mat-ch10-l3', title:'Alternate Segment Theorem', html:'<h3>Alternate Segment Theorem</h3><p>The angle between a tangent and a chord through the point of contact equals the angle in the alternate segment. This solves many angle-chasing problems.</p><p>Example: tangent-chord angle 40° means the angle in the opposite arc is also 40° — a favourite exam result.</p>'}
   ],
   quiz:[
     {q:'A tangent touches a circle at:', options:['two points','exactly one point','no points','three points'], answer:1, explain:'One point of contact defines a tangent.'},
     {q:'The tangent at a point is ___ to the radius there.', options:['parallel','perpendicular','at 45°','coincident'], answer:1, explain:'Radius–tangent perpendicularity is the key theorem.'},
     {q:'From an external point, ___ tangents can be drawn.', options:['one','two','three','infinite'], answer:1, explain:'Two tangents — one to each side.'},
     {q:'The two tangent segments from one external point are:', options:['perpendicular','equal in length','parallel','unequal'], answer:1, explain:'Symmetry gives equal tangent lengths.'},
     {q:'The alternate segment theorem relates the tangent-chord angle to the angle in the:', options:['same segment','alternate (opposite) segment','centre','exterior'], answer:1, explain:'Tangent-chord angle = angle in the alternate segment.'},
     {q:'If the tangent-chord angle is 40°, the alternate segment angle is:', options:['80°','40°','50°','140°'], answer:1, explain:'They are equal by the theorem.'},
     {q:'A tangent is the limiting case of a:', options:['chord','secant','diameter','radius'], answer:1, explain:'As the secant’s two points merge, it becomes a tangent.'},
     {q:'The line from the centre to the external point ___ the angle between the two tangents.', options:['doubles','bisects','trisects','ignores'], answer:1, explain:'Symmetry bisects both the angle and the segment joining contact points.'},
     {q:'No tangent can be drawn from:', options:['outside','a point inside the circle','a point on the circle','far away'], answer:1, explain:'Interior points cannot reach the circle with a tangent.'},
     {q:'The point where a tangent touches is called the point of:', options:['intersection','contact','bisection','origin'], answer:1, explain:'The single touching point is the point of contact.'}
   ]},
  {id:'sin-c10-mat-ch11', title:'Chords and Arcs', urdu:'وتر اور قوس', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch11-l1', title:'Arcs and Central Angles', html:'<h3>Arcs and Central Angles</h3><p>Equal chords cut off equal arcs, and equal arcs subtend equal angles at the centre. Arc length and central angle grow together proportionally.</p><p>The degree measure of an arc is defined as its central angle — a semicircle measures 180°.</p>'},
     {id:'sin-c10-mat-ch11-l2', title:'Chords vs Arcs', html:'<h3>Chords vs Arcs</h3><p>If two arcs are equal, their chords are equal (converse of the earlier result). Longer chords subtend larger minor arcs.</p><p>These equivalences let you convert between chord, arc and angle information freely in proofs.</p>'},
     {id:'sin-c10-mat-ch11-l3', title:'Applications', html:'<h3>Applications</h3><p>To divide a circle into equal parts, mark off equal arcs. Clock faces use 30° per hour — equal arcs for equal hours.</p><p>Arc–chord reasoning combines with the perpendicular-bisector theorems to locate centres and prove constructions.</p>'}
   ],
   quiz:[
     {q:'Equal chords cut off:', options:['unequal arcs','equal arcs','no arcs','semicircles'], answer:1, explain:'Chord–arc correspondence is one-to-one.'},
     {q:'The degree measure of an arc equals its:', options:['chord length','central angle','radius','tangent angle'], answer:1, explain:'Arc measure is defined by the central angle.'},
     {q:'A semicircle measures:', options:['90°','180°','270°','360°'], answer:1, explain:'Half the full 360° circle.'},
     {q:'Equal arcs subtend ___ at the centre.', options:['unequal angles','equal angles','right angles','zero'], answer:1, explain:'Equal arcs → equal central angles.'},
     {q:'A clock’s hour marks are ___ apart.', options:['15°','30°','45°','60°'], answer:1, explain:'360° ÷ 12 hours = 30° per hour.'},
     {q:'Longer chords subtend:', options:['smaller arcs','larger minor arcs','no arcs','diameters'], answer:1, explain:'Chord length grows with its minor arc (up to the diameter).'},
     {q:'If two arcs of a circle are equal, their chords are:', options:['unequal','equal','parallel','diameters'], answer:1, explain:'The converse chord–arc theorem.'},
     {q:'A minor arc is:', options:['more than 180°','less than 180°','exactly 180°','the whole circle'], answer:1, explain:'Minor < 180° < major.'},
     {q:'Central angles are formed at the:', options:['circumference','centre','tangent point','chord'], answer:1, explain:'Two radii enclose a central angle.'},
     {q:'To split a circle into 6 equal parts, each central angle is:', options:['30°','60°','90°','120°'], answer:1, explain:'360° ÷ 6 = 60° each.'}
   ]},
  {id:'sin-c10-mat-ch12', title:'Angle in a Segment of a Circle', urdu:'دائرے کے قطعے میں زاویہ', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch12-l1', title:'Angles in the Same Segment', html:'<h3>Angles in the Same Segment</h3><p>Angles subtended by the same chord in the same segment are equal. If ∠ACB = 50° with C on the major arc, every other angle on that arc subtended by AB is also 50°.</p><p>This is proved by showing each equals half the central angle on AB. It is the workhorse of circle angle-chasing.</p>'},
     {id:'sin-c10-mat-ch12-l2', title:'Angle in a Semicircle', html:'<h3>Angle in a Semicircle</h3><p>The angle in a semicircle is a right angle (Thales’ theorem): any triangle with the diameter as one side is right-angled at the circle.</p><p>This gives a quick test for right angles and a construction method: the midpoint of the hypotenuse is the circumcentre.</p>'},
     {id:'sin-c10-mat-ch12-l3', title:'Cyclic Quadrilaterals', html:'<h3>Cyclic Quadrilaterals</h3><p>A quadrilateral is cyclic if all vertices lie on one circle. Opposite angles of a cyclic quadrilateral are supplementary (sum 180°).</p><p>The exterior angle of a cyclic quadrilateral equals the interior opposite angle — handy for proofs and a common exam question.</p>'}
   ],
   quiz:[
     {q:'Angles in the same segment subtended by the same chord are:', options:['supplementary','equal','90°','180°'], answer:1, explain:'Same chord, same segment → equal angles.'},
     {q:'The angle in a semicircle is:', options:['45°','60°','90°','180°'], answer:2, explain:'Thales’ theorem: angle in a semicircle is a right angle.'},
     {q:'Each such angle equals ___ the central angle on the same chord.', options:['twice','half','equal to','one-fourth'], answer:1, explain:'The inscribed angle is half the central angle.'},
     {q:'Opposite angles of a cyclic quadrilateral sum to:', options:['90°','180°','270°','360°'], answer:1, explain:'They are supplementary.'},
     {q:'A quadrilateral is cyclic if:', options:['it is a square','all vertices lie on one circle','it has equal sides','it is a rectangle'], answer:1, explain:'That is the definition of cyclic.'},
     {q:'The exterior angle of a cyclic quadrilateral equals the:', options:['adjacent angle','interior opposite angle','sum of all','right angle'], answer:1, explain:'A standard cyclic-quadrilateral result.'},
     {q:'A triangle with the diameter as one side is:', options:['acute','right-angled','obtuse','equilateral'], answer:1, explain:'Thales: the angle opposite the diameter is 90°.'},
     {q:'If ∠ACB = 50° on the major arc, another angle subtended by AB on the same arc is:', options:['100°','50°','25°','130°'], answer:1, explain:'Same segment → equal angles.'},
     {q:'In a cyclic quadrilateral, if one angle is 70°, its opposite is:', options:['70°','110°','90°','140°'], answer:1, explain:'180° − 70° = 110° (supplementary).'},
     {q:'The midpoint of the hypotenuse of a right triangle is its:', options:['incentre','circumcentre','centroid','orthocentre'], answer:1, explain:'The hypotenuse is the circumcircle’s diameter.'}
   ]},
  {id:'sin-c10-mat-ch13', title:'Practical Geometry - Circles', urdu:'عملی ہندسہ - دائرے', comingSoon:false,
   lessons:[
     {id:'sin-c10-mat-ch13-l1', title:'Drawing Tangents', html:'<h3>Drawing Tangents</h3><p>To draw a tangent at point P on a circle: join OP (radius) and construct the perpendicular at P — that line is the tangent.</p><p>From external point A: draw segment AO, bisect it at M, draw a circle with centre M through A and O; its intersections with the given circle are the tangent points.</p>'},
     {id:'sin-c10-mat-ch13-l2', title:'Circumscribed and Inscribed Circles', html:'<h3>Circumscribed and Inscribed Circles</h3><p>Circumcircle: construct perpendicular bisectors of the triangle’s sides; their meeting point (circumcentre) is the centre. Set the compass to a vertex and draw.</p><p>Incircle: construct angle bisectors; the incentre’s perpendicular distance to a side is the radius. The circle touches all three sides.</p>'},
     {id:'sin-c10-mat-ch13-l3', title:'Escribed Circles and Checks', html:'<h3>Escribed Circles and Checks</h3><p>An escribed circle touches one side externally and the extensions of the other two — its centre is where two exterior angle bisectors meet.</p><p>After each construction, verify: the circle should pass through vertices (circumcircle) or touch sides (incircle). Neat, labelled work earns full marks.</p>'}
   ],
   quiz:[
     {q:'To draw a tangent at point P on a circle, construct the ___ at P to OP.', options:['parallel','perpendicular','bisector','arc'], answer:1, explain:'Tangent ⟂ radius at the point of contact.'},
     {q:'Tangents from an external point are located using a circle on ___ as diameter.', options:['the radius','segment AO','the tangent','the chord'], answer:1, explain:'Thales’ circle on AO meets the given circle at tangent points.'},
     {q:'The circumcentre is found by:', options:['angle bisectors','perpendicular bisectors of sides','medians','altitudes'], answer:1, explain:'Perpendicular bisectors meet at the circumcentre.'},
     {q:'The incircle touches:', options:['the vertices','all three sides','one side','no side'], answer:1, explain:'The incircle is tangent to each side.'},
     {q:'The incentre is the meeting point of:', options:['medians','angle bisectors','perpendicular bisectors','altitudes'], answer:1, explain:'Angle bisectors are equidistant from the sides.'},
     {q:'The circumradius is the distance from the circumcentre to:', options:['a side','a vertex','the midpoint','outside'], answer:1, explain:'The circumcircle passes through all vertices.'},
     {q:'An escribed circle touches:', options:['all vertices','one side externally and extensions of two','the centre','nothing'], answer:1, explain:'Escribed = externally tangent to one side.'},
     {q:'The exterior angle bisectors meet at the:', options:['incentre','excentre','circumcentre','centroid'], answer:1, explain:'Two exterior + one interior bisector give an excentre.'},
     {q:'After constructing a circumcircle, verify that it:', options:['is round','passes through all three vertices','is small','has colour'], answer:1, explain:'The check confirms correct construction.'},
     {q:'The inradius is measured ___ from the incentre to a side.', options:['obliquely','perpendicularly','along the side','diagonally'], answer:1, explain:'The shortest (perpendicular) distance is the radius.'}
   ]}
]});
window.__saMergeCourse({id:'sin-class10-english', board:'sindh', title:'English', urdu:'انگریزی', class:'Class 10', icon:'📖', desc:'Sindh Board Class 10 English — full syllabus with lessons and quizzes.', chapters:[
  {id:'sin-c10-eng-ch1', title:'The Voice of God (Poem)', urdu:'خدا کی آواز (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch1-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>Louis I. Newman’s poem tells of a seeker who climbs a steeple to hear God, but God says: ‘Go down again, I dwell among the people.’</p><p>The message: God is found in serving humanity, not in isolated worship. True religion is love and service of mankind.</p>'},
     {id:'sin-c10-eng-ch1-l2', title:'Vocabulary', html:'<h3>Vocabulary</h3><p>steeple (tall tower of a church), to dwell (to live), seeker (one who searches). The poem’s diction is simple but profound.</p><p>The contrast between ‘topmost steeple’ (pride, height) and ‘among the people’ (humility, service) carries the theme.</p>'},
     {id:'sin-c10-eng-ch1-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Questions ask for the poem’s central idea and explanation of lines with reference to context. Learn the poet’s name and the moral: serve humanity to find God.</p><p>Grammar: narration and vocabulary from the poem; paraphrase the stanza in your own words.</p>'}
   ],
   quiz:[
     {q:'The poet of ‘The Voice of God’ is:', options:['Wordsworth','Louis I. Newman','Tennyson','Shelley'], answer:1, explain:'Louis I. Newman (1893–1972) wrote this short religious poem.'},
     {q:'The seeker climbs the:', options:['mountain','topmost steeple','tree','tower of silence'], answer:1, explain:'He climbs the church’s tallest part hoping to hear God.'},
     {q:'God tells him to go:', options:['higher','down among the people','away','to sleep'], answer:1, explain:'‘Go down again, I dwell among the people.’'},
     {q:'The poem’s message is:', options:['avoid people','serve humanity to find God','build churches','climb high'], answer:1, explain:'God is found in service of mankind, not isolation.'},
     {q:'A steeple is:', options:['a bell','the tall tower of a church','a prayer mat','a book'], answer:1, explain:'The steeple is the pointed tower of a church.'},
     {q:'‘Dwell’ means:', options:['leave','live','pray','sing'], answer:1, explain:'To dwell is to live or reside.'},
     {q:'The poem has ___ stanzas of four lines.', options:['one','two','three','four'], answer:1, explain:'It is a single quatrain-like short poem.'},
     {q:'The seeker first looks for God:', options:['among people','in a high lonely place','in books','in dreams'], answer:1, explain:'He climbs the steeple — seeking God in lofty isolation.'},
     {q:'The tone of God’s reply is:', options:['angry','gentle and guiding','mocking','silent'], answer:1, explain:'God kindly redirects him toward humanity.'},
     {q:'The central idea question asks for the poem’s:', options:['rhyme','moral and meaning','poet’s age','length'], answer:1, explain:'Exams ask for the central idea: service of humanity.'}
   ]},
  {id:'sin-c10-eng-ch2', title:'The Wise Caliph', urdu:'حکیم خلیفہ', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch2-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>This lesson tells stories of Hazrat Umar (R.A.), the second Caliph, famous for justice. He patrolled Madinah at night to check on his people.</p><p>One night he found a widow cooking stones to quiet her hungry children; he carried flour on his own back to her — justice with compassion.</p>'},
     {id:'sin-c10-eng-ch2-l2', title:'Character and Rule', html:'<h3>Character and Rule</h3><p>Umar (R.A.) said even a dog hungry on the Euphrates would be his responsibility. His rule combined strict justice with deep care for the weak.</p><p>The lesson teaches leadership: the ruler is the servant of the people, answerable to God for every citizen.</p>'},
     {id:'sin-c10-eng-ch2-l3', title:'Grammar Focus: Past Narrative', html:'<h3>Grammar Focus: Past Narrative</h3><p>Stories use past tense: ‘He walked, he saw, he carried.’ Practice changing present to past and learn vocabulary: caliph (successor/ruler), patrol (watch rounds).</p><p>Exam: write a character sketch of Hazrat Umar (R.A.) or narrate one incident.</p>'}
   ],
   quiz:[
     {q:'The Wise Caliph is:', options:['Hazrat Abu Bakr','Hazrat Umar','Hazrat Ali','Hazrat Usman'], answer:1, explain:'The lesson profiles Hazrat Umar (R.A.), the second Caliph.'},
     {q:'He patrolled Madinah:', options:['by day','at night','never','weekly'], answer:1, explain:'Night patrols let him see his people’s real condition.'},
     {q:'The widow was cooking:', options:['food','stones to quiet her children','tea','bread'], answer:1, explain:'She pretended to cook so her hungry children would sleep.'},
     {q:'Umar (R.A.) carried the flour:', options:['on a camel','on his own back','by servant','in a cart'], answer:1, explain:'He refused help, carrying it himself — servant-leadership.'},
     {q:'A caliph is a:', options:['poet','Muslim ruler/successor','trader','judge only'], answer:1, explain:'Caliph means successor to the Prophet as head of the Muslim state.'},
     {q:'His rule is famous for:', options:['wealth','justice with compassion','wars','palaces'], answer:1, explain:'Strict justice tempered with mercy defines his caliphate.'},
     {q:'‘He walked’ is in:', options:['present tense','past tense','future tense','passive'], answer:1, explain:'Walked is the past tense of walk.'},
     {q:'The lesson teaches rulers are:', options:['masters','servants of the people','owners','kings by force'], answer:1, explain:'The ruler serves and is answerable for the people.'},
     {q:'Umar feared answerability even for:', options:['armies','a hungry dog on the Euphrates','palaces','taxes'], answer:1, explain:'His famous saying shows total sense of responsibility.'},
     {q:'A character sketch describes a person’s:', options:['clothes only','qualities and actions','house','wealth'], answer:1, explain:'It portrays character, deeds and personality.'}
   ]},
  {id:'sin-c10-eng-ch3', title:'Professions: Teaching and Fishing', urdu:'پیشے: تدریس اور ماہی گیری', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch3-l1', title:'Teaching as a Profession', html:'<h3>Teaching as a Profession</h3><p>Teaching is called the noblest profession: teachers shape minds and build nations. A good teacher is patient, knowledgeable and just.</p><p>The lesson honours teachers as nation-builders whose influence outlives them — students carry their lessons for life.</p>'},
     {id:'sin-c10-eng-ch3-l2', title:'Fishing as a Profession', html:'<h3>Fishing as a Profession</h3><p>Fishermen brave the sea before dawn, facing storms and uncertainty. Their hard, honest labour feeds millions and earns foreign exchange.</p><p>The lesson dignifies manual labour: no honest work is low. It also notes the sea’s dangers and the fisherman’s courage.</p>'},
     {id:'sin-c10-eng-ch3-l3', title:'Grammar Focus: Comparison', html:'<h3>Grammar Focus: Comparison</h3><p>Compare professions using adjectives: noble, nobler, noblest. Practice paragraph writing comparing two professions.</p><p>Exam: ‘Which profession would you choose and why?’ — write with reasons and examples.</p>'}
   ],
   quiz:[
     {q:'Teaching is called the:', options:['easiest job','noblest profession','richest trade','oldest craft'], answer:1, explain:'Teachers build minds and nations — hence noblest.'},
     {q:'A good teacher is:', options:['strict only','patient, knowledgeable and just','lenient only','silent'], answer:1, explain:'These three qualities define good teaching.'},
     {q:'Fishermen face:', options:['comfort','storms and uncertainty at sea','offices','crowds'], answer:1, explain:'The sea is dangerous and catches uncertain.'},
     {q:'The lesson teaches that no honest work is:', options:['low','hard','tiring','paid'], answer:0, explain:'Dignity of labour: all honest work deserves respect.'},
     {q:'‘Nobler’ is the ___ degree.', options:['positive','comparative','superlative','none'], answer:1, explain:'Comparative compares two professions.'},
     {q:'Teachers’ influence:', options:['ends at exams','outlives them in students','is small','is paid only'], answer:1, explain:'Lessons taught shape lives long after.'},
     {q:'Fishing earns the country:', options:['nothing','foreign exchange via exports','debts','losses'], answer:1, explain:'Fish exports bring foreign exchange.'},
     {q:'Which sentence compares correctly?', options:['Teaching is noble than fishing','Teaching is nobler than fishing','Teaching is most noble than fishing','Teaching nobler is'], answer:1, explain:'Comparative ‘nobler’ with ‘than’ is correct.'},
     {q:'The two professions teach:', options:['rivalry','dignity of all honest work','laziness','wealth'], answer:1, explain:'Both lessons honour sincere labour.'},
     {q:'A paragraph comparing professions needs:', options:['one sentence','points of similarity and difference','poetry','dialogue'], answer:1, explain:'Comparison examines both sides with reasons.'}
   ]},
  {id:'sin-c10-eng-ch4', title:'Little Things (Poem)', urdu:'چھوٹی چھوٹی باتیں (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch4-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>Julia Fletcher Carney’s poem teaches that ‘little things’ — small kindnesses, drops of water, grains of sand — make the mighty ocean and pleasant land.</p><p>The refrain: little deeds of kindness, little words of love, make our earth an Eden (paradise) above.</p>'},
     {id:'sin-c10-eng-ch4-l2', title:'Theme', html:'<h3>Theme</h3><p>Great results come from small efforts: drops form oceans, moments form years, kind words form happiness. Never despise small beginnings.</p><p>The poem is optimistic: everyone can contribute through small good acts.</p>'},
     {id:'sin-c10-eng-ch4-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Learn the central idea: small things collectively create great things. Practice explaining ‘Little drops of water, little grains of sand’ with reference to context.</p><p>Vocabulary: mighty (powerful), Eden (paradise), mission (purpose).</p>'}
   ],
   quiz:[
     {q:'The poet of ‘Little Things’ is:', options:['Newman','Julia Fletcher Carney','Longfellow','Tennyson'], answer:1, explain:'Julia Fletcher Carney wrote this moral poem.'},
     {q:'Little drops of water make the:', options:['river','lake','mighty ocean','pond'], answer:2, explain:'Small drops collectively form the mighty ocean.'},
     {q:'Little words of love make earth:', options:['a desert','an Eden above','a mountain','a sea'], answer:1, explain:'Kind words turn earth into a paradise.'},
     {q:'The poem teaches:', options:['big things only matter','small efforts create great results','laziness','silence'], answer:1, explain:'Its moral: never despise small beginnings.'},
     {q:'‘Mighty’ means:', options:['weak','powerful','small','slow'], answer:1, explain:'Mighty = strong, powerful.'},
     {q:'Eden refers to:', options:['a city','paradise','a river','a king'], answer:1, explain:'Eden is the biblical paradise.'},
     {q:'Moments make:', options:['hours','the year (time)','money','friends'], answer:1, explain:'‘Little moments’ build up into years — time’s small units.'},
     {q:'The poem’s tone is:', options:['sad','optimistic and encouraging','angry','cold'], answer:1, explain:'It cheerfully urges small good deeds.'},
     {q:'‘Little deeds of kindness’ are:', options:['useless','the poem’s recipe for a happy world','for children only','old-fashioned'], answer:1, explain:'Kindness in small acts is the central advice.'},
     {q:'Reference-to-context questions ask for:', options:['the poet’s age','explanation of given lines','the rhyme only','the title only'], answer:1, explain:'You explain the lines’ meaning and context.'}
   ]},
  {id:'sin-c10-eng-ch5', title:'A Visit', urdu:'ایک ملاقات', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch5-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>‘A Visit’ describes a visit to a place or person — observing keenly and recording impressions. It trains descriptive writing.</p><p>Good description uses the five senses: what you saw, heard, smelled and felt. Order details logically — as you experienced them.</p>'},
     {id:'sin-c10-eng-ch5-l2', title:'Structure of a Visit Account', html:'<h3>Structure of a Visit Account</h3><p>Begin with purpose and company, describe the journey, then the place in vivid detail, and end with feelings and lessons learned.</p><p>Use present tense for general facts and past tense for what happened: ‘The museum houses… We saw…’</p>'},
     {id:'sin-c10-eng-ch5-l3', title:'Grammar Focus: Descriptive Adjectives', html:'<h3>Grammar Focus: Descriptive Adjectives</h3><p>Adjectives paint pictures: ancient fort, roaring crowd, fragrant garden. Avoid repeating ‘nice’ — use precise words.</p><p>Exam: write a visit to a historical place, factory or hospital in about 150 words.</p>'}
   ],
   quiz:[
     {q:'A ‘visit’ account is:', options:['a story','a descriptive record of going somewhere','a letter','a poem'], answer:1, explain:'It describes a place/person visited with impressions.'},
     {q:'Good description uses:', options:['one sense','the five senses','no senses','only sight'], answer:1, explain:'Sight, sound, smell, touch, taste make writing vivid.'},
     {q:'Details should be ordered:', options:['randomly','as experienced','alphabetically','by length'], answer:1, explain:'Logical, experienced order keeps the account clear.'},
     {q:'‘The museum houses…’ uses:', options:['past tense','present tense for facts','future','passive only'], answer:1, explain:'General truths about the place use present tense.'},
     {q:'‘We saw…’ uses:', options:['present','past tense for events','future','conditional'], answer:1, explain:'What happened during the visit is past tense.'},
     {q:'Avoid repeating the adjective:', options:['ancient','nice','fragrant','roaring'], answer:1, explain:'‘Nice’ is vague — precise adjectives are better.'},
     {q:'A visit account ends with:', options:['a bill','feelings and lessons learned','a map','names'], answer:1, explain:'Conclude with impressions and what you learned.'},
     {q:'Descriptive writing mainly answers:', options:['why','what it is like','when','who'], answer:1, explain:'It shows the reader what the place is like.'},
     {q:'‘Roaring crowd’ — ‘roaring’ is an:', options:['verb','adjective','noun','adverb'], answer:1, explain:'It describes the noun ‘crowd’.'},
     {q:'About 150 words means:', options:['one line','a short paragraph set','ten pages','a book'], answer:1, explain:'Exam visit accounts are brief — around 150 words.'}
   ]},
  {id:'sin-c10-eng-ch6', title:'King Faisal', urdu:'شاہ فیصل', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch6-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>This lesson profiles King Faisal of Saudi Arabia (1964–1975), admired across the Muslim world for dignity, faith and support of Muslim causes.</p><p>He championed Muslim unity, supported Pakistan, and used oil policy boldly in 1973 — earning love from ordinary Muslims worldwide.</p>'},
     {id:'sin-c10-eng-ch6-l2', title:'Leadership Qualities', html:'<h3>Leadership Qualities</h3><p>Faisal combined piety with statesmanship: simple living, firm decisions, and fearless speech for Palestine and Muslim rights.</p><p>His assassination in 1975 shocked the Muslim world; leaders like Bhutto mourned him deeply.</p>'},
     {id:'sin-c10-eng-ch6-l3', title:'Grammar Focus: Biography Writing', html:'<h3>Grammar Focus: Biography Writing</h3><p>Biographies use past tense and dates: ‘He was born…, he became king in 1964.’ Organize: birth, rise, achievements, death, legacy.</p><p>Exam: write a short biography or a paragraph on a great Muslim leader.</p>'}
   ],
   quiz:[
     {q:'King Faisal ruled:', options:['Egypt','Saudi Arabia','Pakistan','Jordan'], answer:1, explain:'He was King of Saudi Arabia, 1964–1975.'},
     {q:'He is admired for:', options:['wealth only','faith, dignity and Muslim unity','palaces','wars'], answer:1, explain:'His piety and stand for Muslim causes won hearts.'},
     {q:'In 1973 he boldly used:', options:['armies','oil policy','speeches only','trade bans'], answer:1, explain:'The oil embargo asserted Muslim economic power.'},
     {q:'He supported:', options:['only Saudis','Muslim causes including Pakistan and Palestine','Europe','no one'], answer:1, explain:'He aided Pakistan and spoke for Palestine.'},
     {q:'His rule ended by:', options:['election','assassination in 1975','retirement','illness only'], answer:1, explain:'He was assassinated in 1975, shocking the Muslim world.'},
     {q:'Biographies mainly use:', options:['future tense','past tense','present tense','poetry'], answer:1, explain:'Life events already happened — past tense.'},
     {q:'A biography is organized as:', options:['random facts','birth, rise, achievements, legacy','dialogue','poems'], answer:1, explain:'Chronological order suits life stories.'},
     {q:'‘Championed’ means:', options:['opposed','fought for / supported strongly','ignored','feared'], answer:1, explain:'To champion a cause is to defend it actively.'},
     {q:'Statesmanship means skill in:', options:['farming','governing and diplomacy','poetry','trade'], answer:1, explain:'Statesmen lead nations wisely.'},
     {q:'His simple living showed:', options:['poverty','piety and humility','weakness','fear'], answer:1, explain:'Simplicity reflected his faith and character.'}
   ]},
  {id:'sin-c10-eng-ch7', title:'From a Railway Carriage (Poem)', urdu:'ریل کی بوگی سے (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch7-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>Robert Louis Stevenson’s poem captures a train journey’s speed: bridges, houses, hedges and ditches flash past ‘faster than fairies, faster than witches’.</p><p>The child speaker watches the world race by — a tramp, a mill, a cart — and wishes the journey would never end.</p>'},
     {id:'sin-c10-eng-ch7-l2', title:'Imagery and Rhythm', html:'<h3>Imagery and Rhythm</h3><p>Fast rhythm mimics the train: short lines, quick images. Similes (‘as fast as…’) and the list of passing sights create motion.</p><p>The poem celebrates childlike wonder at speed and the passing countryside.</p>'},
     {id:'sin-c10-eng-ch7-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Central idea: the joy and speed of a train journey seen through a child’s eyes. Learn the poet’s name and explain the famous simile lines.</p><p>Vocabulary: carriage (train compartment), ditch (narrow trench), tramp (wanderer).</p>'}
   ],
   quiz:[
     {q:'The poet is:', options:['Newman','Robert Louis Stevenson','Wordsworth','Kipling'], answer:1, explain:'Stevenson wrote this beloved train poem.'},
     {q:'Things pass ‘faster than:', options:['trains','fairies and witches','birds','cars'], answer:1, explain:'The famous simile stresses magical speed.'},
     {q:'The speaker is a:', options:['driver','child passenger','guard','farmer'], answer:1, explain:'A child’s wondering voice narrates the journey.'},
     {q:'The poem’s rhythm is:', options:['slow','fast like the train','silent','broken'], answer:1, explain:'Quick lines and images mimic rushing motion.'},
     {q:'A ‘carriage’ here means a:', options:['horse cart','train compartment','baby pram','ship'], answer:1, explain:'Railway carriage = passenger compartment.'},
     {q:'The child sees a:', options:['tramp, mill and cart','palace','sea','desert'], answer:0, explain:'Passing sights include a tramp, a mill, a cart.'},
     {q:'The child wishes the journey would:', options:['stop','never end','slow down','turn back'], answer:1, explain:'Delight makes him want it to continue.'},
     {q:'‘Faster than fairies’ is a:', options:['metaphor','simile','pun','proverb'], answer:1, explain:'‘Than’ comparisons with like/as are similes.'},
     {q:'The poem celebrates:', options:['fear','childlike wonder at speed','sadness','work'], answer:1, explain:'Joy and wonder at the rushing world.'},
     {q:'Imagery in the poem appeals mainly to:', options:['smell',' sight (visual images)','taste','touch'], answer:1, explain:'Flashing sights dominate the poem.'}
   ]},
  {id:'sin-c10-eng-ch8', title:'Dignity of Work', urdu:'محنت کی عظمت', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch8-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>This lesson teaches that all honest work is honourable — the farmer, sweeper and craftsman serve society as truly as the officer.</p><p>It condemns looking down on manual workers and urges youth to respect labour and choose work by aptitude, not false prestige.</p>'},
     {id:'sin-c10-eng-ch8-l2', title:'Examples', html:'<h3>Examples</h3><p>The Prophet (PBUH) and his companions did manual work; nations like Japan rose through respect for labour. Idleness, not work, is shameful.</p><p>Skilled workers — electricians, mechanics, farmers — are the backbone of the economy.</p>'},
     {id:'sin-c10-eng-ch8-l3', title:'Grammar Focus: Essay Writing', html:'<h3>Grammar Focus: Essay Writing</h3><p>Structure: introduction, body (arguments + examples), conclusion. Use formal vocabulary: dignity, labour, vocation.</p><p>Exam: write an essay/paragraph on ‘Dignity of Labour’.</p>'}
   ],
   quiz:[
     {q:'The lesson’s message:', options:['office jobs only matter','all honest work is honourable','work is shameful','avoid labour'], answer:1, explain:'Dignity belongs to every honest occupation.'},
     {q:'Looking down on manual workers is:', options:['fine','condemned','wise','modern'], answer:1, explain:'The lesson calls such contempt wrong.'},
     {q:'The Prophet (PBUH) and companions:', options:['avoided work','did manual work','hired servants only','rests'], answer:1, explain:'Their example dignifies labour.'},
     {q:'Nations rise through:', options:['idleness','respect for labour','luck','loans'], answer:1, explain:'Japan-style work ethic builds prosperity.'},
     {q:'Youth should choose work by:', options:['prestige only','aptitude, not false prestige','pay only','ease'], answer:1, explain:'Suitability beats snobbery in choosing vocations.'},
     {q:'An essay’s structure is:', options:['one paragraph','introduction, body, conclusion','dialogue','list'], answer:1, explain:'The three-part structure organizes argument.'},
     {q:'‘Vocation’ means:', options:['holiday','occupation/profession','voice','village'], answer:1, explain:'Vocation = one’s work or calling.'},
     {q:'Skilled workers are the ___ of the economy.', options:['burden','backbone','guests','rulers'], answer:1, explain:'They carry productive life.'},
     {q:'Idleness is described as:', options:['fine','shameful','smart','restful'], answer:1, explain:'Shame lies in idleness, not in work.'},
     {q:'Formal essays avoid:', options:['arguments','slang','examples','conclusions'], answer:1, explain:'Slang breaks formal tone.'}
   ]},
  {id:'sin-c10-eng-ch9', title:'A Nation’s Strength (Poem)', urdu:'قوم کی طاقت (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch9-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>Ralph Waldo Emerson’s poem asks: ‘What makes a nation’s pillars high?’ Not gold, not armies — but men: brave, honest, true citizens.</p><p>‘Men’ here means people of character — those who stand for truth, work hard and sacrifice for the nation.</p>'},
     {id:'sin-c10-eng-ch9-l2', title:'Theme', html:'<h3>Theme</h3><p>A nation’s strength is moral, not material: wealth and weapons decay, but virtuous citizens endure. The poem is a call to character-building.</p><p>It suits Pakistan’s context: our strength lies in honest, hardworking Pakistanis.</p>'},
     {id:'sin-c10-eng-ch9-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Central idea: character, not wealth or arms, makes a nation strong. Explain ‘Not gold but only men can make a people great and strong.’</p><p>Vocabulary: pillar (support), rampart (defensive wall).</p>'}
   ],
   quiz:[
     {q:'The poet is:', options:['Longfellow','Ralph Waldo Emerson','Stevenson','Newman'], answer:1, explain:'Emerson, the American thinker-poet.'},
     {q:'A nation’s pillars are made high by:', options:['gold','brave honest men','armies','palaces'], answer:1, explain:'Character, not wealth, builds nations.'},
     {q:'‘Men’ in the poem means:', options:['males only','people of character','soldiers','kings'], answer:1, explain:'It stands for virtuous citizens.'},
     {q:'Material wealth is described as:', options:['lasting','decaying / insufficient','enough','holy'], answer:1, explain:'Gold cannot make a people great and strong.'},
     {q:'The poem is a call to:', options:['war','character-building','trade','silence'], answer:1, explain:'Moral strength is the true national power.'},
     {q:'A ‘pillar’ is a:', options:['weakness','support','weapon','coin'], answer:1, explain:'Pillars uphold the nation’s structure.'},
     {q:'The poem suits Pakistan because:', options:['it is long','our strength lies in honest citizens','it is old','it rhymes'], answer:1, explain:'Its message fits nation-building.'},
     {q:'‘Not gold but only men…’ means:', options:['buy men','wealth alone cannot make greatness','gold is useless','men are gold'], answer:1, explain:'Human character outweighs riches.'},
     {q:'The tone is:', options:['mocking','inspiring and serious','playful','sad'], answer:1, explain:'It solemnly urges virtue.'},
     {q:'Ramparts are:', options:['rivers','defensive walls','roads','bridges'], answer:1, explain:'Ramparts = fortified walls.'}
   ]},
  {id:'sin-c10-eng-ch10', title:'Beautiful Hands (Poem)', urdu:'خوبصورت ہاتھ (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch10-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>The poem contrasts hands made beautiful by rings and idle luxury with hands made beautiful by work, service and sacrifice — a mother’s hands, a worker’s hands.</p><p>True beauty lies in what hands DO: feeding the hungry, healing the sick, building the nation.</p>'},
     {id:'sin-c10-eng-ch10-l2', title:'Theme', html:'<h3>Theme</h3><p>Inner worth outshines outward decoration. The poem honours labouring hands — wrinkled, rough, but noble.</p><p>It echoes the dignity-of-labour lesson in verse form.</p>'},
     {id:'sin-c10-eng-ch10-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Central idea: hands are beautiful through service, not ornament. Explain the contrast the poet draws.</p><p>Vocabulary: toil (hard work), wrinkled, noble.</p>'}
   ],
   quiz:[
     {q:'Beautiful hands are those that:', options:['wear rings','serve through work','stay idle','are soft'], answer:1, explain:'Service, not ornament, makes hands beautiful.'},
     {q:'The poem contrasts:', options:['two poets','decorated idle hands vs working hands','men and women','day and night'], answer:1, explain:'Ornament vs service is the core contrast.'},
     {q:'A mother’s hands are beautiful because they:', options:['are white','nurture the family','rest','type'], answer:1, explain:'Care and sacrifice beautify them.'},
     {q:'True beauty lies in:', options:['jewellery','what hands do','idleness','wealth'], answer:1, explain:'Deeds, not decoration, define beauty.'},
     {q:'‘Toil’ means:', options:['rest','hard work','travel','sleep'], answer:1, explain:'Toil = laborious effort.'},
     {q:'The poem honours:', options:['kings','labouring hands','soldiers only','poets'], answer:1, explain:'Workers’ rough hands are called noble.'},
     {q:'Outward decoration is:', options:['enough','less than inner worth','forbidden','everything'], answer:1, explain:'Inner worth outshines outward show.'},
     {q:'The poem’s form is:', options:['prose','verse with a moral','drama','essay'], answer:1, explain:'It is a moral poem.'},
     {q:'Wrinkled hands show:', options:['age only','years of service','disease','laziness'], answer:1, explain:'Wrinkles here mark devoted labour.'},
     {q:'The lesson connects with:', options:['King Faisal','A Visit','Dignity of Work','Shopping'], answer:2, explain:'Both honour honest labour.'}
   ]},
  {id:'sin-c10-eng-ch11', title:'A Village Fair', urdu:'دیہی میلہ', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch11-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>The lesson paints a village fair: colourful stalls, folk songs, wrestling bouts, merry-go-rounds and crowds in festive dress.</p><p>It shows rural Pakistan’s culture — simple joys, community bonding and traditional crafts on display.</p>'},
     {id:'sin-c10-eng-ch11-l2', title:'Observations', html:'<h3>Observations</h3><p>The writer notes the noise and colour, the sweet-sellers, the jugglers, and the farmers buying tools and cattle. Fairs blend trade with entertainment.</p><p>Such fairs preserve folk traditions in an age of screens and cities.</p>'},
     {id:'sin-c10-eng-ch11-l3', title:'Grammar Focus: Descriptive Writing', html:'<h3>Grammar Focus: Descriptive Writing</h3><p>Use vivid adjectives and present/past mix. Exam: describe a fair, festival or bazaar you visited.</p><p>Vocabulary: stall, juggler, wrestling bout, festive.</p>'}
   ],
   quiz:[
     {q:'A village fair has:', options:['offices','stalls, songs and crowds','silence','factories'], answer:1, explain:'Colourful stalls and folk entertainment define it.'},
     {q:'Fairs blend:', options:['war and peace','trade with entertainment','school and office','day and night'], answer:1, explain:'Buying, selling and fun go together.'},
     {q:'Farmers at fairs buy:', options:['books','tools and cattle','cars','phones'], answer:1, explain:'Fairs serve rural practical needs.'},
     {q:'Fairs preserve:', options:['pollution','folk traditions','noise','debts'], answer:1, explain:'They keep culture alive amid modernity.'},
     {q:'‘Festive’ means:', options:['sad','joyful, celebrating','quiet','dark'], answer:1, explain:'Festive = full of celebration.'},
     {q:'A juggler:', options:['sells','entertains with tricks','fights','cooks'], answer:1, explain:'Jugglers perform skill tricks.'},
     {q:'Descriptive writing needs:', options:['numbers only','vivid adjectives','silence','lists'], answer:1, explain:'Adjectives paint the scene.'},
     {q:'The writer’s tone is:', options:['critical','appreciative of rural culture','bored','angry'], answer:1, explain:'He enjoys the fair’s colour and life.'},
     {q:'Merry-go-rounds are:', options:['shops','rides','foods','songs'], answer:1, explain:'They are the fair’s rides.'},
     {q:'Folk songs at fairs show:', options:['noise','community bonding','illiteracy','poverty'], answer:1, explain:'Shared music unites the village.'}
   ]},
  {id:'sin-c10-eng-ch12', title:'Speak Gently (Poem)', urdu:'نرمی سے بولو (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch12-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>David Bates’ poem urges gentle speech: ‘Speak gently — it is better far to rule by love than fear.’ Harsh words wound; kind words heal.</p><p>The poem addresses children, the aged, the sad and the lonely — gentleness suits every heart.</p>'},
     {id:'sin-c10-eng-ch12-l2', title:'Theme', html:'<h3>Theme</h3><p>Love outlasts force: empires built on fear fall, but kindness wins lasting loyalty. Speech shapes relationships.</p><p>The poem is a conduct manual in verse — courtesy as strength.</p>'},
     {id:'sin-c10-eng-ch12-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Central idea: gentle speech is mightier than harsh command. Explain ‘It is better far to rule by love, than fear.’</p><p>Vocabulary: gently, weary (tired), drear (gloomy).</p>'}
   ],
   quiz:[
     {q:'The poet urges:', options:['loud speech','gentle speech','silence','commands'], answer:1, explain:'‘Speak gently’ is the poem’s refrain.'},
     {q:'It is better to rule by:', options:['fear','love','force','money'], answer:1, explain:'Love outlasts fear, says the poem.'},
     {q:'Harsh words:', options:['help','wound hearts','are funny','are strong'], answer:1, explain:'Unkind speech hurts deeply.'},
     {q:'The poem speaks to:', options:['kings only','children, aged, sad, lonely — all','poets','soldiers'], answer:1, explain:'Gentleness suits every heart.'},
     {q:'‘Weary’ means:', options:['happy','tired','angry','young'], answer:1, explain:'Weary = exhausted.'},
     {q:'Courtesy is presented as:', options:['weakness','strength','old habit','waste'], answer:1, explain:'Gentleness is true strength.'},
     {q:'Empires built on fear:', options:['last','fall','grow','shine'], answer:1, explain:'Force cannot win lasting loyalty.'},
     {q:'The poem is a:', options:['story','conduct manual in verse','letter','play'], answer:1, explain:'It teaches behaviour poetically.'},
     {q:'Kind words:', options:['are weak','heal hearts','are lies','cost money'], answer:1, explain:'They comfort and mend.'},
     {q:'‘Drear’ means:', options:['bright','gloomy','fast','loud'], answer:1, explain:'Drear = dull and depressing.'}
   ]},
  {id:'sin-c10-eng-ch13', title:'Shopping', urdu:'خریداری', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch13-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>‘Shopping’ is a practical lesson: how to shop wisely — make a list, compare prices and quality, check expiry dates, and bargain politely.</p><p>It warns against impulse buying and cheating shopkeepers: count change, keep receipts, prefer reliable shops.</p>'},
     {id:'sin-c10-eng-ch13-l2', title:'Smart Consumer Habits', html:'<h3>Smart Consumer Habits</h3><p>Buy what you need, not what glitters. Check weights, measures and seals; avoid expired or damaged goods.</p><p>The lesson builds life skills: budgeting and honest dealing protect both buyer and seller.</p>'},
     {id:'sin-c10-eng-ch13-l3', title:'Grammar Focus: Instructions', html:'<h3>Grammar Focus: Instructions</h3><p>Imperatives give advice: ‘Make a list. Compare prices.’ Exam: write dos and don’ts of shopping or a dialogue at a shop.</p><p>Vocabulary: bargain, receipt, expiry, impulse.</p>'}
   ],
   quiz:[
     {q:'Smart shopping starts with:', options:['money','a list','a car','friends'], answer:1, explain:'A list prevents impulse buying.'},
     {q:'Compare:', options:['nothing','prices and quality','colours only','shops’ names'], answer:1, explain:'Comparison gets value for money.'},
     {q:'Check ___ before buying food.', options:['the shop’s name','expiry dates','the bag','the ad'], answer:1, explain:'Expired goods harm health.'},
     {q:'Impulse buying is:', options:['wise','buying without planning','cheap','rare'], answer:1, explain:'Unplanned purchases waste money.'},
     {q:'Bargain:', options:['rudely','politely','never','angrily'], answer:1, explain:'Polite haggling is the bazaar’s art.'},
     {q:'Keep the:', options:['bag','receipt','change only','ad'], answer:1, explain:'Receipts prove purchase for returns.'},
     {q:'‘Make a list’ is an:', options:['question','imperative (command/advice)','exclamation','wish'], answer:1, explain:'Imperatives give instructions.'},
     {q:'Honest dealing protects:', options:['sellers only','both buyer and seller','no one','thieves'], answer:1, explain:'Fair trade benefits both sides.'},
     {q:'Budgeting means:', options:['spending freely','planning spending within income','borrowing','saving nothing'], answer:1, explain:'Budgets control money wisely.'},
     {q:'Prefer ___ shops.', options:['unknown','reliable','distant','costly'], answer:1, explain:'Trusted shops reduce cheating risk.'}
   ]},
  {id:'sin-c10-eng-ch14', title:'The Hand that Rocks the Cradle (Poem)', urdu:'جو ہاتھ پالنا جھلاتا ہے (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch14-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>William Ross Wallace’s poem honours mothers: ‘The hand that rocks the cradle is the hand that rules the world.’</p><p>Mothers shape children’s character, and through them, the nation’s future — a mother’s influence outweighs kings’.</p>'},
     {id:'sin-c10-eng-ch14-l2', title:'Theme', html:'<h3>Theme</h3><p>The poem elevates motherhood: early training at a mother’s knee decides a person’s destiny. Respect and gratitude to mothers is the moral.</p><p>It pairs with the ‘Role of Women’ lesson — women build nations from the cradle.</p>'},
     {id:'sin-c10-eng-ch14-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Central idea: mothers mould the world through their children. Explain the title line with reference to context.</p><p>Vocabulary: cradle, to rule, destiny.</p>'}
   ],
   quiz:[
     {q:'The poet is:', options:['Bates','William Ross Wallace','Emerson','Carney'], answer:1, explain:'Wallace wrote this tribute to mothers.'},
     {q:'The hand that rocks the cradle:', options:['is weak','rules the world','sleeps','hides'], answer:1, explain:'Mothers shape the future through children.'},
     {q:'Mothers influence:', options:['nothing','children’s character and the nation','only homes','only sons'], answer:1, explain:'Early training decides destiny.'},
     {q:'The poem’s moral is:', options:['obey kings','respect and gratitude to mothers','avoid work','seek wealth'], answer:1, explain:'Honour the mother’s role.'},
     {q:'A cradle is a:', options:['bed','baby’s rocking bed','chair','toy'], answer:1, explain:'Cradles rock infants to sleep.'},
     {q:'Kings’ power is ___ a mother’s influence.', options:['greater than','less lasting than','equal to','above'], answer:1, explain:'The poem ranks mothers above kings.'},
     {q:'The title line means:', options:['mothers are rulers','mothers shape the world via children','mothers want thrones','cradles rule'], answer:1, explain:'Influence through upbringing rules the future.'},
     {q:'The poem pairs with the lesson:', options:['Shopping','Role of Women in Pakistan’s Creation','King Faisal','A Visit'], answer:1, explain:'Both honour women’s nation-building.'},
     {q:'Early training decides:', options:['nothing','a person’s destiny','school only','jobs'], answer:1, explain:'The mother’s knee is destiny’s classroom.'},
     {q:'The tone is:', options:['mocking','reverent and grateful','cold','angry'], answer:1, explain:'Deep respect fills the poem.'}
   ]},
  {id:'sin-c10-eng-ch15', title:'An African Village', urdu:'ایک افریقی گاؤں', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch15-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>The lesson describes an African village: mud huts, communal life, drums, dances and elders settling disputes under a tree.</p><p>It shows a simple, close-knit society where people share work, food and festivals — community over individualism.</p>'},
     {id:'sin-c10-eng-ch15-l2', title:'Contrasts', html:'<h3>Contrasts</h3><p>Village life is peaceful but poor in facilities: no hospitals, few schools. The writer neither romanticizes nor pities — just observes.</p><p>The lesson builds global awareness: different cultures, shared humanity.</p>'},
     {id:'sin-c10-eng-ch15-l3', title:'Grammar Focus: Comparison and Contrast', html:'<h3>Grammar Focus: Comparison and Contrast</h3><p>Compare village vs city life: ‘While the city has hospitals, the village has…’ Exam: paragraph comparing two lifestyles.</p><p>Vocabulary: communal, elder, hut, festival.</p>'}
   ],
   quiz:[
     {q:'The village has:', options:['skyscrapers','mud huts and communal life','factories','malls'], answer:1, explain:'Simple huts and shared living define it.'},
     {q:'Disputes are settled by:', options:['police','elders under a tree','courts','army'], answer:1, explain:'Elders mediate communally.'},
     {q:'Village society values:', options:['individualism','community','wealth','speed'], answer:1, explain:'Sharing and togetherness rule.'},
     {q:'The village lacks:', options:['food','hospitals and schools','drums','huts'], answer:1, explain:'Facilities are few — the lesson’s honest note.'},
     {q:'The writer’s attitude is:', options:['mocking','observant and balanced','pitying','angry'], answer:1, explain:'He neither romanticizes nor pities.'},
     {q:'The lesson builds:', options:['fear','global awareness','hatred','isolation'], answer:1, explain:'Different cultures, shared humanity.'},
     {q:'‘Communal’ means:', options:['lonely','shared by the community','rich','urban'], answer:1, explain:'Communal = of the community.'},
     {q:'Compare-contrast paragraphs use:', options:['one side only','‘while/whereas’ structures','poems','lists only'], answer:1, explain:'Contrast markers organize comparison.'},
     {q:'Festivals in the village involve:', options:['silence','drums and dances','offices','exams'], answer:1, explain:'Music and dance celebrate together.'},
     {q:'The lesson’s main contrast is:', options:['rich vs poor','village simplicity vs city facilities','day vs night','men vs women'], answer:1, explain:'Simple communal life versus modern amenities.'}
   ]},
  {id:'sin-c10-eng-ch16', title:'King Bruce and the Spider (Poem)', urdu:'کنگ بروس اور مکڑی (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch16-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>The ballad tells of King Robert Bruce of Scotland, defeated and hiding in a cave, watching a spider try again and again to spin its web.</p><p>After six failures the spider succeeds on the seventh try — inspiring Bruce to rally his men and win freedom: ‘If at first you don’t succeed, try, try again.’</p>'},
     {id:'sin-c10-eng-ch16-l2', title:'Theme', html:'<h3>Theme</h3><p>Perseverance conquers: repeated effort, not despair, brings victory. The tiny spider teaches the great king courage.</p><p>The poem is a timeless motto for students facing exams and setbacks.</p>'},
     {id:'sin-c10-eng-ch16-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Narrate the story and its moral. Vocabulary: cave, web, persevere. Grammar: past-tense narration.</p><p>The refrain ‘Try, try again’ is the poem’s heart — quote it.</p>'}
   ],
   quiz:[
     {q:'King Bruce was king of:', options:['England','Scotland','France','Spain'], answer:1, explain:'Robert Bruce fought for Scotland’s freedom.'},
     {q:'He hid in a:', options:['palace','cave','ship','forest hut'], answer:1, explain:'Defeated, he sheltered in a cave.'},
     {q:'The spider failed ___ times before succeeding.', options:['five','six','seven','three'], answer:1, explain:'Six failures, success on the seventh try.'},
     {q:'The spider inspired Bruce to:', options:['surrender','try again and fight','sleep','flee'], answer:1, explain:'Its perseverance rekindled his courage.'},
     {q:'The poem’s motto:', options:['give up','‘Try, try again’','rest','hide'], answer:1, explain:'The famous refrain.'},
     {q:'The theme is:', options:['luck','perseverance conquers','spiders are strong','kings fail'], answer:1, explain:'Repeated effort brings victory.'},
     {q:'A ballad is:', options:['a letter','a narrative poem/song','an essay','a play'], answer:1, explain:'Ballads tell stories in verse.'},
     {q:'Bruce learned from:', options:['a general','a tiny spider','a priest','a book'], answer:1, explain:'The spider was his teacher.'},
     {q:'For students the moral is:', options:['avoid exams','persist through setbacks','fear failure','cheat'], answer:1, explain:'Keep trying after failure.'},
     {q:'‘Persevere’ means:', options:['quit','continue with effort','sleep','watch'], answer:1, explain:'Steadfast persistence.'}
   ]},
  {id:'sin-c10-eng-ch17', title:'The Inheritors', urdu:'وارث', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch17-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>‘The Inheritors’ is about the younger generation inheriting the earth — its beauty, resources and problems — from their elders.</p><p>It asks: what world will we hand over? The lesson urges youth to protect nature, values and knowledge — worthy inheritors, not wasters.</p>'},
     {id:'sin-c10-eng-ch17-l2', title:'Responsibility', html:'<h3>Responsibility</h3><p>Inheritance is not just property but responsibility: clean rivers, honest public life, preserved culture. Each generation is a trustee.</p><p>The lesson’s tone is hopeful: young people can repair what elders damaged.</p>'},
     {id:'sin-c10-eng-ch17-l3', title:'Grammar Focus: Future and Conditionals', html:'<h3>Grammar Focus: Future and Conditionals</h3><p>‘If we plant trees, the earth will heal.’ Practice first conditional for real possibilities.</p><p>Exam: paragraph on ‘Our Responsibilities to the Future’.</p>'}
   ],
   quiz:[
     {q:'‘The Inheritors’ means:', options:['owners','the younger generation receiving the world','thieves','kings'], answer:1, explain:'Youth inherit the earth from elders.'},
     {q:'We inherit:', options:['money only','beauty, resources and problems','nothing','debts only'], answer:1, explain:'The whole world — good and bad — passes down.'},
     {q:'The lesson urges youth to be:', options:['wasters','trustees and protectors','idle','selfish'], answer:1, explain:'Guardianship, not waste, is the duty.'},
     {q:'Each generation is a:', options:['owner','trustee','buyer','seller'], answer:1, explain:'Trustees preserve for the next.'},
     {q:'The tone is:', options:['hopeless','hopeful','angry','cold'], answer:1, explain:'Youth can repair damage — hope.'},
     {q:'‘If we plant trees, the earth will heal’ is:', options:['zero conditional','first conditional','second conditional','past'], answer:1, explain:'Real possibility: if + present, will + verb.'},
     {q:'Inheritance here is mainly:', options:['cash','responsibility','land','gold'], answer:1, explain:'Moral and environmental duty.'},
     {q:'Worthy inheritors:', options:['waste','preserve and improve','sell','ignore'], answer:1, explain:'They hand on a better world.'},
     {q:'The lesson concerns:', options:['past only','the future','no one','kings'], answer:1, explain:'It faces tomorrow’s world.'},
     {q:'Protecting nature is:', options:['optional','a duty of inheritors','for governments only','impossible'], answer:1, explain:'Shared responsibility.'}
   ]},
  {id:'sin-c10-eng-ch18', title:'Casablanca (Poem)', urdu:'کاسابلانکا (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch18-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>Felicia Hemans’ ‘Casablanca’ (The Boy Stood on the Burning Deck) tells of a boy who stays at his post on a burning ship, obeying his father’s order.</p><p>His father, the captain, lies dead — but the boy, unaware, stands firm amid flames until the ship explodes. Duty unto death.</p>'},
     {id:'sin-c10-eng-ch18-l2', title:'Theme', html:'<h3>Theme</h3><p>Obedience, courage and devotion to duty: the boy’s steadfastness shames deserters. The poem glorifies sacrifice for duty.</p><p>It is tragic yet noble — a classic of Victorian moral verse.</p>'},
     {id:'sin-c10-eng-ch18-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Narrate the story; explain ‘The boy stood on the burning deck.’ Vocabulary: deck, mast, amid.</p><p>Central idea: unwavering duty and obedience even unto death.</p>'}
   ],
   quiz:[
     {q:'The poet is:', options:['Hemans','Felicia Hemans','Bates','Emerson'], answer:1, explain:'Felicia Hemans wrote ‘Casablanca’.'},
     {q:'The boy stood on the:', options:['shore','burning deck','mast top','beach'], answer:1, explain:'He stays at his post amid flames.'},
     {q:'He stayed because of:', options:['fear','obedience to his father’s order','madness','orders from crew'], answer:1, explain:'His father told him to stand fast.'},
     {q:'His father was:', options:['asleep','dead, killed in battle','absent','hiding'], answer:1, explain:'The captain lies dead — the boy doesn’t know.'},
     {q:'The ship:', options:['is saved','explodes','reaches port','sinks slowly'], answer:1, explain:'Flames reach the powder — explosion.'},
     {q:'The theme is:', options:['disobedience','duty unto death','cowardice','escape'], answer:1, explain:'Unwavering obedience and courage.'},
     {q:'The poem’s mood is:', options:['comic','tragic yet noble','light','angry'], answer:1, explain:'Noble tragedy.'},
     {q:'A ‘deck’ is the:', options:['sail','ship’s floor/platform','anchor','flag'], answer:1, explain:'The deck is the ship’s working platform.'},
     {q:'The boy’s steadfastness shames:', options:['heroes','deserters','captains','poets'], answer:1, explain:'His courage contrasts cowardice.'},
     {q:'‘Amid’ means:', options:['after','in the middle of','before','without'], answer:1, explain:'Amid = surrounded by.'}
   ]},
  {id:'sin-c10-eng-ch19', title:'The Khyber Pass', urdu:'درۂ خیبر', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch19-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>The lesson describes the historic Khyber Pass — the 53-km gateway between Pakistan and Afghanistan, witness to invaders, traders and armies.</p><p>Its rugged hills, forts (Ali Masjid, Landi Kotal) and the railway make it a place of history and strategy.</p>'},
     {id:'sin-c10-eng-ch19-l2', title:'History and Trade', html:'<h3>History and Trade</h3><p>Alexander, Mughals and countless caravans crossed here. Today it carries trade and connects cultures — history written in stone.</p><p>The lesson fills readers with pride in Pakistan’s historic frontier.</p>'},
     {id:'sin-c10-eng-ch19-l3', title:'Grammar Focus: Descriptive + Historical Writing', html:'<h3>Grammar Focus: Descriptive + Historical Writing</h3><p>Mix past (history) with present (description). Vocabulary: pass, caravan, fortress, strategic.</p><p>Exam: describe a historical place of Pakistan.</p>'}
   ],
   quiz:[
     {q:'The Khyber Pass links:', options:['India and China','Pakistan and Afghanistan','Iran and Turkey','Punjab and Sindh'], answer:1, explain:'The historic gateway westward.'},
     {q:'It is about ___ long.', options:['30 km','53 km','100 km','10 km'], answer:1, explain:'Roughly 53 kilometres through the hills.'},
     {q:'Forts on the pass include:', options:['Lahore Fort','Ali Masjid and Landi Kotal','Rohtas','Attock'], answer:1, explain:'These forts guard the route.'},
     {q:'Crossed by:', options:['no one','Alexander, Mughals, caravans','tourists only','armies only'], answer:1, explain:'Invaders and traders both used it.'},
     {q:'Today it carries:', options:['nothing','trade and cultural contact','only armies','water'], answer:1, explain:'A living trade route.'},
     {q:'A ‘caravan’ is:', options:['one camel','a group of travellers/traders','a fort','a river'], answer:1, explain:'Caravans crossed with goods.'},
     {q:'‘Strategic’ means important for:', options:['farming','military/planning position','poetry','cooking'], answer:1, explain:'Strategic = vital in plans and defence.'},
     {q:'The lesson fills readers with:', options:['fear','pride in the historic frontier','boredom','shame'], answer:1, explain:'Heritage pride.'},
     {q:'Historical writing uses:', options:['future only','past for history, present for description','poems','dialogue'], answer:1, explain:'Tense follows time reference.'},
     {q:'The pass is witness to:', options:['silence','history: invasions and trade','floods','snow only'], answer:1, explain:'Centuries of movement.'}
   ]},
  {id:'sin-c10-eng-ch20', title:'The Minstrel Boy (Poem)', urdu:'گائیک لڑکا (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch20-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>Thomas Moore’s song tells of a minstrel boy who goes to war carrying his harp; when captured, he tears its strings rather than let it play for the enemy.</p><p>‘Thy songs were made for the pure and free’ — art must not serve tyranny. Patriotism over life itself.</p>'},
     {id:'sin-c10-eng-ch20-l2', title:'Theme', html:'<h3>Theme</h3><p>Freedom is dearer than life: the boy dies with his harp silenced, his honour intact. The poem is Ireland’s patriotic anthem in verse.</p><p>Sacrifice for the motherland is the highest virtue.</p>'},
     {id:'sin-c10-eng-ch20-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Central idea: patriotism and honour above life. Explain ‘Thy songs were made for the pure and free.’</p><p>Vocabulary: minstrel (wandering singer), harp, tyrant.</p>'}
   ],
   quiz:[
     {q:'The poet is:', options:['Moore','Thomas Moore','Hemans','Bates'], answer:1, explain:'The Irish poet Thomas Moore.'},
     {q:'A minstrel is a:', options:['soldier','wandering singer','king','priest'], answer:1, explain:'Minstrels sang and travelled.'},
     {q:'The boy tears his harp’s strings because:', options:['it is broken','it must not play for the enemy','he is angry','it is old'], answer:1, explain:'Art must not serve tyranny.'},
     {q:'‘Thy songs were made for the pure and free’ means art serves:', options:['tyrants','freedom, not oppression','money','kings'], answer:1, explain:'Songs belong to the free.'},
     {q:'The theme:', options:['wealth','freedom dearer than life','music','travel'], answer:1, explain:'Patriotism over life itself.'},
     {q:'The boy’s honour stays:', options:['lost','intact','broken','hidden'], answer:1, explain:'He dies with honour unsullied.'},
     {q:'The poem is ___ in spirit.', options:['comic','patriotic','romantic','silly'], answer:1, explain:'An anthem of freedom.'},
     {q:'A harp is a:', options:['drum','stringed musical instrument','flute','bell'], answer:1, explain:'Plucked strings.'},
     {q:'The enemy wanted the harp to:', options:['be silent','play for them','be sold','be burnt'], answer:1, explain:'Music for the tyrant — refused.'},
     {q:'Sacrifice for the motherland is:', options:['foolish','the highest virtue','wasteful','rare'], answer:1, explain:'The poem’s creed.'}
   ]},
  {id:'sin-c10-eng-ch21', title:'How to do Things: Arranging a Party and Mending a Puncture', urdu:'کام کیسے کریں', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch21-l1', title:'Arranging a Party', html:'<h3>Arranging a Party</h3><p>Steps: fix the date and budget, invite guests, plan food and seating, arrange music and games, and keep the venue clean.</p><p>Good planning prevents chaos: a checklist, shared duties and a timeline make parties joyful.</p>'},
     {id:'sin-c10-eng-ch21-l2', title:'Mending a Puncture', html:'<h3>Mending a Puncture</h3><p>Steps: remove the wheel, find the leak (water bubbles), roughen the tube, apply solution and patch, press firmly, re-inflate and check.</p><p>Practical life skills matter as much as bookish ones — self-reliance is the lesson.</p>'},
     {id:'sin-c10-eng-ch21-l3', title:'Grammar Focus: Process Writing', html:'<h3>Grammar Focus: Process Writing</h3><p>Use sequencers: first, then, next, finally; imperatives: ‘Remove the wheel.’ Exam: describe any process (making tea, etc.).</p><p>Vocabulary: puncture, patch, inflate, checklist.</p>'}
   ],
   quiz:[
     {q:'Party planning starts with:', options:['food','date and budget','music','dresses'], answer:1, explain:'Date and budget frame everything.'},
     {q:'A checklist:', options:['confuses','prevents chaos','wastes time','costs money'], answer:1, explain:'Lists organize duties.'},
     {q:'Find a puncture by:', options:['guessing','water bubbles at the leak','smell','sound only'], answer:1, explain:'Escaping air bubbles in water.'},
     {q:'After patching, you must:', options:['paint','re-inflate and check','throw the tube','rest'], answer:1, explain:'Test the repair holds air.'},
     {q:'Roughen the tube to:', options:['weaken it','help the patch stick','clean it','mark it'], answer:1, explain:'Rough surface grips adhesive.'},
     {q:'Process writing uses:', options:['no order','sequencers: first, then, finally','poems','dialogue'], answer:1, explain:'Order words guide steps.'},
     {q:'‘Remove the wheel’ is:', options:['a question','an imperative','a wish','passive'], answer:1, explain:'Commands instruct the doer.'},
     {q:'Self-reliance means:', options:['depending on others','doing things yourself','avoiding work','hiring help'], answer:1, explain:'Practical skills build independence.'},
     {q:'Shared duties make parties:', options:['dull','joyful and smooth','costly','long'], answer:1, explain:'Teamwork shares load.'},
     {q:'A puncture is a:', options:['big cut','small hole leaking air','flat tyre only','valve'], answer:1, explain:'Tiny hole, big trouble.'}
   ]},
  {id:'sin-c10-eng-ch22', title:'The Uses of Adversity (Poem)', urdu:'مصیبت کے فائدے (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch22-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>Shakespeare’s lines from ‘As You Like It’: ‘Sweet are the uses of adversity’ — hardships teach what prosperity cannot.</p><p>The toad, ugly and venomous, yet wears a precious jewel in its head: even unpleasant things hide value.</p>'},
     {id:'sin-c10-eng-ch22-l2', title:'Theme', html:'<h3>Theme</h3><p>Adversity is a teacher: it builds patience, wisdom and strength. Comfort makes us soft; struggle makes us wise.</p><p>The poem comforts the suffering: pain has purpose.</p>'},
     {id:'sin-c10-eng-ch22-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Explain ‘Sweet are the uses of adversity, which, like the toad, ugly and venomous, wears yet a precious jewel in his head.’</p><p>Vocabulary: adversity (hardship), venomous, jewel. From Shakespeare’s ‘As You Like It’.</p>'}
   ],
   quiz:[
     {q:'The lines are from:', options:['Hamlet','‘As You Like It’','Macbeth','Othello'], answer:1, explain:'Shakespeare’s comedy ‘As You Like It’.'},
     {q:'‘Sweet are the uses of adversity’ means hardships:', options:['are sweet food','teach valuable lessons','should be eaten','are useless'], answer:1, explain:'Pain has purpose — it teaches.'},
     {q:'The toad is:', options:['beautiful','ugly and venomous','harmless','small'], answer:1, explain:'Yet it bears a precious jewel.'},
     {q:'The jewel symbolizes:', options:['wealth','hidden value in unpleasant things','magic','royalty'], answer:1, explain:'Good hidden inside hardship.'},
     {q:'Adversity builds:', options:['weakness','patience, wisdom, strength','laziness','fear'], answer:1, explain:'Struggle schools character.'},
     {q:'Comfort makes us:', options:['wise','soft','strong','brave'], answer:1, explain:'Ease without trial weakens.'},
     {q:'The poem comforts:', options:['kings','the suffering','children','poets'], answer:1, explain:'Pain has meaning — consolation.'},
     {q:'‘Adversity’ means:', options:['luck','hardship','wealth','joy'], answer:1, explain:'Adverse conditions, misfortune.'},
     {q:'Shakespeare is the:', options:['poet','playwright-poet of these lines','king','actor only'], answer:1, explain:'The Bard wrote the play.'},
     {q:'The toad’s jewel is:', options:['real gold','a metaphor for hidden good','literal','stolen'], answer:1, explain:'Metaphor, not mineralogy.'}
   ]},
  {id:'sin-c10-eng-ch23', title:'Making a Summary', urdu:'خلاصہ نویسی', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch23-l1', title:'What Is a Summary', html:'<h3>What Is a Summary</h3><p>A summary condenses a passage to its main ideas in your own words — usually one-third the length. It keeps the message, drops examples.</p><p>Rules: read fully, underline key points, omit details and repetitions, use your own words, keep the original order and tone.</p>'},
     {id:'sin-c10-eng-ch23-l2', title:'Steps', html:'<h3>Steps</h3><p>Read twice; list main points; draft in connected sentences; check length (~1/3); give a title. Never add your own opinions.</p><p>A good summary is complete (covers all main ideas), concise (brief) and clear.</p>'},
     {id:'sin-c10-eng-ch23-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Summary passages come in board exams with marks for content and expression. Practice daily with newspaper paragraphs.</p><p>Common faults: copying sentences, adding opinions, missing main points.</p>'}
   ],
   quiz:[
     {q:'A summary is usually ___ the original length.', options:['equal to','one-third of','twice','half exactly'], answer:1, explain:'Condense to about a third.'},
     {q:'Use ___ words in a summary.', options:['the author’s','your own','difficult','foreign'], answer:1, explain:'Paraphrase — never just copy.'},
     {q:'Never add ___ to a summary.', options:['main ideas','your own opinions','the title','key points'], answer:1, explain:'Summaries report; they don’t argue.'},
     {q:'First step:', options:['write','read the passage fully','give a title','count words'], answer:1, explain:'Understand before condensing.'},
     {q:'Omit:', options:['main ideas','examples and repetitions','the title','order'], answer:1, explain:'Details and repeats are dropped.'},
     {q:'A good summary is:', options:['long','complete, concise, clear','copied','opinionated'], answer:1, explain:'The three C’s of summarizing.'},
     {q:'Keep the original:', options:['words','order and tone','length','examples'], answer:1, explain:'Follow the passage’s sequence.'},
     {q:'Copying sentences is a:', options:['virtue','fault','rule','step'], answer:1, explain:'Copying defeats the purpose.'},
     {q:'Give the summary a:', options:['poem','title','dialogue','letter'], answer:1, explain:'A short apt title heads it.'},
     {q:'Practice with:', options:['novels only','newspaper paragraphs daily','exams only','poems'], answer:1, explain:'Daily short practice builds skill.'}
   ]},
  {id:'sin-c10-eng-ch24', title:'There’s a Good Time Coming (Poem)', urdu:'اچھا وقت آنے والا ہے (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch24-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>Charles Mackay’s song of hope: ‘There’s a good time coming’ — a brighter future awaits the patient and the just.</p><p>It comforts the oppressed: tyranny will end, justice will dawn; wait and work for better days.</p>'},
     {id:'sin-c10-eng-ch24-l2', title:'Theme', html:'<h3>Theme</h3><p>Hope sustains struggle: present suffering is temporary; a fairer world is coming. The poem is optimism set to music.</p><p>Its refrain lifts spirits — hope as resistance.</p>'},
     {id:'sin-c10-eng-ch24-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Central idea: hope for a just future. Explain the refrain’s meaning.</p><p>Vocabulary: refrain, to dawn, oppressed.</p>'}
   ],
   quiz:[
     {q:'The poet is:', options:['Mackay','Charles Mackay','Moore','Bates'], answer:1, explain:'Charles Mackay wrote this hope-song.'},
     {q:'The poem promises:', options:['wealth','a brighter just future','war','silence'], answer:1, explain:'Good times are coming.'},
     {q:'It comforts the:', options:['rich','oppressed','kings','poets'], answer:1, explain:'The downtrodden are told to hope.'},
     {q:'Tyranny will:', options:['last','end','grow','win'], answer:1, explain:'Injustice is temporary.'},
     {q:'Hope is presented as:', options:['weakness','resistance and strength','dreaming','folly'], answer:1, explain:'Hope sustains struggle.'},
     {q:'The refrain:', options:['bores','lifts spirits','confuses','saddens'], answer:1, explain:'Repeated hope-lines encourage.'},
     {q:'‘To dawn’ means:', options:['to end','to begin (like daybreak)','to sleep','to cry'], answer:1, explain:'Dawn = beginning of light.'},
     {q:'The mood is:', options:['gloomy','optimistic','angry','cold'], answer:1, explain:'Bright hope fills it.'},
     {q:'Present suffering is:', options:['eternal','temporary','deserved','ignored'], answer:1, explain:'Better days will come.'},
     {q:'Justice will:', options:['sleep','dawn','flee','hide'], answer:1, explain:'A fairer world awaits.'}
   ]},
  {id:'sin-c10-eng-ch25', title:'The Customs of Various Regions of Pakistan', urdu:'پاکستان کے مختلف علاقوں کے رسم و رواج', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch25-l1', title:'About the Lesson', html:'<h3>About the Lesson</h3><p>The lesson tours Pakistan’s cultural diversity: Punjabi, Sindhi, Balochi, Pakhtun and Kashmiri customs — dress, food, weddings, hospitality.</p><p>Common thread: hospitality (mehman-nawazi), respect for elders, and festive weddings bind all regions as one nation.</p>'},
     {id:'sin-c10-eng-ch25-l2', title:'Regional Colours', html:'<h3>Regional Colours</h3><p>Sindhi ajrak and topi, Punjabi vibrant bhangra weddings, Balochi sajji feasts, Pakhtun hujra gatherings — each region’s pride.</p><p>Diversity is strength: many customs, one Pakistan.</p>'},
     {id:'sin-c10-eng-ch25-l3', title:'Grammar Focus: Descriptive + Listing', html:'<h3>Grammar Focus: Descriptive + Listing</h3><p>Organize region by region with examples. Vocabulary: custom, hospitality, heritage.</p><p>Exam: paragraph on ‘Cultural Diversity of Pakistan’.</p>'}
   ],
   quiz:[
     {q:'The lesson tours:', options:['one city','Pakistan’s regional customs','foreign lands','history only'], answer:1, explain:'Five-plus cultures in one nation.'},
     {q:'Common thread:', options:['dress','hospitality and respect for elders','food','dance'], answer:1, explain:'Mehman-nawazi unites all.'},
     {q:'Sindhi symbols:', options:['sajji','ajrak and topi','bhangra','hujra'], answer:1, explain:'Ajrak shawl and cap mark Sindh.'},
     {q:'Balochi feast dish:', options:['biryani','sajji','nihari','haleem'], answer:1, explain:'Sajji — roasted whole lamb.'},
     {q:'Pakhtun gathering place:', options:['dera','hujra','otaq','haveli'], answer:1, explain:'The hujra hosts guests.'},
     {q:'Diversity is:', options:['weakness','strength','division','burden'], answer:1, explain:'Many customs, one Pakistan.'},
     {q:'Organize the topic:', options:['randomly','region by region','by date','by size'], answer:1, explain:'Regional structure is clearest.'},
     {q:'‘Heritage’ means:', options:['money','inherited culture','buildings','food'], answer:1, explain:'Traditions passed down.'},
     {q:'Weddings across regions are:', options:['dull','festive','silent','short'], answer:1, explain:'Celebration marks them all.'},
     {q:'The lesson builds:', options:['division','national unity in diversity','pride in one region','bias'], answer:1, explain:'Unity through diversity.'}
   ]},
  {id:'sin-c10-eng-ch26', title:'The Man Who Wins (Poem)', urdu:'جیتنے والا انسان (نظم)', comingSoon:false,
   lessons:[
     {id:'sin-c10-eng-ch26-l1', title:'About the Poem', html:'<h3>About the Poem</h3><p>Edmund Vance Cooke’s poem declares: the man who wins is the man who thinks he can — self-belief decides victory.</p><p>‘Life’s battles don’t always go to the stronger or faster man; but sooner or later the man who wins is the man who thinks he can.’</p>'},
     {id:'sin-c10-eng-ch26-l2', title:'Theme', html:'<h3>Theme</h3><p>Mindset over muscle: confidence, determination and positive thinking win life’s battles. Doubt defeats before the contest begins.</p><p>A perfect exam-season poem: believe, prepare, persist.</p>'},
     {id:'sin-c10-eng-ch26-l3', title:'Exam Focus', html:'<h3>Exam Focus</h3><p>Central idea: self-confidence wins. Explain the famous two lines.</p><p>Vocabulary: to doubt, to persist, victory.</p>'}
   ],
   quiz:[
     {q:'The poet is:', options:['Cooke','Edmund Vance Cooke','Emerson','Mackay'], answer:1, explain:'Cooke wrote this motivational poem.'},
     {q:'The man who wins is the man who:', options:['is strongest','thinks he can','is richest','is fastest'], answer:1, explain:'Self-belief decides victory.'},
     {q:'Life’s battles go to:', options:['the strongest always','the self-confident, sooner or later','luck','the fastest always'], answer:1, explain:'Not always strength or speed — belief.'},
     {q:'Doubt:', options:['helps','defeats before the contest','is fine','wins'], answer:1, explain:'Self-doubt loses early.'},
     {q:'The poem suits:', options:['weddings','exam season','funerals','parties'], answer:1, explain:'Believe, prepare, persist.'},
     {q:'Mindset beats:', options:['nothing','muscle alone','study','work'], answer:1, explain:'Confidence over mere strength.'},
     {q:'‘Persist’ means:', options:['quit','continue firmly','rest','wait'], answer:1, explain:'Steadfast continuance.'},
     {q:'Positive thinking:', options:['is magic','fuels effort and victory','needs no work','fails'], answer:1, explain:'It powers real effort.'},
     {q:'The famous lines contrast:', options:['rich/poor','stronger/faster vs thinking one can','young/old','men/women'], answer:1, explain:'Not the stronger/faster — the believer.'},
     {q:'The tone is:', options:['gloomy','motivating','mocking','cold'], answer:1, explain:'Stirring encouragement.'}
   ]}
]});
window.__saMergeCourse({id:'sin-c1-english', board:'sindh', title:'English', urdu:'انگریزی', class:'Class 1', icon:'📖', desc:'Sindh Board Class 1 English — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c1-urdu', board:'sindh', title:'Urdu', urdu:'اردو', class:'Class 1', icon:'📝', desc:'Sindh Board Class 1 Urdu — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c1-math', board:'sindh', title:'Mathematics', urdu:'ریاضی', class:'Class 1', icon:'🔢', desc:'Sindh Board Class 1 Mathematics — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c2-english', board:'sindh', title:'English', urdu:'انگریزی', class:'Class 2', icon:'📖', desc:'Sindh Board Class 2 English — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c2-urdu', board:'sindh', title:'Urdu', urdu:'اردو', class:'Class 2', icon:'📝', desc:'Sindh Board Class 2 Urdu — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c2-math', board:'sindh', title:'Mathematics', urdu:'ریاضی', class:'Class 2', icon:'🔢', desc:'Sindh Board Class 2 Mathematics — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c3-english', board:'sindh', title:'English', urdu:'انگریزی', class:'Class 3', icon:'📖', desc:'Sindh Board Class 3 English — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c3-urdu', board:'sindh', title:'Urdu', urdu:'اردو', class:'Class 3', icon:'📝', desc:'Sindh Board Class 3 Urdu — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c3-math', board:'sindh', title:'Mathematics', urdu:'ریاضی', class:'Class 3', icon:'🔢', desc:'Sindh Board Class 3 Mathematics — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c4-english', board:'sindh', title:'English', urdu:'انگریزی', class:'Class 4', icon:'📖', desc:'Sindh Board Class 4 English — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c4-urdu', board:'sindh', title:'Urdu', urdu:'اردو', class:'Class 4', icon:'📝', desc:'Sindh Board Class 4 Urdu — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c4-math', board:'sindh', title:'Mathematics', urdu:'ریاضی', class:'Class 4', icon:'🔢', desc:'Sindh Board Class 4 Mathematics — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c5-english', board:'sindh', title:'English', urdu:'انگریزی', class:'Class 5', icon:'📖', desc:'Sindh Board Class 5 English — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c5-urdu', board:'sindh', title:'Urdu', urdu:'اردو', class:'Class 5', icon:'📝', desc:'Sindh Board Class 5 Urdu — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c5-math', board:'sindh', title:'Mathematics', urdu:'ریاضی', class:'Class 5', icon:'🔢', desc:'Sindh Board Class 5 Mathematics — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c6-english', board:'sindh', title:'English', urdu:'انگریزی', class:'Class 6', icon:'📖', desc:'Sindh Board Class 6 English — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c6-math', board:'sindh', title:'Mathematics', urdu:'ریاضی', class:'Class 6', icon:'📐', desc:'Sindh Board Class 6 Mathematics — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c6-science', board:'sindh', title:'Science', urdu:'سائنس', class:'Class 6', icon:'🔬', desc:'Sindh Board Class 6 Science — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c7-english', board:'sindh', title:'English', urdu:'انگریزی', class:'Class 7', icon:'📖', desc:'Sindh Board Class 7 English — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c7-math', board:'sindh', title:'Mathematics', urdu:'ریاضی', class:'Class 7', icon:'📐', desc:'Sindh Board Class 7 Mathematics — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c7-science', board:'sindh', title:'Science', urdu:'سائنس', class:'Class 7', icon:'🔬', desc:'Sindh Board Class 7 Science — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c8-english', board:'sindh', title:'English', urdu:'انگریزی', class:'Class 8', icon:'📖', desc:'Sindh Board Class 8 English — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c8-math', board:'sindh', title:'Mathematics', urdu:'ریاضی', class:'Class 8', icon:'📐', desc:'Sindh Board Class 8 Mathematics — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-c8-science', board:'sindh', title:'Science', urdu:'سائنس', class:'Class 8', icon:'🔬', desc:'Sindh Board Class 8 Science — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-class11-physics', board:'sindh', title:'Physics', urdu:'طبیعیات', class:'Class 11', icon:'⚛️', desc:'Sindh Board Class 11 Physics — chapter list; full lessons coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
  {id:'sin-c11-phy-ch1', title:'Measurements', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-phy-ch2', title:'Vectors and Equilibrium', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-phy-ch3', title:'Motion and Force', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-phy-ch4', title:'Work and Energy', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-phy-ch5', title:'Circular Motion', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-phy-ch6', title:'Fluid Dynamics', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-phy-ch7', title:'Oscillations', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-phy-ch8', title:'Waves', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-phy-ch9', title:'Physical Optics', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-phy-ch10', title:'Optical Instruments', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-phy-ch11', title:'Heat and Thermodynamics', urdu:'', comingSoon:true, lessons:[], quiz:[]}
]});
window.__saMergeCourse({id:'sin-class11-chemistry', board:'sindh', title:'Chemistry', urdu:'کیمسٹری', class:'Class 11', icon:'🧪', desc:'Sindh Board Class 11 Chemistry — chapter list; full lessons coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
  {id:'sin-c11-che-ch1', title:'Basic Concepts', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-che-ch2', title:'Experimental Techniques in Chemistry', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-che-ch3', title:'Gases', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-che-ch4', title:'Liquids and Solids', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-che-ch5', title:'Atomic Structure', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-che-ch6', title:'Chemical Bonding', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-che-ch7', title:'Thermochemistry', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-che-ch8', title:'Chemical Equilibrium', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-che-ch9', title:'Solutions', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-che-ch10', title:'Electrochemistry', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-che-ch11', title:'Reaction Kinetics', urdu:'', comingSoon:true, lessons:[], quiz:[]}
]});
window.__saMergeCourse({id:'sin-class11-biology', board:'sindh', title:'Biology', urdu:'حیاتیات', class:'Class 11', icon:'🧬', desc:'Sindh Board Class 11 Biology — chapter list; full lessons coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
  {id:'sin-c11-bio-ch1', title:'Introduction', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch2', title:'Biological Molecules', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch3', title:'Enzymes', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch4', title:'The Cell', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch5', title:'Variety of Life', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch6', title:'Kingdom Prokaryotae (Monera)', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch7', title:'Kingdom Protista (Protoctista)', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch8', title:'Kingdom Fungi', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch9', title:'Kingdom Plantae', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch10', title:'Kingdom Animalia', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch11', title:'Bioenergetics', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch12', title:'Nutrition', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch13', title:'Gaseous Exchange', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-bio-ch14', title:'Transport', urdu:'', comingSoon:true, lessons:[], quiz:[]}
]});
window.__saMergeCourse({id:'sin-class11-mathematics', board:'sindh', title:'Mathematics', urdu:'ریاضی', class:'Class 11', icon:'📐', desc:'Sindh Board Class 11 Mathematics — chapter list; full lessons coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
  {id:'sin-c11-mat-ch1', title:'Number Systems', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch2', title:'Sets, Functions and Groups', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch3', title:'Matrices and Determinants', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch4', title:'Quadratic Equations', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch5', title:'Partial Fractions', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch6', title:'Sequence and Series', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch7', title:'Permutations, Combinations and Probability', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch8', title:'Mathematical Induction and Binomial Theorem', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch9', title:'Fundamentals of Trigonometry', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch10', title:'Trigonometric Identities', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch11', title:'Trigonometric Functions and their Graphs', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch12', title:'Applications of Trigonometry', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch13', title:'Inverse Trigonometric Functions', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c11-mat-ch14', title:'Solutions of Trigonometric Equations', urdu:'', comingSoon:true, lessons:[], quiz:[]}
]});
window.__saMergeCourse({id:'sin-class11-english', board:'sindh', title:'English', urdu:'انگریزی', class:'Class 11', icon:'📖', desc:'Sindh Board Class 11 English — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
window.__saMergeCourse({id:'sin-class12-physics', board:'sindh', title:'Physics', urdu:'طبیعیات', class:'Class 12', icon:'⚛️', desc:'Sindh Board Class 12 Physics — chapter list; full lessons coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
  {id:'sin-c12-phy-ch1', title:'Electrostatics', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-phy-ch2', title:'Current Electricity', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-phy-ch3', title:'Electromagnetism', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-phy-ch4', title:'Electromagnetic Induction', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-phy-ch5', title:'Alternating Current', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-phy-ch6', title:'Physics of Solids', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-phy-ch7', title:'Electronics', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-phy-ch8', title:'Dawn of Modern Physics', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-phy-ch9', title:'Atomic Spectra', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-phy-ch10', title:'Nuclear Physics', urdu:'', comingSoon:true, lessons:[], quiz:[]}
]});
window.__saMergeCourse({id:'sin-class12-chemistry', board:'sindh', title:'Chemistry', urdu:'کیمسٹری', class:'Class 12', icon:'🧪', desc:'Sindh Board Class 12 Chemistry — chapter list; full lessons coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
  {id:'sin-c12-che-ch1', title:'Periodic Classification of Elements and Periodicity', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch2', title:'s-Block Elements', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch3', title:'Group IIIA and IVA Elements', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch4', title:'Group VA and VIA Elements', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch5', title:'The Halogens and the Noble Gases', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch6', title:'Transition Elements', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch7', title:'Fundamental Principles of Organic Chemistry', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch8', title:'Aliphatic Hydrocarbons', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch9', title:'Aromatic Hydrocarbons', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch10', title:'Alkyl Halides', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch11', title:'Alcohols, Phenols and Ethers', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch12', title:'Aldehydes and Ketones', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch13', title:'Carboxylic Acids', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-che-ch14', title:'Macromolecules', urdu:'', comingSoon:true, lessons:[], quiz:[]}
]});
window.__saMergeCourse({id:'sin-class12-biology', board:'sindh', title:'Biology', urdu:'حیاتیات', class:'Class 12', icon:'🧬', desc:'Sindh Board Class 12 Biology — chapter list; full lessons coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
  {id:'sin-c12-bio-ch1', title:'Homeostasis', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-bio-ch2', title:'Support and Movement', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-bio-ch3', title:'Coordination and Control', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-bio-ch4', title:'Reproduction', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-bio-ch5', title:'Inheritance', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-bio-ch6', title:'Man and His Environment', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-bio-ch7', title:'Biotechnology', urdu:'', comingSoon:true, lessons:[], quiz:[]}
]});
window.__saMergeCourse({id:'sin-class12-mathematics', board:'sindh', title:'Mathematics', urdu:'ریاضی', class:'Class 12', icon:'📐', desc:'Sindh Board Class 12 Mathematics — chapter list; full lessons coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
  {id:'sin-c12-mat-ch1', title:'Functions and Limits', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-mat-ch2', title:'Differentiation', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-mat-ch3', title:'Integration', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-mat-ch4', title:'Introduction to Analytic Geometry', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-mat-ch5', title:'Linear Inequalities and Linear Programming', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-mat-ch6', title:'Conic Sections', urdu:'', comingSoon:true, lessons:[], quiz:[]},
  {id:'sin-c12-mat-ch7', title:'Vectors', urdu:'', comingSoon:true, lessons:[], quiz:[]}
]});
window.__saMergeCourse({id:'sin-class12-english', board:'sindh', title:'English', urdu:'انگریزی', class:'Class 12', icon:'📖', desc:'Sindh Board Class 12 English — coming soon.', comingSoon:true, lessons:[], quiz:[], chapters:[
]});
})();
