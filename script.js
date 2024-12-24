// Schedule data remains the same as in your original code
const scheduleData = {
    Monday: {
      "7:00 AM - 7:30 AM":
        "Wake Up & Hydrate\n- Drink water immediately after waking up\n- 5-minute gentle stretching routine\n- Optional 5-minute meditation session",
      "7:30 AM - 8:30 AM":
        "Morning Fitness Session (Full Body + Core)\n- Warm-up (10 min): Jump rope, dynamic stretches\n- Main Circuit (3-4 rounds): 15 Squat jumps, 12-15 Push-ups with shoulder taps, 15 Bodyweight deadlifts\n- Core Finisher: Russian twists, Flutter kicks",
      "8:30 AM - 9:30 AM":
        "Breakfast & Shower\n- Protein oatmeal with berries or eggs with whole grain toast\n- Hot or cold shower based on preference\n- Get dressed for the day",
      "9:30 AM - 11:30 AM":
        "Productivity Block 1\n- Focus on high-priority tasks\n- Minimize distractions\n- Take short breaks as needed",
      "11:30 AM - 12:00 PM":
        "Break\n- Light snack if needed\n- Quick walk or stretching\n- Mindful breathing exercises",
      "12:00 PM - 2:00 PM":
        "Productivity Block 2\n- Handle meetings and collaborative work\n- Address emails and communications\n- Project work and deadlines",
      "2:00 PM - 3:00 PM":
        "Lunch & Relaxation\n- Balanced meal with protein, vegetables, and whole grains\n- Short walk or relaxation activity\n- Screen break recommended",
      "3:00 PM - 5:00 PM":
        "Productivity Block 3\n- Complete remaining priority tasks\n- Review and plan next day\n- Clear inbox and organize workspace",
      "5:00 PM - 6:00 PM":
        "Hobby Session 1\n- Creative activities (art, music, writing)\n- Learning new skills\n- Reading or personal projects",
      "6:00 PM - 7:00 PM":
        "Dinner & Unwind\n- Nutritious dinner with lean protein and vegetables\n- Light conversation or quiet time\n- No heavy screens",
      "7:00 PM - 8:00 PM":
        "Evening Fitness / Active Recovery\n- Light cardio or walking\n- Gentle stretching or yoga\n- Foam rolling if needed",
      "8:00 PM - 9:00 PM":
        "Hobby Session 2 / Relaxing Activities\n- Reading, crafts, or gentle hobbies\n- Avoid intensive activities\n- Begin winding down",
      "9:30 PM - 10:00 PM":
        "Skincare & Medications\n- Complete skincare routine\n- Take evening medications/supplements\n- Set out clothes for tomorrow",
      "10:00 PM - 10:30 PM":
        "Wind-Down for Bed\n- Dim lights and avoid screens\n- Light reading or meditation\n- Prepare bedroom environment",
      "10:30 PM - 7:00 AM":
        "Sleep\n- Complete darkness and quiet\n- Maintain cool room temperature\n- Use white noise if needed",
    },
    Tuesday: {
      "7:00 AM - 7:30 AM":
        "Wake Up & Hydrate\n- Drink water immediately\n- Morning stretching routine\n- Brief meditation or breathing exercises",
      "7:30 AM - 8:30 AM":
        "Morning Fitness Session (Upper Body + Arms)\n- Warm-up (10 min): Arm circles, shoulder mobility\n- Main Circuit (3-4 rounds): Push-ups, Tricep dips, Shoulder taps\n- Arms Finisher: Isometric holds",
      "8:30 AM - 9:30 AM":
        "Breakfast & Shower\n- High-protein breakfast with complex carbs\n- Refreshing shower\n- Prepare for the day",
      "9:30 AM - 11:30 AM":
        "Productivity Block 1\n- Focus on complex tasks\n- Deep work session\n- Important meetings or calls",
      "11:30 AM - 12:00 PM":
        "Break\n- Healthy snack option\n- Brief movement break\n- Reset and refocus",
      "12:00 PM - 2:00 PM":
        "Productivity Block 2\n- Collaborative projects\n- Team meetings\n- Progress reviews",
      "2:00 PM - 3:00 PM":
        "Lunch & Relaxation\n- Balanced lunch with lean protein\n- Short walk if weather permits\n- Mental reset",
      "3:00 PM - 5:00 PM":
        "Productivity Block 3\n- Complete daily objectives\n- Plan next day\n- Wrap up communications",
      "5:00 PM - 6:00 PM":
        "Hobby Session 1\n- Engaging personal activities\n- Skill development\n- Creative projects",
      "6:00 PM - 7:00 PM":
        "Dinner & Unwind\n- Nutritious evening meal\n- Begin evening wind-down\n- Light conversation or music",
      "7:00 PM - 8:00 PM":
        "Evening Fitness / Active Recovery\n- Gentle mobility work\n- Stretching routine\n- Light walking",
      "8:00 PM - 9:00 PM":
        "Hobby Session 2 / Wind-Down\n- Relaxing activities\n- Avoid intense stimulation\n- Prepare for evening routine",
      "9:30 PM - 10:00 PM":
        "Skincare & Medications\n- Evening skincare\n- Medications and supplements\n- Prepare for next day",
      "10:00 PM - 10:30 PM":
        "Wind-Down for Bed\n- Calming activities\n- Bedroom preparation\n- Final evening routine",
      "10:30 PM - 7:00 AM":
        "Sleep\n- Optimal sleep environment\n- Quality rest period\n- Minimal disruptions",
    },
    Wednesday: {
      "7:00 AM - 7:30 AM":
        "Wake Up & Hydrate\n- Morning hydration ritual\n- Light stretching sequence\n- Mental preparation for the day",
      "7:30 AM - 8:30 AM":
        "Morning Fitness Session (Lower Body + Glutes)\n- Warm-up (10 min): Leg swings, hip circles\n- Main Circuit (3-4 rounds): Squats, Lunges, Glute bridges\n- Lower Body Finisher: Pulse squats",
      "8:30 AM - 9:30 AM":
        "Breakfast & Shower\n- Protein-rich breakfast\n- Energizing shower\n- Daily preparation",
      "9:30 AM - 11:30 AM":
        "Productivity Block 1\n- Priority tasks and projects\n- Focused work period\n- Key deliverables",
      "11:30 AM - 12:00 PM":
        "Break\n- Nutrition and hydration\n- Movement break\n- Mental reset",
      "12:00 PM - 2:00 PM":
        "Productivity Block 2\n- Continued focused work\n- Meetings and collaboration\n- Project advancement",
      "2:00 PM - 3:00 PM":
        "Lunch & Relaxation\n- Balanced midday meal\n- Relaxation period\n- Social or quiet time",
      "3:00 PM - 5:00 PM":
        "Productivity Block 3\n- Task completion\n- Planning and organization\n- Daily wrap-up",
      "5:00 PM - 6:00 PM":
        "Hobby Session 1\n- Personal interests\n- Skill building\n- Creative expression",
      "6:00 PM - 7:00 PM":
        "Dinner & Unwind\n- Evening nutrition\n- Begin wind-down\n- Peaceful environment",
      "7:00 PM - 8:00 PM":
        "Evening Fitness / Active Recovery\n- Recovery exercises\n- Gentle movement\n- Mobility work",
      "8:00 PM - 9:00 PM":
        "Hobby Session 2 / Wind-Down\n- Calm activities\n- Relaxation focus\n- Evening enjoyment",
      "9:30 PM - 10:00 PM":
        "Skincare & Medications\n- Evening self-care\n- Health routine\n- Next day prep",
      "10:00 PM - 10:30 PM":
        "Wind-Down for Bed\n- Final evening routine\n- Relaxation practices\n- Sleep preparation",
      "10:30 PM - 7:00 AM":
        "Sleep\n- Restful environment\n- Quality sleep focus\n- Recovery period",
    },
    Thursday: {
      "7:00 AM - 7:30 AM":
        "Wake Up & Hydrate\n- Morning water intake\n- Gentle awakening routine\n- Daily intention setting",
      "7:30 AM - 8:30 AM":
        "Morning Fitness Session (Cardio + Abs)\n- Warm-up (10 min): Light cardio, mobility\n- Main Circuit (3-4 rounds): HIIT intervals, Core exercises\n- Cardio Finisher: Burpees or mountain climbers",
      "8:30 AM - 9:30 AM":
        "Breakfast & Shower\n- Energy-focused breakfast\n- Refreshing morning routine\n- Day preparation",
      "9:30 AM - 11:30 AM":
        "Productivity Block 1\n- High-priority work\n- Focused tasks\n- Important meetings",
      "11:30 AM - 12:00 PM":
        "Break\n- Healthy snack\n- Quick movement\n- Mental refresh",
      "12:00 PM - 2:00 PM":
        "Productivity Block 2\n- Continued productivity\n- Team collaboration\n- Project work",
      "2:00 PM - 3:00 PM":
        "Lunch & Relaxation\n- Nutritious lunch\n- Mindful break\n- Energy reset",
      "3:00 PM - 5:00 PM":
        "Productivity Block 3\n- Final tasks\n- Day wrap-up\n- Tomorrow's planning",
      "5:00 PM - 6:00 PM":
        "Hobby Session 1\n- Personal activities\n- Enjoyable pursuits\n- Skill practice",
      "6:00 PM - 7:00 PM":
        "Dinner & Unwind\n- Evening meal\n- Relaxation start\n- Stress reduction",
      "7:00 PM - 8:00 PM":
        "Evening Fitness / Active Recovery\n- Light movement\n- Stretching focus\n- Recovery emphasis",
      "8:00 PM - 9:00 PM":
        "Hobby Session 2 / Wind-Down\n- Gentle activities\n- Evening enjoyment\n- Relaxation time",
      "9:30 PM - 10:00 PM":
        "Skincare & Medications\n- Self-care routine\n- Health maintenance\n- Evening preparation",
      "10:00 PM - 10:30 PM":
        "Wind-Down for Bed\n- Sleep preparation\n- Calming activities\n- Environment setup",
      "10:30 PM - 7:00 AM":
        "Sleep\n- Quality rest\n- Recovery time\n- Peaceful sleep",
    },
    Friday: {
      "7:00 AM - 7:30 AM":
        "Wake Up & Hydrate\n- Morning hydration\n- Wake-up routine\n- Day preparation",
      "7:30 AM - 8:30 AM":
        "Morning Fitness Session (Full Body + Core)\n- Warm-up (10 min): Dynamic movements\n- Main Circuit (3-4 rounds): Compound exercises\n- Full Body Finisher: Circuit training",
      "8:30 AM - 9:30 AM":
        "Breakfast & Shower\n- Balanced breakfast\n- Morning freshening\n- Day setup",
      "9:30 AM - 11:30 AM":
        "Productivity Block 1\n- Week completion tasks\n- Priority items\n- Important meetings",
      "11:30 AM - 12:00 PM":
        "Break\n- Quick refreshment\n- Movement break\n- Mental pause",
      "12:00 PM - 2:00 PM":
        "Productivity Block 2\n- Weekly wrap-up\n- Team coordination\n- Project completion",
      "2:00 PM - 3:00 PM":
        "Lunch & Relaxation\n- Nourishing lunch\n- Week reflection\n- Relaxation time",
      "3:00 PM - 5:00 PM":
        "Productivity Block 3\n- Final weekly tasks\n- Next week prep\n- Status updates",
      "5:00 PM - 6:00 PM":
        "Hobby Session 1\n- Fun activities\n- Personal time\n- Skill practice",
      "6:00 PM - 7:00 PM":
        "Dinner & Unwind\n- Evening meal\n- Week completion\n- Relaxation start",
      "7:00 PM - 8:00 PM":
        "Evening Fitness / Active Recovery\n- Light exercise\n- Recovery focus\n- Gentle movement",
      "8:00 PM - 9:00 PM":
        "Hobby Session 2 / Wind-Down\n- Weekend preparation\n- Relaxing activities\n- Enjoyment time",
      "9:30 PM - 10:00 PM":
        "Skincare & Medications\n- Evening routine\n- Health maintenance\n- Next day prep",
      "10:00 PM - 10:30 PM":
        "Wind-Down for Bed\n- Relaxation routine\n- Sleep preparation\n- Calm environment",
      "10:30 PM - 7:00 AM":
        "Sleep\n- Restful night\n- Quality sleep\n- Recovery time",
    },
    Saturday: {
        "7:00 AM - 7:30 AM":
            "Wake Up & Hydrate\n- Hydrate after waking up\n- Light stretching or meditation",
        "7:30 AM - 8:30 AM":
            "Morning Fitness Session (Lower Body + Glutes)\n- Warm-up (5-10 minutes):\n  - Jump Rope or Jog in Place (1 minute)\n  - Leg Swings (1 minute)\n  - Hip Circles (1 minute)\n- Main Workout:\n  - Squat Jumps – 15 reps\n  - Lunges – 15 reps per leg\n  - Glute Bridges – 15 reps\n  - Donkey Kicks – 15 reps per leg\n  - Step-ups – 15 reps\n- Core Finisher:\n  - Bicycle Crunches – 20 reps\n  - Plank Leg Lifts – 15 reps per side\nRepeat 3-4 rounds",
        "8:30 AM - 9:30 AM":
            "Breakfast & Shower\n- Protein-rich breakfast and shower",
        "9:30 AM - 11:30 AM":
            "Productivity Block 1\n- Work on your most important tasks for the day",
        "11:30 AM - 12:00 PM":
            "Break\n- Take a short break\n- Have a snack\n- Go for a brief walk",
        "12:00 PM - 2:00 PM":
            "Productivity Block 2\n- Continue with work, meetings, or study",
        "2:00 PM - 3:00 PM":
            "Lunch & Relaxation\n- Healthy lunch (e.g., grilled chicken or plant-based protein with veggies and grains)",
        "3:00 PM - 5:00 PM":
            "Productivity Block 3\n- Finish remaining tasks\n- Organize your work for the upcoming week",
        "5:00 PM - 6:00 PM":
            "Hobby Session 1\n- Engage in a fun or relaxing hobby\n- Learn a new skill\n- Crafting or favorite pastime",
        "6:00 PM - 7:00 PM":
            "Dinner & Unwind\n- Balanced dinner (e.g., fish or tofu with vegetables and a healthy carb)",
        "7:00 PM - 8:00 PM":
            "Evening Fitness / Active Recovery\n- Gentle stretching\n- Yoga session to relax and recover",
        "8:00 PM - 9:00 PM":
            "Hobby Session 2 / Wind-Down\n- Relax with light activities\n- Watch TV\n- Reading",
        "9:30 PM - 10:00 PM":
            "Skincare & Medications\n- Skincare routine\n- Take any medications",
        "10:00 PM - 10:30 PM":
            "Wind-Down for Bed\n- Calm down with deep breathing\n- Journaling\n- Read a book before sleep",
        "10:30 PM - 7:00 AM":
            "Sleep\n- Ensure 9 hours of sleep for rest and recovery"
    },
    Sunday: {
        "7:00 AM - 7:30 AM":
            "Wake Up & Hydrate\n- Drink water and hydrate",
        "7:30 AM - 8:30 AM":
            "Morning Active Recovery\n- Gentle yoga\n- Stretching\n- Light walk to keep the body moving without intense exertion",
        "8:30 AM - 9:30 AM":
            "Breakfast & Shower\n- Have a light, healthy breakfast\n- Shower and get ready for the day",
        "9:30 AM - 11:30 AM":
            "Productive Tasks\n- Wrap up any light tasks\n- Work on personal projects before the week starts",
        "11:30 AM - 12:00 PM":
            "Break\n- Relax\n- Take a short walk",
        "12:00 PM - 2:00 PM":
            "Hobby Session\n- Spend quality time on a hobby\n- Engage in activities you enjoy",
        "2:00 PM - 3:00 PM":
            "Lunch & Relaxation\n- Healthy lunch with balanced nutrients\n- Relax with family, friends, or a good book",
        "3:00 PM - 5:00 PM":
            "Plan for the Week Ahead\n- Organize and schedule\n- Mentally prepare for the upcoming week",
        "5:00 PM - 6:00 PM":
            "Hobby Session 2\n- Continue your hobby\n- Engage in something enjoyable to unwind",
        "6:00 PM - 7:00 PM":
            "Dinner & Unwind\n- Enjoy a light, balanced dinner",
        "7:00 PM - 8:00 PM":
            "Relaxing Evening Routine\n- Wind down with stretching\n- Light activities that help you relax before bed",
        "8:00 PM - 9:00 PM":
            "Free Time / Wind-Down\n- Use this time for anything you love\n- Reading\n- Movies",
        "9:30 PM - 10:00 PM":
            "Skincare & Medications\n- Follow your skincare routine\n- Take any prescribed medications",
        "10:00 PM - 10:30 PM":
            "Wind-Down for Bed\n- Relax and prepare for restful sleep\n- Calming activities",
        "10:30 PM - 7:00 AM":
            "Sleep\n- Sleep for 9 hours"
    },
  };

