"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Video, Globe, UserPlus, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import "react-day-picker/dist/style.css";

// Nexiqo theme colors
const THEME = {
  primary: "#101703",
  accent: "#DAF9A0",
  background: "#F1F1F1",
  text: "#101703",
  textLight: "#6B7280",
};

export function BookingSection() {
  const [step, setStep] = useState<"date" | "details">("date");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showGuestInput, setShowGuestInput] = useState(false);
  const [guests, setGuests] = useState<string[]>([]);

  const timeSlots = [
    "9:00am", "9:30am", "10:00am", "10:30am", 
    "11:00am", "11:30am", "12:00pm", "12:30pm",
    "1:00pm", "1:30pm", "2:00pm", "2:30pm"
  ];

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("details");
  };

  const handleAddGuest = () => {
    setShowGuestInput(true);
  };

  const submitGuest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("guestEmail") as string;
    if (email) {
      setGuests([...guests, email]);
      e.currentTarget.reset();
      setShowGuestInput(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-[1400px] mx-auto min-h-screen flex items-center">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 w-full items-start">
        
        {/* Left Side: Text Content */}
        <div className="space-y-8 lg:sticky lg:top-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary-soft text-foreground text-sm font-bold uppercase tracking-wider"
          >
            Book a Call
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
          >
            Unlock Possibilities <br />
            <span className="text-primary-soft bg-foreground px-4 leading-tight inline-block transform -rotate-1 mt-2">Book a Meeting</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-md leading-relaxed"
          >
            Ready to explore how Nexiqo's strategy-led design can help your business grow? Let's chat!
          </motion.p>

          {/* Abstract 3D Elements (Visual Decoration) */}
          <div className="relative h-64 w-full hidden lg:block">
             <motion.div 
               animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 right-10 w-32 h-32 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-4 border border-gray-100 z-10"
             >
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mb-2">
                  <Calendar size={24} className="text-foreground" />
                </div>
                <div className="h-2 w-16 bg-gray-100 rounded mb-1" />
                <div className="h-2 w-10 bg-gray-100 rounded" />
             </motion.div>

             <motion.div 
               animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-10 left-10 w-40 h-24 bg-white rounded-3xl shadow-xl p-4 border border-gray-100 z-0"
             >
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-gray-200" />
                   <div className="space-y-1">
                      <div className="h-2 w-12 bg-gray-100 rounded" />
                      <div className="h-2 w-8 bg-gray-100 rounded" />
                   </div>
                </div>
             </motion.div>
          </div>
        </div>

        {/* Right Side: Booking Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden min-h-[600px] flex flex-col md:flex-row"
        >
          {/* Sidebar Info */}
          <div className="md:w-1/4 bg-gray-50 p-8 border-r border-gray-100 flex flex-col justify-center items-center gap-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-soft">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Host" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">Nexiqo Agency</p>
              <h3 className="text-2xl font-bold text-foreground">30 Min Meeting</h3>
            </div>
            <div className="space-y-4 text-gray-600 text-sm font-medium">
               <div className="flex items-center gap-3">
                 <Clock size={18} className="text-primary-soft fill-foreground" />
                 <span>30m</span>
               </div>
               <div className="flex items-center gap-3">
                 <Video size={18} className="text-primary-soft fill-foreground" />
                 <span>Google Meet</span>
               </div>
               <div className="flex items-center gap-3">
                 <Globe size={18} className="text-primary-soft fill-foreground" />
                 <span>Location (GMT)</span>
               </div>
            </div>
            
            {step === "details" && selectedDate && selectedTime && (
               <div className="mt-auto pt-6 border-t border-gray-200">
                  <p className="text-foreground font-bold text-lg mb-1">
                    {format(selectedDate, "EEEE, MMMM d, yyyy")}
                  </p>
                  <p className="text-muted-foreground font-bold">
                    {selectedTime}
                  </p>
               </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="md:w-2/2 p-8 relative">
             <AnimatePresence mode="wait">
               {step === "date" ? (
                 <motion.div 
                   key="date"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="h-full flex flex-col"
                 >
                   <h3 className="text-xl font-bold text-foreground mb-6">Select a Date & Time</h3>
                   <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 h-full">
                      {/* Calendar */}
                      <div className="calendar-wrapper">
                        <DayPicker
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          showOutsideDays
                          modifiersClassNames={{
                            selected: "bg-foreground text-primary-soft hover:bg-foreground hover:text-primary-soft font-bold rounded-full",
                            today: "text-foreground font-bold border-b-2 border-primary-soft"
                          }}
                          className="p-0 font-sans"
                        />
                      </div>

                      {/* Time Slots */}
                      <div className="h-full overflow-y-auto pr-2 max-h-[400px] space-y-2 custom-scrollbar">
                         <p className="text-sm font-medium text-gray-500 mb-4 sticky top-0 bg-white py-2">
                           {selectedDate ? format(selectedDate, "EEEE, MMM d") : "Select date"}
                         </p>
                         {timeSlots.map((time) => (
                           <button
                             key={time}
                             onClick={() => handleTimeSelect(time)}
                             className="w-full py-3 px-4 rounded-xl border border-foreground/10 text-foreground font-medium hover:border-foreground hover:bg-foreground hover:text-primary-soft transition-all duration-200 text-center"
                           >
                             {time}
                           </button>
                         ))}
                      </div>
                   </div>
                 </motion.div>
               ) : (
                 <motion.div 
                   key="details"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="h-full flex flex-col"
                 >
                   <button 
                     onClick={() => setStep("date")}
                     className="absolute top-8 right-8 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                   >
                     <ArrowLeft size={18} />
                   </button>

                   <h3 className="text-xl font-bold text-foreground mb-6">Enter Details</h3>
                   
                   <form className="space-y-6 max-w-md">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground">Your Name *</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-foreground focus:ring-0 outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground">Email Address *</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-foreground focus:ring-0 outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>

                      {/* Guest List */}
                      {guests.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                           {guests.map((guest, i) => (
                             <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600 flex items-center gap-1">
                               {guest}
                               <button onClick={() => setGuests(guests.filter(g => g !== guest))} className="hover:text-red-500 ml-1">×</button>
                             </span>
                           ))}
                        </div>
                      )}

                      {/* Add Guest Button / Input */}
                      <div>
                        {!showGuestInput ? (
                          <button 
                            type="button"
                            onClick={handleAddGuest}
                            className="text-sm font-bold text-foreground flex items-center gap-2 hover:text-primary-soft transition-colors"
                          >
                            <UserPlus size={16} /> Add Guests
                          </button>
                        ) : (
                          <div className="flex gap-2 animate-in slide-in-from-left-2 duration-300">
                             <input 
                               name="guestEmail"
                               type="email" 
                               className="flex-1 px-4 py-2 rounded-xl border border-gray-200 text-sm focus:border-foreground outline-none"
                               placeholder="Guest Email"
                               onKeyDown={(e) => {
                                 if(e.key === 'Enter') {
                                   e.preventDefault();
                                   const email = e.currentTarget.value;
                                   if(email) {
                                     setGuests([...guests, email]);
                                     e.currentTarget.value = '';
                                     setShowGuestInput(false);
                                   }
                                 }
                               }}
                             />
                             <Button type="button" size="sm" onClick={() => setShowGuestInput(false)} variant="outline">Cancel</Button>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-foreground">Additional Notes</label>
                        <textarea 
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-foreground focus:ring-0 outline-none transition-colors resize-none"
                          placeholder="Please share anything that will help prepare for our meeting."
                        />
                      </div>

                      <div className="pt-4">
                        <Button className="w-full py-6 rounded-xl bg-foreground text-white hover:bg-foreground/90 font-bold text-lg">
                          Confirm Booking
                        </Button>
                        <p className="text-xs text-gray-400 text-center mt-4">
                           By proceeding, you agree to our Terms and Privacy Policy.
                        </p>
                      </div>
                   </form>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}