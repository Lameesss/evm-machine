"use client";

import { useState } from "react";
import Buttons from "@/components/buttons";
import Table from "@/components/table";
import SuccessAnimation from "@/components/SuccessAnimation";
import CandidateCard from "@/components/CandidateCard";

export default function Home() {
  const [selectedParty, setSelectedParty] = useState("ward");
  const [votedCandidate, setVotedCandidate] = useState(null);
  const [glowingLight, setGlowingLight] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCandidateCard, setShowCandidateCard] = useState(false);

  const handleVote = (candidateId, candidateName) => {
    // Trigger red light glow
    setGlowingLight(candidateId);

    // Play beep sound
    playBeepSound();

    // Keep light glowing for 1 second
    setTimeout(() => {
      setGlowingLight(null);
      setVotedCandidate({
        id: candidateId,
        name: candidateName,
        party: selectedParty,
      });
      // Show success animation
      setShowSuccess(true);
    }, 1000);
  };

  const handleSuccessComplete = () => {
    setShowSuccess(false);
    setShowCandidateCard(true);
  };

  const handleVoteAgain = () => {
    // Determine next party
    const parties = ["ward", "block", "district"];
    const currentIndex = parties.indexOf(selectedParty);
    const nextIndex = (currentIndex + 1) % parties.length;
    const nextParty = parties[nextIndex];

    // Reset state for next party
    setShowCandidateCard(false);
    setVotedCandidate(null);
    setGlowingLight(null);
    setSelectedParty(nextParty);
  };

  const playBeepSound = () => {
    const audio = new Audio("/audio/mixkit-appliance-ready-beep-1076.wav");
    audio.volume = 0.5;
    audio.play().catch((error) => {
      console.log("Audio playback error:", error);
    });
  };

  const handleShareDemo = () => {
    const demoUrl = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          title: "EVM Voting Machine Demo",
          text: "Check out this interactive EVM voting machine demo!",
          url: demoUrl,
        })
        .catch((error) => console.log("Share error:", error));
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard
        .writeText(demoUrl)
        .then(() => {
          alert("Demo link copied to clipboard!");
        })
        .catch((error) => console.log("Copy error:", error));
    }
  };

  return (
    <main>
      {showSuccess && <SuccessAnimation onComplete={handleSuccessComplete} />}
      {showCandidateCard && votedCandidate && (
        <CandidateCard
          candidate={votedCandidate}
          onVoteAgain={handleVoteAgain}
        />
      )}
      {!showCandidateCard && (
        <>
          <Buttons
            selectedParty={selectedParty}
            onSelectParty={setSelectedParty}
          />
          <Table
            selectedParty={selectedParty}
            onVote={handleVote}
            glowingLight={glowingLight}
            votedCandidate={votedCandidate}
          />
          <div className="flex justify-center px-2 sm:px-4 py-6">
            <button
              onClick={handleShareDemo}
              className="px-8 sm:px-12 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-200 text-sm sm:text-base"
            >
              Share Demo Voting Machine
            </button>
          </div>
        </>
      )}
    </main>
  );
}