// Get current time slot
function getCurrentTimeSlot(timeSlots) {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    for (const timeSlot of Object.keys(timeSlots)) {
        const [start, end] = timeSlot.split(" - ").map((time) => {
            const [hours, minutes] = time.match(/(\d+):(\d+)/).slice(1, 3).map(Number);
            const isPM = time.includes("PM");
            return ((hours % 12) + (isPM ? 12 : 0)) * 60 + minutes;
        });

        if (currentTime >= start && currentTime < end) {
            return timeSlot;
        }
    }

    return null;
}

// Format time for better display
function formatTime(timeString) {
    const date = new Date();
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':');
    
    date.setHours(
        period === 'PM' ? parseInt(hours) + 12 : parseInt(hours),
        parseInt(minutes)
    );
    
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}

// Initialize schedule display
function initializeSchedule() {
    const scheduleContainer = document.getElementById("scheduleContainer");
    const dayOfWeek = new Date().toLocaleString("en-US", { weekday: "long" });
    const currentSchedule = scheduleData[dayOfWeek];

    Object.entries(currentSchedule).forEach(([timeSlot, task]) => {
        const timeSlotElement = document.createElement("div");
        timeSlotElement.id = `timeslot-${timeSlot.replace(/[:\s]/g, '')}`;
        timeSlotElement.className = 'time-slot p-4 rounded-lg bg-gray-50 hover:bg-gray-100';
        
        timeSlotElement.innerHTML = `
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 class="font-semibold text-gray-800 mb-2 md:mb-0">${timeSlot}</h3>
                <span class="current-indicator hidden text-blue-600 text-sm font-medium">Current</span>
            </div>
            <p class="text-gray-600 task-description mt-2">${task}</p>
        `;
        
        scheduleContainer.appendChild(timeSlotElement);
    });
}

// Update only dynamic content
function updateTimeDisplay() {
    const now = new Date();
    const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });
    const currentSchedule = scheduleData[dayOfWeek];
    const currentTimeSlot = getCurrentTimeSlot(currentSchedule);
    const currentTask = currentTimeSlot ? currentSchedule[currentTimeSlot] : "No scheduled task";

    // Update header information
    document.getElementById("currentDay").textContent = `${dayOfWeek}`;
    document.getElementById("currentTime").textContent = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    document.getElementById("currentTimeSlot").textContent = currentTimeSlot || "No current time slot";
    document.getElementById("currentTask").textContent = currentTask;

    // Update current slot highlighting
    document.querySelectorAll('.time-slot').forEach(slot => {
        const slotId = `timeslot-${currentTimeSlot?.replace(/[:\s]/g, '')}`;
        if (slot.id === slotId) {
            slot.classList.remove('bg-gray-50', 'hover:bg-gray-100');
            slot.classList.add('current-slot');
            slot.querySelector('.current-indicator').classList.remove('hidden');
        } else {
            slot.classList.remove('current-slot');
            slot.classList.add('bg-gray-50', 'hover:bg-gray-100');
            slot.querySelector('.current-indicator').classList.add('hidden');
        }
    });
}

// Initialize and set update intervals
window.addEventListener('load', () => {
    initializeSchedule();
    updateTimeDisplay();
    
    // Update time display every second
    setInterval(updateTimeDisplay, 1000);
    
    // Scroll to current time slot initially and every minute
    scrollToCurrentTimeSlot();
    setInterval(scrollToCurrentTimeSlot, 60000);
});

// Add smooth scrolling to current time slot
function scrollToCurrentTimeSlot() {
    const currentSlot = document.querySelector('.current-slot');
    if (currentSlot) {
        currentSlot.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}