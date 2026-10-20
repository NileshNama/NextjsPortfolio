'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import {
  Sparkles,
  Share2,
  ChevronDown,
  Check,
  ExternalLink,
  MoreVertical,
  Copy,
  Globe,
  Send,
  Mail,
  MessageSquare,
  BookOpen,
  Cpu,
  Database,
  Code2,
  GraduationCap,
  Flame,
  Layers,
  Laptop,
  Server,
  CheckCircle,
  Video,
  Boxes,
  Brain,
  FileCheck,
  Users,
  Award,
  Terminal,
  Cloud,
  Grid,
  GitBranch,
  Code,
  Search,
  CheckSquare,
  Binary,
  Target,
  Compass,
  FileText,
  QrCode,
  Sun,
  Moon,
  X,
  HeartHandshake
} from 'lucide-react'

// Brand & Social SVG Icons
const YoutubeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const TwitterXIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const TwitterVerifiedBadge = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    aria-label="Verified account" 
    className={`${className} shrink-0 inline-block`}
    fill="none"
  >
    <title>Verified account</title>
    <path 
      d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34z" 
      fill="#1D9BF0" 
    />
    <path 
      d="M10.54 16.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" 
      fill="#FFFFFF" 
    />
  </svg>
)

const TelegramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.939z"/>
  </svg>
)

const DiscordIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

const PlayStoreIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#00C1A6" d="M3.6 1.8L13.8 12 3.6 22.2c-.4-.4-.6-1-.6-1.7V3.5c0-.7.2-1.3.6-1.7z"/>
    <path fill="#0086F9" d="M17.3 8.5L5.3 1.6C4.8 1.3 4.2 1.4 3.6 1.8l10.2 10.2 3.5-3.5z"/>
    <path fill="#FF3A44" d="M17.3 15.5l-3.5-3.5-10.2 10.2c.6.4 1.2.5 1.7.2l12-6.9z"/>
    <path fill="#FFC107" d="M21.2 10.8l-3.9-2.3-3.5 3.5 3.5 3.5 3.9-2.3c1.1-.6 1.1-1.8 0-2.4z"/>
  </svg>
)

const AppStoreIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.72-.93 2.74 1.01.08 2.01-.5 2.63-1.24z"/>
  </svg>
)

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.06 6.88C8.86 6.88 8.53 6.95 8.25 7.25C7.97 7.56 7.18 8.3 7.18 9.79C7.18 11.28 8.27 12.72 8.42 12.92C8.58 13.12 10.53 16.14 13.54 17.43C16.03 18.5 16.54 18.28 17.08 18.23C17.62 18.18 18.83 17.51 19.08 16.81C19.33 16.11 19.33 15.51 19.25 15.38C19.17 15.26 18.97 15.19 18.67 15.04C18.37 14.89 16.9 14.17 16.62 14.07C16.35 13.97 16.15 13.92 15.95 14.22C15.75 14.52 15.18 15.19 15.01 15.39C14.84 15.58 14.67 15.61 14.37 15.46C14.07 15.31 13.1 15 11.95 13.97C11.06 13.17 10.46 12.18 10.29 11.88C10.12 11.58 10.27 11.42 10.42 11.27C10.55 11.14 10.71 10.92 10.86 10.75C11.01 10.58 11.06 10.46 11.16 10.26C11.26 10.06 11.21 9.89 11.14 9.74C11.06 9.59 10.46 8.11 10.21 7.5C9.97 6.92 9.72 7 9.54 6.99C9.38 6.88 9.22 6.88 9.06 6.88Z"/>
  </svg>
)

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const ThreadsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24C5.467 24 0 18.533 0 11.814 0 5.094 5.467 0 12.186 0c6.643 0 11.968 5.234 12.072 11.814H21.57c-.105-5.187-4.275-9.314-9.384-9.314-5.176 0-9.384 4.208-9.384 9.314s4.208 9.314 9.384 9.314c3.486 0 6.541-1.928 8.165-4.787l2.25 1.455C20.395 21.657 16.536 24 12.186 24zm4.492-12.87c-.187-.042-.38-.073-.58-.093a6.83 6.83 0 0 0-4.098.814c-1.348.835-2.094 2.222-2.046 3.805.048 1.58.877 2.915 2.275 3.663a5.534 5.534 0 0 0 2.766.72c2.404 0 4.195-1.353 4.789-3.62.247-.942.302-1.999.302-3.149 0-.39-.014-.775-.04-1.15-.407-3.906-3.328-5.74-6.84-5.74-4.148 0-7.393 2.998-7.733 7.14-.374 4.549 2.96 8.549 7.447 8.932 2.378.204 4.708-.54 6.398-2.044l1.624 1.838c-2.146 1.91-5.097 2.853-8.118 2.595-5.69-.486-9.914-5.568-9.44-11.34.432-5.26 4.547-9.066 9.822-9.066 4.475 0 8.175 2.333 8.688 7.27.033.48.05 1.002.05 1.554 0 1.405-.074 2.744-.395 3.968-.823 3.141-3.385 5.01-6.721 5.01a7.994 7.994 0 0 1-3.993-1.042c-2.023-1.082-3.224-3.018-3.292-5.309-.07-2.316 1.026-4.349 3.007-5.576a9.324 9.324 0 0 1 5.59-1.116c.358.035.706.091 1.043.167v2.348zm-2.52 4.966c-.144 1.309-1.127 2.142-2.446 2.142-.676 0-1.314-.23-1.751-.632-.444-.407-.674-.984-.65-1.623.023-.623.293-1.171.74-1.503a4.57 4.57 0 0 1 2.53-.615c.575.02 1.096.117 1.577.291v1.94z"/>
  </svg>
)

const RedditIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.702zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
)

const QuoraIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.73 18.73c-.56.63-1.25 1.1-2.07 1.37-.81.27-1.68.34-2.56.2a6.39 6.39 0 0 1-4.48-3.37 7.03 7.03 0 0 1-.77-3.3c0-1.92.65-3.56 1.94-4.85C6.07 7.49 7.7 6.84 9.62 6.84c1.92 0 3.55.65 4.84 1.94 1.29 1.29 1.94 2.93 1.94 4.85 0 1.34-.33 2.54-1 3.55-.66 1.02-1.55 1.76-2.67 2.22l1.6 2.06c.43-.37.81-.8 1.13-1.29l1.43 1.15c-.47.69-1.03 1.29-1.68 1.8-.65.51-1.37.89-2.16 1.14l-1.33-1.74a7.9 7.9 0 0 1-1.99.23 8.32 8.32 0 0 1-4.04-1.02 8.5 8.5 0 0 1-2.92-2.73A8.77 8.77 0 0 1 .4 13.63c0-2.45.85-4.52 2.53-6.17C4.6 5.8 6.66 4.96 9.1 4.96c2.44 0 4.5.84 6.18 2.5 1.68 1.65 2.52 3.72 2.52 6.17 0 1.97-.56 3.73-1.67 5.25a8.7 8.7 0 0 1-4.4 3.32l1 1.3a.62.62 0 0 1-.1.87.64.64 0 0 1-.87-.1l-1.03-1.34z"/>
  </svg>
)

const PinterestIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.95-.14-2.4.03-3.44l1.24-5.27s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.58 2.26-.88 3.51-.25 1.05.53 1.91 1.56 1.91 1.88 0 3.32-1.98 3.32-4.84 0-2.53-1.82-4.3-4.42-4.3-3.01 0-4.78 2.26-4.78 4.6 0 .91.35 1.89.79 2.42.09.1.1.2.07.31l-.3 1.22c-.05.19-.16.23-.37.14-1.38-.64-2.24-2.65-2.24-4.27 0-3.47 2.53-6.67 7.29-6.67 3.83 0 6.8 2.73 6.8 6.37 0 3.8-2.4 6.86-5.73 6.86-1.12 0-2.17-.58-2.53-1.27l-.69 2.63c-.25.96-.92 2.16-1.37 2.9A12 12 0 1 0 12 0z"/>
  </svg>
)

const GmailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M1.5 5.5v13a1 1 0 0 0 1 1h3.5v-9.5l6 4.5 6-4.5V19.5H21.5a1 1 0 0 0 1-1v-13l-10.5 8z"/>
    <path fill="#34A853" d="M6 19.5h12v-8l-6 4.5-6-4.5z"/>
    <path fill="#EA4335" d="M21.5 4.5h-19a1 1 0 0 0-1 1l10.5 8 10.5-8a1 1 0 0 0-1-1z"/>
    <path fill="#FBBC04" d="M1.5 5.5l10.5 8V4.5z"/>
  </svg>
)

const HackerRankIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.075 16.5h-1.85v-9h1.85v3.255h4.15v-3.255h1.85v9h-1.85v-3.865h-4.15v3.865z"/>
  </svg>
)

const CodeChefIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07c-2.83-.48-5-2.94-5-5.93 0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.99-2.17 5.45-5 5.93zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
  </svg>
)

const CodeforcesIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect x="1.5" y="9" width="4.5" height="12" rx="1.5" fill="#FFD700"/>
    <rect x="9.75" y="3" width="4.5" height="18" rx="1.5" fill="#0000FF"/>
    <rect x="18" y="6" width="4.5" height="15" rx="1.5" fill="#FF0000"/>
  </svg>
)

const KaggleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.246l-5.344-6.867-1.594 1.523v5.297c0 .188-.094.293-.281.293h-2.93c-.187 0-.281-.105-.281-.293V.293c0-.188.094-.293.281-.293h2.93c.187 0 .281.105.281.293v14.461L12.984 9.5c.141-.164.305-.246.492-.246h3.281c.141 0 .234.059.258.176.023.141-.023.246-.141.34L10.969 15l6.703 8.484c.094.117.117.223.153.375z"/>
  </svg>
)

const CredlyIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-5zm-1 16.5l-4-4 1.41-1.41L11 13.67l6.59-6.59L19 8.5l-8 8z"/>
  </svg>
)

const UpiIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#097939"/>
    <path d="M6 14.5L10.5 7L13.5 12L18 7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 17L14 17" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Helper icon resolver
const getIconComponent = (iconName, color = "text-[#509187]") => {
  const iconProps = { className: `w-5 h-5 ${color}` }
  switch (iconName) {
    case 'Globe': return <Globe {...iconProps} />
    case 'PlayStore': return <PlayStoreIcon className="w-5 h-5" />
    case 'AppStore': return <AppStoreIcon className="w-5 h-5 text-slate-800 dark:text-white" />
    case 'GitHub': return <GithubIcon className="w-5 h-5 text-slate-900 dark:text-white" />
    case 'Projects': return <Layers {...iconProps} />
    case 'BookOpen': return <BookOpen {...iconProps} />
    case 'YouTube': return <YoutubeIcon className="w-5 h-5 text-[#FF0000]" />
    case 'WhatsApp': return <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
    case 'LinkedIn': return <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />
    case 'Facebook': return <FacebookIcon className="w-5 h-5 text-[#1877F2]" />
    case 'Instagram': return <InstagramIcon className="w-5 h-5 text-[#E4405F]" />
    case 'Telegram': return <TelegramIcon className="w-5 h-5 text-[#229ED9]" />
    case 'TwitterX': return <TwitterXIcon className="w-5 h-5 text-slate-900 dark:text-white" />
    case 'Threads': return <ThreadsIcon className="w-5 h-5 text-slate-900 dark:text-white" />
    case 'Reddit': return <RedditIcon className="w-5 h-5 text-[#FF4500]" />
    case 'Discord': return <DiscordIcon className="w-5 h-5 text-[#5865F2]" />
    case 'Quora': return <QuoraIcon className="w-5 h-5 text-[#B92B27]" />
    case 'Pinterest': return <PinterestIcon className="w-5 h-5 text-[#BD081C]" />
    case 'Gmail': return <GmailIcon className="w-5 h-5" />
    case 'Mail': return <Mail {...iconProps} />
    case 'HackerRank': return <HackerRankIcon className="w-5 h-5 text-[#00EA64]" />
    case 'Harkirat': return <GraduationCap {...iconProps} />
    case 'CodeChef': return <CodeChefIcon className="w-5 h-5 text-[#5B4638] dark:text-[#D4A373]" />
    case 'Codeforces': return <CodeforcesIcon className="w-5 h-5" />
    case 'Kaggle': return <KaggleIcon className="w-5 h-5 text-[#20BEFF]" />
    case 'Credly': return <CredlyIcon className="w-5 h-5 text-[#FF6B00]" />
    case 'FileText': return <FileText {...iconProps} />
    case 'Cpu': return <Cpu {...iconProps} />
    case 'Database': return <Database {...iconProps} />
    case 'Code2': return <Code2 {...iconProps} />
    case 'GraduationCap': return <GraduationCap {...iconProps} />
    case 'Flame': return <Flame {...iconProps} />
    case 'Layers': return <Layers {...iconProps} />
    case 'Laptop': return <Laptop {...iconProps} />
    case 'Server': return <Server {...iconProps} />
    case 'CheckCircle': return <CheckCircle {...iconProps} />
    case 'Send': return <Send {...iconProps} />
    case 'Video': return <Video {...iconProps} />
    case 'Boxes': return <Boxes {...iconProps} />
    case 'Brain': return <Brain {...iconProps} />
    case 'FileCheck': return <FileCheck {...iconProps} />
    case 'Users': return <Users {...iconProps} />
    case 'Award': return <Award {...iconProps} />
    case 'Sparkles': return <Sparkles {...iconProps} />
    case 'Terminal': return <Terminal {...iconProps} />
    case 'Cloud': return <Cloud {...iconProps} />
    case 'Grid': return <Grid {...iconProps} />
    case 'GitBranch': return <GitBranch {...iconProps} />
    case 'Code': return <Code {...iconProps} />
    case 'Search': return <Search {...iconProps} />
    case 'CheckSquare': return <CheckSquare {...iconProps} />
    case 'Binary': return <Binary {...iconProps} />
    case 'Target': return <Target {...iconProps} />
    case 'Compass': return <Compass {...iconProps} />
    default: return <ExternalLink {...iconProps} />
  }
}

// Helper category icon resolver (clean modern vector icons replacing emojis)
const getCategoryIcon = (categoryIcon, className = "w-4 h-4") => {
  switch (categoryIcon) {
    case 'Globe': return <Globe className={className} />
    case 'Terminal':
    case 'Code2': return <Terminal className={className} />
    case 'MessageSquare': return <MessageSquare className={className} />
    case 'Share2': return <Share2 className={className} />
    case 'Mail': return <Mail className={className} />
    default: return <Sparkles className={className} />
  }
}

// Helper featured destination icon resolver
const getFeaturedIcon = (iconName, className = "w-5 h-5") => {
  const iconProps = { className }
  switch (iconName) {
    case 'Globe': return <Globe {...iconProps} />
    case 'Boxes': return <Boxes {...iconProps} />
    case 'BookOpen': return <BookOpen {...iconProps} />
    case 'FileText': return <FileText {...iconProps} />
    case 'Send': return <Send {...iconProps} />
    case 'Mail': return <Mail {...iconProps} />
    case 'Layers': return <Layers {...iconProps} />
    case 'Sparkles': return <Sparkles {...iconProps} />
    case 'Award': return <Award {...iconProps} />
    case 'Terminal': return <Terminal {...iconProps} />
    default: return <ExternalLink {...iconProps} />
  }
}

// Helper to build identical 5-category, 27-link skeleton across all organizations
const buildOrgDirectory = ({
  website = { title: "Website", subtitle: "nileshnama.com", url: "https://nileshnama.com" },
  projects = { title: "Projects", subtitle: "dev.nileshnama.com/projects", url: "/projects" },
  blog = { title: "Blogs Site", subtitle: "cohorts.nileshnama.com/app-blog", url: "https://cohorts.nileshnama.com/app-blog" },
  playStore = { title: "Google Play Store", subtitle: "play.google.com/nileshnama", url: "https://play.google.com/store/apps/developer?id=Nilesh+Nama" },
  appStore = { title: "Apple App Store", subtitle: "apps.apple.com/nileshnama", url: "https://apps.apple.com/developer/nilesh-nama" },

  github = { title: "GitHub", subtitle: "github.com/NileshNama", url: "https://github.com/NileshNama" },
  credly = { title: "Credly Badges", subtitle: "credly.com/nilesh-nama", url: "https://www.credly.com/users/nilesh-nama/badge" },
  hackerRank = { title: "HackerRank", subtitle: "hackerrank.com/nileshnama", url: "https://www.hackerrank.com/nileshnama" },
  harkirat = { title: "Harkirat (100xDevs)", subtitle: "100xdevs.com", url: "https://100xdevs.com" },
  codeChef = { title: "CodeChef", subtitle: "codechef.com/users/nileshnama", url: "https://www.codechef.com/users/nileshnama" },
  codeforces = { title: "Codeforces", subtitle: "codeforces.com/profile/nileshnama", url: "https://codeforces.com/profile/nileshnama" },
  kaggle = { title: "Kaggle", subtitle: "kaggle.com/nileshnama", url: "https://www.kaggle.com/nileshnama" },

  whatsappChannel = { title: "WhatsApp Channel", subtitle: "whatsapp.com/channel", url: "https://whatsapp.com/channel/nileshnama" },
  whatsappChat = { title: "WhatsApp Chat Support", subtitle: "+91 9509923340", url: "https://wa.me/919509923340" },
  telegram = { title: "Telegram", subtitle: "t.me/nileshnama", url: "https://t.me/nileshnama" },
  discord = { title: "Discord", subtitle: "discord.gg/nileshnama", url: "https://discord.gg/nileshnama" },

  linkedin = { title: "LinkedIn", subtitle: "linkedin.com/in/nileshnama", url: "https://www.linkedin.com/in/nileshnama/" },
  youtube = { title: "YouTube Channel", subtitle: "youtube.com/@NileshNama", url: "https://www.youtube.com/@NileshNama" },
  twitter = { title: "Twitter / X", subtitle: "x.com/nileshnama", url: "https://x.com/nileshnama" },
  threads = { title: "Threads", subtitle: "threads.net/@nileshnama", url: "https://www.threads.net/@nileshnama" },
  instagram = { title: "Instagram", subtitle: "instagram.com/nileshnama", url: "https://www.instagram.com/nileshnama", icon: "Instagram" },
  facebook = { title: "Facebook Page", subtitle: "facebook.com/nileshnama", url: "https://www.facebook.com/nileshnama" },
  reddit = { title: "Reddit", subtitle: "reddit.com/u/nileshnama", url: "https://www.reddit.com/user/nileshnama" },
  quora = { title: "Quora", subtitle: "quora.com/Nilesh-Nama", url: "https://www.quora.com/profile/Nilesh-Nama" },
  pinterest = { title: "Pinterest", subtitle: "pinterest.com/nileshnama", url: "https://www.pinterest.com/nileshnama" },

  gmail = { title: "Gmail Me", subtitle: "nileshnama@gmail.com", url: "mailto:nileshnama@gmail.com" },
  webmail = { title: "WebMail", subtitle: "contact@nileshnama.com", url: "mailto:contact@nileshnama.com" },
} = {}) => [
  {
    key: "websites",
    title: "Websites & Applications",
    categoryIcon: "Globe",
    items: [
      { title: website.title || "Website", subtitle: website.subtitle || "nileshnama.com", url: website.url || "https://nileshnama.com", icon: "Globe" },
      { title: projects.title || "Projects", subtitle: projects.subtitle || "dev.nileshnama.com/projects", url: projects.url || "/projects", icon: "Projects" },
      { title: blog.title || "Blogs Site", subtitle: blog.subtitle || "cohorts.nileshnama.com/app-blog", url: blog.url || "https://cohorts.nileshnama.com/app-blog", icon: "BookOpen" },
      { title: playStore.title || "Google Play Store", subtitle: playStore.subtitle || "play.google.com/nileshnama", url: playStore.url || "https://play.google.com/store/apps/developer?id=Nilesh+Nama", icon: "PlayStore" },
      { title: appStore.title || "Apple App Store", subtitle: appStore.subtitle || "apps.apple.com/nileshnama", url: appStore.url || "https://apps.apple.com/developer/nilesh-nama", icon: "AppStore" },
    ]
  },
  {
    key: "developer",
    title: "Developer & Coding Profiles",
    categoryIcon: "Terminal",
    items: [
      { title: github.title || "GitHub", subtitle: github.subtitle || "github.com/NileshNama", url: github.url || "https://github.com/NileshNama", icon: "GitHub" },
      { title: credly.title || "Credly Badges", subtitle: credly.subtitle || "credly.com/nilesh-nama", url: credly.url || "https://www.credly.com/users/nilesh-nama/badge", icon: "Credly" },
      { title: hackerRank.title || "HackerRank", subtitle: hackerRank.subtitle || "hackerrank.com/nileshnama", url: hackerRank.url || "https://www.hackerrank.com/nileshnama", icon: "HackerRank" },
      { title: harkirat.title || "Harkirat (100xDevs)", subtitle: harkirat.subtitle || "100xdevs.com", url: harkirat.url || "https://100xdevs.com", icon: "Harkirat" },
      { title: codeChef.title || "CodeChef", subtitle: codeChef.subtitle || "codechef.com/users/nileshnama", url: codeChef.url || "https://www.codechef.com/users/nileshnama", icon: "CodeChef" },
      { title: codeforces.title || "Codeforces", subtitle: codeforces.subtitle || "codeforces.com/profile/nileshnama", url: codeforces.url || "https://codeforces.com/profile/nileshnama", icon: "Codeforces" },
      { title: kaggle.title || "Kaggle", subtitle: kaggle.subtitle || "kaggle.com/nileshnama", url: kaggle.url || "https://www.kaggle.com/nileshnama", icon: "Kaggle" },
    ]
  },
  {
    key: "community",
    title: "Community & Messaging Support",
    categoryIcon: "MessageSquare",
    items: [
      { title: whatsappChannel.title || "WhatsApp Channel", subtitle: whatsappChannel.subtitle || "whatsapp.com/channel", url: whatsappChannel.url || "https://whatsapp.com/channel/nileshnama", icon: "WhatsApp" },
      { title: whatsappChat.title || "WhatsApp Chat Support", subtitle: whatsappChat.subtitle || "+91 9509923340", url: whatsappChat.url || "https://wa.me/919509923340", icon: "WhatsApp" },
      { title: telegram.title || "Telegram", subtitle: telegram.subtitle || "t.me/nileshnama", url: telegram.url || "https://t.me/nileshnama", icon: "Telegram" },
      { title: discord.title || "Discord", subtitle: discord.subtitle || "discord.gg/nileshnama", url: discord.url || "https://discord.gg/nileshnama", icon: "Discord" },
    ]
  },
  {
    key: "social",
    title: "Social & Content Networks",
    categoryIcon: "Share2",
    items: [
      { title: linkedin.title || "LinkedIn", subtitle: linkedin.subtitle || "linkedin.com/in/nileshnama", url: linkedin.url || "https://www.linkedin.com/in/nileshnama/", icon: "LinkedIn" },
      { title: youtube.title || "YouTube Channel", subtitle: youtube.subtitle || "youtube.com/@NileshNama", url: youtube.url || "https://www.youtube.com/@NileshNama", icon: "YouTube" },
      { title: twitter.title || "Twitter / X", subtitle: twitter.subtitle || "x.com/nileshnama", url: twitter.url || "https://x.com/nileshnama", icon: "TwitterX" },
      { title: threads.title || "Threads", subtitle: threads.subtitle || "threads.net/@nileshnama", url: threads.url || "https://www.threads.net/@nileshnama", icon: "Threads" },
      { title: instagram.title || "Instagram", subtitle: instagram.subtitle || "instagram.com/nileshnama", url: instagram.url || "https://www.instagram.com/nileshnama", icon: "Instagram" },
      { title: facebook.title || "Facebook Page", subtitle: facebook.subtitle || "facebook.com/nileshnama", url: facebook.url || "https://www.facebook.com/nileshnama", icon: "Facebook" },
      { title: reddit.title || "Reddit", subtitle: reddit.subtitle || "reddit.com/u/nileshnama", url: reddit.url || "https://www.reddit.com/user/nileshnama", icon: "Reddit" },
      { title: quora.title || "Quora", subtitle: quora.subtitle || "quora.com/Nilesh-Nama", url: quora.url || "https://www.quora.com/profile/Nilesh-Nama", icon: "Quora" },
      { title: pinterest.title || "Pinterest", subtitle: pinterest.subtitle || "pinterest.com/nileshnama", url: pinterest.url || "https://www.pinterest.com/nileshnama", icon: "Pinterest" },
    ]
  },
  {
    key: "inquiries",
    title: "Direct Email & Inquiries",
    categoryIcon: "Mail",
    items: [
      { title: gmail.title || "Gmail Me", subtitle: gmail.subtitle || "nileshnama@gmail.com", url: gmail.url || "mailto:nileshnama@gmail.com", icon: "Gmail" },
      { title: webmail.title || "WebMail", subtitle: webmail.subtitle || "contact@nileshnama.com", url: webmail.url || "mailto:contact@nileshnama.com", icon: "Mail" },
    ]
  }
]

// 6 Organizations Data (Grouped into Main & Products)
export const ORGANIZATIONS_DATA = [
  // ─── MAIN ───
  {
    id: "nileshnama",
    group: "Main",
    number: 0,
    name: "Nilesh Nama",
    title: "Nilesh Nama",
    handle: "@nileshnama",
    badge: "FOUNDER · ENGINEER · AUTHOR",
    tagline: "I build products at VebGlitch, shape engineers through VebSkills, and prepare aspirants to crack GATE, BARC and technical interviews through NN Cohorts.",
    bio: "Systems engineer, educator, and author. Architect across VebGlitch, VebSkills, Interviewers, NQuestions & NN Cohorts.",
    avatar: "/nilesh-avatar.jpg",
    accentColor: "#509187",
    bgTint: "from-[#509187]/15 to-[#509187]/5",
    donation: null,
    featuredDestinations: [
      {
        title: "Explore My Portfolio",
        subtitle: "Personal website showcasing my engineering work, projects, experience, and professional journey.",
        url: "/",
        icon: "Globe",
        type: "portfolio",
        actionLabel: "Visit",
      },
      {
        title: "Explore My Products",
        subtitle: "A central destination for my products and ventures, including NQuestions, NN Cohorts, and other relevant projects.",
        url: "/#featured-work",
        icon: "Boxes",
        type: "products",
        actionLabel: "Explore",
      },
      {
        title: "Read My Work",
        subtitle: "Technical writing, articles, educational content, and publications.",
        url: "/#writing",
        icon: "BookOpen",
        type: "writing",
        actionLabel: "Read",
      },
      {
        title: "View My Resume",
        subtitle: "Professional background, qualifications, skills, and experience.",
        url: "/NileshNama-Resume.pdf",
        icon: "FileText",
        type: "resume",
        actionLabel: "Resume",
      },
      {
        title: "Work With Me",
        subtitle: "A contact destination for mentoring, technical training, speaking, collaborations, and professional inquiries.",
        url: "/#contact",
        icon: "Send",
        type: "contact",
        actionLabel: "Contact",
      },
    ],
    sections: buildOrgDirectory(),
  },
  {
    id: "vebglitch",
    group: "Main",
    number: 1,
    name: "VebGlitch",
    title: "VebGlitch",
    handle: "@vebglitch",
    badge: "Digital Product Engineering & Technology Studio",
    tagline: "Engineering Scalable Digital Systems, Cloud & Web Products",
    bio: "Bespoke software platforms, scalable web architectures, and high-performance digital systems for modern enterprises.",
    avatar: "/vebglitch.png",
    accentColor: "#0284c7",
    bgTint: "from-[#0284c7]/15 to-[#0284c7]/5",
    donation: null,
    featuredDestinations: [
      {
        title: "Explore VebGlitch Studio",
        subtitle: "Scalable digital systems, cloud architectures, and modern web products.",
        url: "https://vebglitch.com",
        icon: "Globe",
        type: "portfolio",
        actionLabel: "Visit",
      },
      {
        title: "View Studio Projects",
        subtitle: "Client platforms, production systems, and cloud-native architectures.",
        url: "https://vebglitch.com/#work",
        icon: "Boxes",
        type: "products",
        actionLabel: "Work",
      },
      {
        title: "Read Engineering Blog",
        subtitle: "System design deep-dives, infrastructure patterns, and tech dispatches.",
        url: "https://vebglitch.com/blog",
        icon: "BookOpen",
        type: "writing",
        actionLabel: "Blog",
      },
      {
        title: "Studio Capabilities & Stack",
        subtitle: "High-performance digital systems for modern enterprises.",
        url: "https://vebglitch.com/#services",
        icon: "FileText",
        type: "services",
        actionLabel: "Services",
      },
      {
        title: "Start a Project With Us",
        subtitle: "Inquiries for bespoke software engineering and architectural consulting.",
        url: "mailto:contact@vebglitch.com",
        icon: "Send",
        type: "contact",
        actionLabel: "Contact",
      },
    ],
    sections: buildOrgDirectory({
      website: { subtitle: "vebglitch.com", url: "https://vebglitch.com" },
      projects: { subtitle: "vebglitch.com/#work", url: "https://vebglitch.com/#work" },
      blog: { subtitle: "vebglitch.com/blog", url: "https://vebglitch.com/blog" },
      playStore: { subtitle: "play.google.com/vebglitch", url: "https://play.google.com/store/apps/developer?id=VebGlitch" },
      appStore: { subtitle: "apps.apple.com/vebglitch", url: "https://apps.apple.com/developer/vebglitch" },
      github: { subtitle: "github.com/vebglitch", url: "https://github.com/vebglitch" },
      credly: { subtitle: "credly.com/vebglitch", url: "https://www.credly.com/organizations/vebglitch/badges" },
      hackerRank: { subtitle: "hackerrank.com/vebglitch", url: "https://www.hackerrank.com/vebglitch" },
      harkirat: { subtitle: "100xdevs.com/vebglitch", url: "https://100xdevs.com" },
      codeChef: { subtitle: "codechef.com/users/vebglitch", url: "https://www.codechef.com/users/vebglitch" },
      codeforces: { subtitle: "codeforces.com/profile/vebglitch", url: "https://codeforces.com/profile/vebglitch" },
      kaggle: { subtitle: "kaggle.com/vebglitch", url: "https://www.kaggle.com/vebglitch" },
      whatsappChannel: { subtitle: "whatsapp.com/channel/vebglitch", url: "https://whatsapp.com/channel/vebglitch" },
      whatsappChat: { subtitle: "+91 9509923340", url: "https://wa.me/919509923340" },
      telegram: { subtitle: "t.me/vebglitch", url: "https://t.me/vebglitch" },
      discord: { subtitle: "discord.gg/vebglitch", url: "https://discord.gg/vebglitch" },
      linkedin: { subtitle: "linkedin.com/company/vebglitch", url: "https://www.linkedin.com/company/vebglitch" },
      youtube: { subtitle: "youtube.com/@vebglitch", url: "https://www.youtube.com/@vebglitch" },
      twitter: { subtitle: "x.com/vebglitch", url: "https://x.com/vebglitch" },
      threads: { subtitle: "threads.net/@vebglitch", url: "https://www.threads.net/@vebglitch" },
      instagram: { subtitle: "instagram.com/vebglitch", url: "https://www.instagram.com/vebglitch" },
      facebook: { subtitle: "facebook.com/vebglitch", url: "https://www.facebook.com/vebglitch" },
      reddit: { subtitle: "reddit.com/r/vebglitch", url: "https://www.reddit.com/r/vebglitch" },
      quora: { subtitle: "quora.com/topic/VebGlitch", url: "https://www.quora.com/topic/VebGlitch" },
      pinterest: { subtitle: "pinterest.com/vebglitch", url: "https://www.pinterest.com/vebglitch" },
      gmail: { subtitle: "vebglitch@gmail.com", url: "mailto:vebglitch@gmail.com" },
      webmail: { subtitle: "contact@vebglitch.com", url: "mailto:contact@vebglitch.com" },
    }),
  },
  {
    id: "nncohorts",
    group: "Main",
    number: 2,
    name: "NN Cohorts",
    title: "NN Cohorts",
    handle: "@cohorts.nileshnama",
    badge: "Intensive Reasoning & Engineering Cohorts",
    tagline: "System-Level Conceptual Depth & Exam Execution Under Pressure",
    bio: "Transforming passive study into active decision-making, disciplined reasoning, and high-reliability performance under real exam pressure.",
    avatar: "/nncohorts.png",
    accentColor: "#f59e0b",
    bgTint: "from-[#f59e0b]/15 to-[#f59e0b]/5",
    donation: null,
    featuredDestinations: [
      {
        title: "Explore NN Cohorts",
        subtitle: "Cohort-based learning infrastructure focused on exam reasoning & execution.",
        url: "https://cohorts.nileshnama.com/",
        icon: "Globe",
        type: "portfolio",
        actionLabel: "Cohorts",
      },
      {
        title: "Explore Programs & Courses",
        subtitle: "Conceptual depth and problem elimination frameworks for competitive exams.",
        url: "https://cohorts.nileshnama.com/#courses",
        icon: "Boxes",
        type: "products",
        actionLabel: "Courses",
      },
      {
        title: "Read Technical Articles",
        subtitle: "Systems engineering notes, operating systems & network theory.",
        url: "https://cohorts.nileshnama.com/app-blog",
        icon: "BookOpen",
        type: "writing",
        actionLabel: "Articles",
      },
      {
        title: "Student Reasoning Breakdowns",
        subtitle: "First-principles breakdowns and trap elimination under time constraints.",
        url: "https://cohorts.nileshnama.com/#breakdowns",
        icon: "FileText",
        type: "framework",
        actionLabel: "Breakdowns",
      },
      {
        title: "Enroll in Upcoming Cohort",
        subtitle: "Inquire about upcoming batches, mentorship slots, and cohort admissions.",
        url: "mailto:cohorts@nileshnama.com",
        icon: "Send",
        type: "contact",
        actionLabel: "Enroll",
      },
    ],
    sections: buildOrgDirectory({
      website: { subtitle: "cohorts.nileshnama.com", url: "https://cohorts.nileshnama.com/" },
      projects: { subtitle: "cohorts.nileshnama.com/#courses", url: "https://cohorts.nileshnama.com/#courses" },
      blog: { subtitle: "cohorts.nileshnama.com/app-blog", url: "https://cohorts.nileshnama.com/app-blog" },
      playStore: { subtitle: "play.google.com/nncohorts", url: "https://play.google.com/store/apps/developer?id=NN+Cohorts" },
      appStore: { subtitle: "apps.apple.com/nncohorts", url: "https://apps.apple.com/developer/nn-cohorts" },
      github: { subtitle: "github.com/NileshNama", url: "https://github.com/NileshNama" },
      credly: { subtitle: "credly.com/nilesh-nama", url: "https://www.credly.com/users/nilesh-nama/badge" },
      hackerRank: { subtitle: "hackerrank.com/nileshnama", url: "https://www.hackerrank.com/nileshnama" },
      harkirat: { subtitle: "100xdevs.com/nncohorts", url: "https://100xdevs.com" },
      codeChef: { subtitle: "codechef.com/users/nileshnama", url: "https://www.codechef.com/users/nileshnama" },
      codeforces: { subtitle: "codeforces.com/profile/nileshnama", url: "https://codeforces.com/profile/nileshnama" },
      kaggle: { subtitle: "kaggle.com/nileshnama", url: "https://www.kaggle.com/nileshnama" },
      whatsappChannel: { subtitle: "whatsapp.com/channel/nncohorts", url: "https://whatsapp.com/channel/nncohorts" },
      whatsappChat: { subtitle: "+91 9509923340", url: "https://wa.me/919509923340" },
      telegram: { subtitle: "t.me/nileshnama", url: "https://t.me/nileshnama" },
      discord: { subtitle: "discord.gg/nncohorts", url: "https://discord.gg/nncohorts" },
      linkedin: { subtitle: "linkedin.com/in/nileshnama", url: "https://www.linkedin.com/in/nileshnama/" },
      youtube: { subtitle: "youtube.com/@NileshNama", url: "https://www.youtube.com/@NileshNama" },
      twitter: { subtitle: "x.com/cohorts_nn", url: "https://x.com/cohorts_nn" },
      threads: { subtitle: "threads.net/@cohorts.nileshnama", url: "https://www.threads.net/@cohorts.nileshnama" },
      instagram: { subtitle: "instagram.com/cohorts.nileshnama", url: "https://www.instagram.com/cohorts.nileshnama" },
      facebook: { subtitle: "facebook.com/nncohorts", url: "https://www.facebook.com/nncohorts" },
      reddit: { subtitle: "reddit.com/r/nncohorts", url: "https://www.reddit.com/r/nncohorts" },
      quora: { subtitle: "quora.com/topic/NN-Cohorts", url: "https://www.quora.com/topic/NN-Cohorts" },
      pinterest: { subtitle: "pinterest.com/nncohorts", url: "https://www.pinterest.com/nncohorts" },
      gmail: { subtitle: "cohorts.nileshnama@gmail.com", url: "mailto:cohorts.nileshnama@gmail.com" },
      webmail: { subtitle: "cohorts@nileshnama.com", url: "mailto:cohorts@nileshnama.com" },
    }),
  },
  {
    id: "vebskills",
    group: "Main",
    number: 3,
    name: "VebSkills",
    title: "VebSkills",
    handle: "@vebskills",
    badge: "Applied Engineering Ecosystem & Production Lab",
    tagline: "Master Real Development Through Production Simulation, Not Tutorials",
    bio: "Bridging the gap between academic theory and real-world software production. Hands-on labs, open-source cohorts, and system-level engineering.",
    avatar: "/vebskills.png",
    accentColor: "#10b981",
    bgTint: "from-[#10b981]/15 to-[#10b981]/5",
    donation: null,
    featuredDestinations: [
      {
        title: "Explore VebSkills Platform",
        subtitle: "Applied engineering ecosystem simulating production repositories & CI/CD.",
        url: "https://www.vebskills.com/",
        icon: "Globe",
        type: "portfolio",
        actionLabel: "Platform",
      },
      {
        title: "Production Simulation Labs",
        subtitle: "Real-world development through production simulation, not passive tutorials.",
        url: "https://www.vebskills.com/#labs",
        icon: "Boxes",
        type: "products",
        actionLabel: "Labs",
      },
      {
        title: "Engineering Curriculum",
        subtitle: "Full stack, cloud architectures, Docker environments, and DevOps pipelines.",
        url: "https://www.vebskills.com/#curriculum",
        icon: "BookOpen",
        type: "curriculum",
        actionLabel: "Curriculum",
      },
      {
        title: "Verified Skill Badges",
        subtitle: "Credly-backed verification of hands-on production engineering competency.",
        url: "https://www.credly.com/organizations/vebskills/badges",
        icon: "FileText",
        type: "credentials",
        actionLabel: "Credly",
      },
      {
        title: "Join VebSkills Platform",
        subtitle: "Get access to production simulations and engineer-led evaluations.",
        url: "https://www.vebskills.com/#join",
        icon: "Send",
        type: "contact",
        actionLabel: "Join",
      },
    ],
    sections: buildOrgDirectory({
      website: { subtitle: "vebskills.com", url: "https://www.vebskills.com/" },
      projects: { subtitle: "vebskills.com/#labs", url: "https://www.vebskills.com/#labs" },
      blog: { subtitle: "vebskills.com/blog", url: "https://www.vebskills.com/blog" },
      playStore: { subtitle: "play.google.com/vebskills", url: "https://play.google.com/store/apps/developer?id=VebSkills" },
      appStore: { subtitle: "apps.apple.com/vebskills", url: "https://apps.apple.com/developer/vebskills" },
      github: { subtitle: "github.com/vebskills", url: "https://github.com/vebskills" },
      credly: { subtitle: "credly.com/vebskills", url: "https://www.credly.com/organizations/vebskills/badges" },
      hackerRank: { subtitle: "hackerrank.com/vebskills", url: "https://www.hackerrank.com/vebskills" },
      harkirat: { subtitle: "100xdevs.com/vebskills", url: "https://100xdevs.com" },
      codeChef: { subtitle: "codechef.com/users/vebskills", url: "https://www.codechef.com/users/vebskills" },
      codeforces: { subtitle: "codeforces.com/profile/vebskills", url: "https://codeforces.com/profile/vebskills" },
      kaggle: { subtitle: "kaggle.com/vebskills", url: "https://www.kaggle.com/vebskills" },
      whatsappChannel: { subtitle: "whatsapp.com/channel/vebskills", url: "https://whatsapp.com/channel/vebskills" },
      whatsappChat: { subtitle: "+91 9509923340", url: "https://wa.me/919509923340" },
      telegram: { subtitle: "t.me/vebskills", url: "https://t.me/vebskills" },
      discord: { subtitle: "discord.gg/vebskills", url: "https://discord.gg/vebskills" },
      linkedin: { subtitle: "linkedin.com/company/vebskills", url: "https://www.linkedin.com/company/vebskills" },
      youtube: { subtitle: "youtube.com/@vebskills", url: "https://www.youtube.com/@vebskills" },
      twitter: { subtitle: "x.com/vebskills", url: "https://x.com/vebskills" },
      threads: { subtitle: "threads.net/@vebskills", url: "https://www.threads.net/@vebskills" },
      instagram: { subtitle: "instagram.com/vebskills", url: "https://www.instagram.com/vebskills" },
      facebook: { subtitle: "facebook.com/vebskills", url: "https://www.facebook.com/vebskills" },
      reddit: { subtitle: "reddit.com/r/vebskills", url: "https://www.reddit.com/r/vebskills" },
      quora: { subtitle: "quora.com/topic/VebSkills", url: "https://www.quora.com/topic/VebSkills" },
      pinterest: { subtitle: "pinterest.com/vebskills", url: "https://www.pinterest.com/vebskills" },
      gmail: { subtitle: "vebskills@gmail.com", url: "mailto:vebskills@gmail.com" },
      webmail: { subtitle: "contact@vebskills.com", url: "mailto:contact@vebskills.com" },
    }),
  },

  // ─── PRODUCTS ───
  {
    id: "interviewers",
    group: "Products",
    number: 1,
    name: "Interviewers",
    title: "Interviewers",
    handle: "@interviewers.in",
    badge: "Tech Interview Preparation & Mentorship Lab",
    tagline: "Master Engineering Interviews with Real Senior Mentors",
    bio: "Live 1:1 technical mock interviews, system design deep-dives, and actionable feedback from senior industry engineers.",
    avatar: "/interviewers.png",
    accentColor: "#0077b5",
    bgTint: "from-[#0077b5]/15 to-[#0077b5]/5",
    donation: null,
    featuredDestinations: [
      {
        title: "Explore Interviewers Platform",
        subtitle: "Mentor–student matching for structured technical interview preparation.",
        url: "https://www.interviewers.in/",
        icon: "Globe",
        type: "portfolio",
        actionLabel: "Platform",
      },
      {
        title: "Technical Mock Drills",
        subtitle: "Live 1:1 technical mock interviews, system design drills, and evaluation.",
        url: "https://www.interviewers.in/#tracks",
        icon: "Boxes",
        type: "products",
        actionLabel: "Tracks",
      },
      {
        title: "Interview Insights Blog",
        subtitle: "Examiner psychology, problem breakdown methods, and interview strategy.",
        url: "https://www.interviewers.in/blog",
        icon: "BookOpen",
        type: "writing",
        actionLabel: "Insights",
      },
      {
        title: "Senior Mentor Network",
        subtitle: "Experienced engineers conducting structured evaluations and feedback.",
        url: "https://www.interviewers.in/#mentors",
        icon: "FileText",
        type: "mentors",
        actionLabel: "Mentors",
      },
      {
        title: "Book an Evaluation Session",
        subtitle: "Schedule a mock interview or technical evaluation with a senior mentor.",
        url: "mailto:hello@interviewers.in",
        icon: "Send",
        type: "contact",
        actionLabel: "Schedule",
      },
    ],
    sections: buildOrgDirectory({
      website: { subtitle: "interviewers.in", url: "https://www.interviewers.in/" },
      projects: { subtitle: "interviewers.in/#tracks", url: "https://www.interviewers.in/#tracks" },
      blog: { subtitle: "interviewers.in/blog", url: "https://www.interviewers.in/blog" },
      playStore: { subtitle: "play.google.com/interviewers", url: "https://play.google.com/store/apps/developer?id=Interviewers" },
      appStore: { subtitle: "apps.apple.com/interviewers", url: "https://apps.apple.com/developer/interviewers" },
      github: { subtitle: "github.com/interviewers-in", url: "https://github.com/interviewers-in" },
      credly: { subtitle: "credly.com/interviewers", url: "https://www.credly.com/organizations/interviewers/badges" },
      hackerRank: { subtitle: "hackerrank.com/interviewers", url: "https://www.hackerrank.com/interviewers" },
      harkirat: { subtitle: "100xdevs.com/interviewers", url: "https://100xdevs.com" },
      codeChef: { subtitle: "codechef.com/users/interviewers", url: "https://www.codechef.com/users/interviewers" },
      codeforces: { subtitle: "codeforces.com/profile/interviewers", url: "https://codeforces.com/profile/interviewers" },
      kaggle: { subtitle: "kaggle.com/interviewers", url: "https://www.kaggle.com/interviewers" },
      whatsappChannel: { subtitle: "whatsapp.com/channel/interviewers", url: "https://whatsapp.com/channel/interviewers" },
      whatsappChat: { subtitle: "+91 9509923340", url: "https://wa.me/919509923340" },
      telegram: { subtitle: "t.me/interviewers_in", url: "https://t.me/interviewers_in" },
      discord: { subtitle: "discord.gg/interviewers", url: "https://discord.gg/interviewers" },
      linkedin: { subtitle: "linkedin.com/company/interviewers-in", url: "https://www.linkedin.com/company/interviewers-in" },
      youtube: { subtitle: "youtube.com/@interviewers_in", url: "https://www.youtube.com/@interviewers_in" },
      twitter: { subtitle: "x.com/interviewers_in", url: "https://x.com/interviewers_in" },
      threads: { subtitle: "threads.net/@interviewers.in", url: "https://www.threads.net/@interviewers.in" },
      instagram: { subtitle: "instagram.com/interviewers.in", url: "https://www.instagram.com/interviewers.in" },
      facebook: { subtitle: "facebook.com/interviewers.in", url: "https://www.facebook.com/interviewers.in" },
      reddit: { subtitle: "reddit.com/r/interviewers", url: "https://www.reddit.com/r/interviewers" },
      quora: { subtitle: "quora.com/topic/Interviewers-In", url: "https://www.quora.com/topic/Interviewers-In" },
      pinterest: { subtitle: "pinterest.com/interviewers_in", url: "https://www.pinterest.com/interviewers_in" },
      gmail: { subtitle: "interviewers.in@gmail.com", url: "mailto:interviewers.in@gmail.com" },
      webmail: { subtitle: "hello@interviewers.in", url: "mailto:hello@interviewers.in" },
    }),
  },
  {
    id: "nquestions",
    group: "Products",
    number: 2,
    name: "NQuestions",
    title: "NQuestions",
    handle: "@nquestions.in",
    badge: "Conceptual Question & Test Reasoning Engine",
    tagline: "First-Principles Question Bank for High-Pressure Exams",
    bio: "Designed for GATE, BARC, and competitive engineering aspirants. Decode deceptive questions using structured elimination frameworks.",
    avatar: "/nquestions.jpg",
    accentColor: "#8b5cf6",
    bgTint: "from-[#8b5cf6]/15 to-[#8b5cf6]/5",
    donation: null,
    featuredDestinations: [
      {
        title: "Explore NQuestions Engine",
        subtitle: "First-principles question bank and trap elimination engine for exams.",
        url: "https://www.nquestions.in/",
        icon: "Globe",
        type: "portfolio",
        actionLabel: "Engine",
      },
      {
        title: "Question Analysis Drills",
        subtitle: "Interactive cognitive puzzle and question-decoding practice environment.",
        url: "https://www.nquestions.in/#drills",
        icon: "Boxes",
        type: "products",
        actionLabel: "Drills",
      },
      {
        title: "Cognitive Patterns Blog",
        subtitle: "Analysis of question traps, false intuitions, and cognitive biases in tests.",
        url: "https://www.nquestions.in/blog",
        icon: "BookOpen",
        type: "writing",
        actionLabel: "Patterns",
      },
      {
        title: "Trap Elimination Framework",
        subtitle: "Systematic methodology to isolate correct answers under high time pressure.",
        url: "https://www.nquestions.in/#framework",
        icon: "FileText",
        type: "framework",
        actionLabel: "Framework",
      },
      {
        title: "Contact Question Team",
        subtitle: "Inquire about question sets, contributor openings, and platform access.",
        url: "mailto:questions@nquestions.in",
        icon: "Send",
        type: "contact",
        actionLabel: "Contact",
      },
    ],
    sections: buildOrgDirectory({
      website: { subtitle: "nquestions.in", url: "https://www.nquestions.in/" },
      projects: { subtitle: "nquestions.in/#drills", url: "https://www.nquestions.in/#drills" },
      blog: { subtitle: "nquestions.in/blog", url: "https://www.nquestions.in/blog" },
      playStore: { subtitle: "play.google.com/nquestions", url: "https://play.google.com/store/apps/developer?id=NQuestions" },
      appStore: { subtitle: "apps.apple.com/nquestions", url: "https://apps.apple.com/developer/nquestions" },
      github: { subtitle: "github.com/nquestions", url: "https://github.com/nquestions" },
      credly: { subtitle: "credly.com/nquestions", url: "https://www.credly.com/organizations/nquestions/badges" },
      hackerRank: { subtitle: "hackerrank.com/nquestions", url: "https://www.hackerrank.com/nquestions" },
      harkirat: { subtitle: "100xdevs.com/nquestions", url: "https://100xdevs.com" },
      codeChef: { subtitle: "codechef.com/users/nquestions", url: "https://www.codechef.com/users/nquestions" },
      codeforces: { subtitle: "codeforces.com/profile/nquestions", url: "https://codeforces.com/profile/nquestions" },
      kaggle: { subtitle: "kaggle.com/nquestions", url: "https://www.kaggle.com/nquestions" },
      whatsappChannel: { subtitle: "whatsapp.com/channel/nquestions", url: "https://whatsapp.com/channel/nquestions" },
      whatsappChat: { subtitle: "+91 9509923340", url: "https://wa.me/919509923340" },
      telegram: { subtitle: "t.me/nquestions_in", url: "https://t.me/nquestions_in" },
      discord: { subtitle: "discord.gg/nquestions", url: "https://discord.gg/nquestions" },
      linkedin: { subtitle: "linkedin.com/company/nquestions", url: "https://www.linkedin.com/company/nquestions" },
      youtube: { subtitle: "youtube.com/@nquestions_in", url: "https://www.youtube.com/@nquestions_in" },
      twitter: { subtitle: "x.com/nquestions_in", url: "https://x.com/nquestions_in" },
      threads: { subtitle: "threads.net/@nquestions.in", url: "https://www.threads.net/@nquestions.in" },
      instagram: { subtitle: "instagram.com/nquestions.in", url: "https://www.instagram.com/nquestions.in" },
      facebook: { subtitle: "facebook.com/nquestions", url: "https://www.facebook.com/nquestions" },
      reddit: { subtitle: "reddit.com/r/nquestions", url: "https://www.reddit.com/r/nquestions" },
      quora: { subtitle: "quora.com/topic/NQuestions", url: "https://www.quora.com/topic/NQuestions" },
      pinterest: { subtitle: "pinterest.com/nquestions", url: "https://www.pinterest.com/nquestions" },
      gmail: { subtitle: "nquestions@gmail.com", url: "mailto:nquestions@gmail.com" },
      webmail: { subtitle: "questions@nquestions.in", url: "mailto:questions@nquestions.in" },
    }),
  }
]

// Click Analytics Tracker (Safely hooks into PostHog, Google Analytics / gtag, or Vercel Analytics if configured)
export const trackLinkClick = ({
  linkLabel,
  linkCategory,
  linkDestinationType,
  placement = 'directory',
  url = ''
}) => {
  try {
    if (typeof window === 'undefined') return

    // Strip URL query parameters for privacy & clean analytics
    const sanitizedUrl = url ? url.split('?')[0] : ''

    const eventPayload = {
      link_label: linkLabel,
      link_category: linkCategory,
      link_destination_type: linkDestinationType,
      placement, // 'featured' | 'directory'
      url: sanitizedUrl,
      timestamp: new Date().toISOString()
    }

    // 1. PostHog if initialized
    if (window.posthog && typeof window.posthog.capture === 'function') {
      window.posthog.capture('linktree_link_clicked', eventPayload)
      return
    }

    // 2. Google Analytics (gtag)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'linktree_link_clicked', eventPayload)
      return
    }

    // 3. Vercel Analytics (window.va)
    if (window.va && typeof window.va === 'function') {
      window.va('event', { name: 'linktree_link_clicked', data: eventPayload })
      return
    }

    // 4. Safe development feedback
    if (process.env.NODE_ENV === 'development') {
      console.debug('[Linktree Analytics] linktree_link_clicked:', eventPayload)
    }
  } catch (err) {
    // Analytics failure must never prevent navigation or throw errors
  }
}

export default function LinktreePage() {
  const [selectedOrgId, setSelectedOrgId] = useState("nileshnama")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeMenuIndex, setActiveMenuIndex] = useState(null)
  const [isDark, setIsDark] = useState(false)
  const [toastMessage, setToastMessage] = useState(null)
  const dropdownRef = useRef(null)

  const activeOrg = ORGANIZATIONS_DATA.find((org) => org.id === selectedOrgId) || ORGANIZATIONS_DATA[0]

  // Sync theme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDarkTheme = document.documentElement.classList.contains('dark') || localStorage.theme === 'dark'
      setIsDark(isDarkTheme)
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDark(true)
    }
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false)
      }
      setActiveMenuIndex(null)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Toast handler
  const triggerToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 2800)
  }

  // Copy link
  const handleCopyLink = (url, name) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url)
      triggerToast(`Copied ${name} link!`)
    }
    setActiveMenuIndex(null)
  }

  // Handle Share Current Page
  const handleSharePage = () => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href
      if (navigator.share) {
        navigator.share({
          title: `${activeOrg.name} | Linktree`,
          text: activeOrg.tagline,
          url: currentUrl
        }).catch(() => {
          handleCopyLink(currentUrl, activeOrg.name)
        })
      } else {
        handleCopyLink(currentUrl, activeOrg.name)
      }
    }
  }

  return (
    <main className="linktree-root min-h-screen w-full font-inter bg-[#f0f2f5] dark:bg-[#0c121e] text-slate-900 dark:text-slate-100 flex items-center justify-center py-0 sm:py-6 md:py-10 lg:py-12 px-0 sm:px-4 md:px-6 transition-colors duration-300 relative selection:bg-[#509187] selection:text-white overflow-x-hidden">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 z-50 left-1/2 -translate-x-1/2 bg-slate-950/95 text-white px-5 py-2.5 rounded-full shadow-2xl backdrop-blur-md text-sm font-bold flex items-center gap-2 border border-white/20"
          >
            <Check className="w-4 h-4 text-[#509187]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Centered Profile Card Gateway Wrapper (Fluid on Mobile, Elevated & Scaled on Tablet/Desktop) */}
      <div className="w-full sm:max-w-[580px] md:max-w-[680px] lg:max-w-[720px] min-h-screen sm:min-h-0 bg-white dark:bg-[#161f30] sm:rounded-[32px] md:rounded-[36px] shadow-[0_12px_45px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_45px_rgba(0,0,0,0.5)] border-0 sm:border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between overflow-hidden relative transition-all duration-300">
        
        {/* Subtle Background Header Glow */}
        <div 
          className={`absolute top-0 inset-x-0 h-72 sm:h-80 bg-gradient-to-b ${activeOrg.bgTint} pointer-events-none opacity-60 dark:opacity-40 transition-colors duration-500`}
        />

        {/* Inner Content Area */}
        <div className="relative z-10 px-4 xs:px-5 sm:px-7 md:px-9 pt-5 sm:pt-7 md:pt-8 pb-7 sm:pb-9 md:pb-10 flex-1 flex flex-col">
          
          {/* 🌟 TOP BAR: COMPACT & MODERN DROPDOWN SELECTOR (Full Width Symmetrical Alignment) */}
          <div className="w-full relative mb-5" ref={dropdownRef}>
            {/* Compact Modern Trigger Capsule Spanning Full Symmetric Width */}
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              type="button"
              className={`w-full flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border-2 ${
                isDropdownOpen 
                  ? 'border-black shadow-[3px_3px_0px_#1D4ED8]' 
                  : 'border-black/20 dark:border-white/20 hover:border-black dark:hover:border-[#FFD214] hover:shadow-[2.5px_2.5px_0px_#1D4ED8]'
              } transition-all duration-200 focus:outline-none`}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
            >
              <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 overflow-hidden pr-2">
                <div 
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-2 border-black shrink-0 bg-[#FFD214] flex items-center justify-center shadow-[1px_1px_0px_#1D4ED8]"
                >
                  <Image
                    src={activeOrg.avatar}
                    alt={activeOrg.name}
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <span className="text-xs sm:text-[13px] md:text-sm font-extrabold text-slate-950 dark:text-white tracking-tight truncate">
                  {activeOrg.number}. {activeOrg.name}
                </span>

                <span className="px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider bg-[#FFD214] text-black border-2 border-black shadow-[1.5px_1.5px_0px_#1D4ED8] shrink-0">
                  {activeOrg.id === 'nileshnama' ? 'Founder' : activeOrg.id === 'vebglitch' ? 'Studio' : activeOrg.id === 'nncohorts' ? 'Cohorts' : activeOrg.id === 'vebskills' ? 'Simulation' : activeOrg.id === 'interviewers' ? 'Interviews' : 'Questions'}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0 pl-1 sm:pl-2">
                <span className="text-[11px] sm:text-xs text-black dark:text-white font-extrabold hidden sm:inline">
                  Switch Org
                </span>
                <div className={`w-5.5 h-5.5 rounded-full border-2 border-black bg-[#FFD214] text-black flex items-center justify-center shadow-[1.5px_1.5px_0px_#1D4ED8] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </button>

            {/* Compact Floating Dropdown Menu Overlay with Categorized Groups (Main & Products) */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 right-0 mt-2 z-40 bg-white dark:bg-slate-900 rounded-2xl shadow-[4px_5px_0px_#1D4ED8] border-2 border-black p-2.5 overflow-hidden space-y-2"
                  role="listbox"
                >
                  {["Main", "Products"].map((groupName, gIdx) => {
                    const groupOrgs = ORGANIZATIONS_DATA.filter((org) => org.group === groupName)
                    if (groupOrgs.length === 0) return null

                    return (
                      <div key={groupName} className={gIdx > 0 ? "pt-2 border-t-2 border-black/10 dark:border-white/10" : ""}>
                        {/* Group Header Label */}
                        <div className="px-2.5 py-1 flex items-center justify-between text-[11px] font-black uppercase tracking-[0.22em] text-slate-700 dark:text-slate-300">
                          <span>{groupName}</span>
                          <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#FFD214] text-black border-2 border-black shadow-[1.5px_1.5px_0px_#1D4ED8]">
                            {groupOrgs.length} {groupName === "Products" ? "Products" : "Entities"}
                          </span>
                        </div>

                        {/* Group Items */}
                        <div className="space-y-1 mt-1">
                          {groupOrgs.map((org) => {
                            const isSelected = org.id === selectedOrgId
                            return (
                              <button
                                key={org.id}
                                onClick={() => {
                                  setSelectedOrgId(org.id)
                                  setIsDropdownOpen(false)
                                  triggerToast(`Switched to ${org.name}`)
                                }}
                                type="button"
                                role="option"
                                aria-selected={isSelected}
                                className={`w-full flex items-center justify-between px-3 py-2 sm:py-2.5 rounded-xl text-left transition-all ${
                                  isSelected 
                                    ? 'bg-[#FFD214] text-black border-2 border-black font-black shadow-[2.5px_2.5px_0px_#1D4ED8]' 
                                    : 'border-2 border-transparent hover:border-black/20 hover:bg-[#FFD214]/15 text-slate-800 dark:text-slate-200 font-bold'
                                }`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0 flex-1 overflow-hidden">
                                  <div 
                                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border-2 shrink-0 ${
                                      isSelected ? 'border-black bg-white shadow-[1px_1px_0px_#1D4ED8]' : 'border-black/30 bg-white'
                                    }`}
                                  >
                                    <Image
                                      src={org.avatar}
                                      alt={org.name}
                                      width={24}
                                      height={24}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="min-w-0 flex-1 flex items-center gap-2 overflow-hidden">
                                    <span className={`text-xs sm:text-[13px] md:text-sm tracking-tight shrink-0 ${isSelected ? 'font-black text-black' : 'font-extrabold text-slate-950 dark:text-white'}`}>
                                      {org.number}. {org.name}
                                    </span>
                                    <span className={`text-[11px] font-medium hidden sm:inline truncate ${isSelected ? 'text-black/80 font-bold' : 'text-slate-500 dark:text-slate-400'}`}>
                                      • {org.tagline}
                                    </span>
                                  </div>
                                </div>

                                {isSelected && (
                                  <Check className="w-4 h-4 text-black stroke-[3] shrink-0 ml-2" />
                                )}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile Header (2-Column Symmetrical Layout: Left-Aligned Avatar & Right-Side Details) */}
          <div className="w-full flex items-center gap-3.5 sm:gap-5 md:gap-6 mt-1 mb-6 sm:mb-7 text-left">
            
            {/* Left Column: Avatar with Neo-Pop Yellow Ring + Black Border + Blue Shadow */}
            <motion.div 
              key={activeOrg.id}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative shrink-0 group cursor-pointer"
              onClick={() => setIsDropdownOpen(prev => !prev)}
            >
              <div 
                className="w-18 h-18 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full p-1 bg-[#FFD214] border-2 border-black shadow-[3px_3.5px_0px_#1D4ED8] group-hover:shadow-[4px_4.5px_0px_#1D4ED8] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-all duration-200 overflow-hidden"
              >
                <Image
                  src={activeOrg.avatar}
                  alt={activeOrg.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover rounded-full border border-black/20"
                  priority
                />
              </div>

              {/* Number Badge on Avatar: Neo-Pop Yellow pill with black border & blue shadow */}
              <div 
                className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-[#FFD214] text-black text-[10.5px] sm:text-[11.5px] font-black flex items-center justify-center border-2 border-black shadow-[1.5px_1.5px_0px_#1D4ED8]"
              >
                {activeOrg.number}
              </div>
            </motion.div>

            {/* Right Column: Name, Badge & Tagline (Left-Aligned with Crisp High-Contrast Typography) */}
            <motion.div
              key={`title-${activeOrg.id}`}
              initial={{ x: 8, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-1 sm:space-y-1.5 min-w-0 flex-1"
            >
              {/* Badge Tagline with Crisp Letter-Spacing & Neo-Pop Palette */}
              <p className="text-[10px] sm:text-xs md:text-[12.5px] font-black tracking-[0.24em] uppercase text-black dark:text-[#FFD214] truncate">
                {activeOrg.badge}
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-slate-950 dark:text-white tracking-tight flex items-center gap-1.5 sm:gap-2 leading-none">
                <span className="truncate">{activeOrg.name}</span>
                <TwitterVerifiedBadge className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 shrink-0" />
              </h1>

              <p className="text-xs sm:text-[13.5px] md:text-sm text-slate-700 dark:text-slate-200 font-semibold leading-snug tracking-tight line-clamp-2">
                {activeOrg.tagline}
              </p>
            </motion.div>
          </div>

          {/* ─── Layer 1: Personal Brand Navigation (EXPLORE MY WORK) ─── */}
          {activeOrg.featuredDestinations && activeOrg.featuredDestinations.length > 0 && (
            <div className="w-full space-y-2.5 sm:space-y-3 mt-1 mb-2">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFD214] border border-black shadow-[1px_1px_0px_#1D4ED8] shrink-0" />
                  <h2 className="text-xs sm:text-[12.5px] md:text-[13px] font-extrabold tracking-[0.24em] text-slate-950 dark:text-white uppercase truncate">
                    {activeOrg.id === 'nileshnama' ? 'EXPLORE MY WORK' : `EXPLORE ${activeOrg.name.toUpperCase()}`}
                  </h2>
                </div>
                <span 
                  className="text-[10px] sm:text-[10.5px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#FFD214] text-black border-2 border-black shadow-[1.5px_1.5px_0px_#1D4ED8] shrink-0"
                >
                  Priority
                </span>
              </div>

              <div className="flex flex-col gap-2.5 sm:gap-3">
                {activeOrg.featuredDestinations.map((dest, idx) => {
                  const isExternal = dest.url.startsWith('http') || dest.url.endsWith('.pdf') || dest.url.startsWith('mailto')
                  return (
                    <motion.a
                      key={dest.title}
                      href={dest.url}
                      target={isExternal && !dest.url.startsWith('mailto') ? '_blank' : '_self'}
                      rel={isExternal && !dest.url.startsWith('mailto') ? 'noopener noreferrer' : undefined}
                      onClick={() => {
                        trackLinkClick({
                          linkLabel: dest.title,
                          linkCategory: 'Featured Destinations',
                          linkDestinationType: dest.type || 'featured',
                          placement: 'featured',
                          url: dest.url,
                        })
                      }}
                      whileHover={{ y: -3, scale: 1.008 }}
                      whileTap={{ scale: 0.99 }}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.28,
                        delay: idx * 0.04,
                        type: "spring",
                        stiffness: 420,
                        damping: 26
                      }}
                      className="group relative rounded-2xl bg-white/95 dark:bg-slate-900/85 backdrop-blur-md border-2 border-black/15 dark:border-white/15 p-3 sm:p-3.5 md:p-4 flex items-center justify-between gap-3 sm:gap-3.5 shadow-[0_2px_14px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_18px_rgba(0,0,0,0.28)] hover:shadow-[0_12px_28px_-4px_rgba(255,210,20,0.25),0_4px_12px_-2px_rgba(29,78,216,0.18)] hover:border-black dark:hover:border-[#FFD214] transition-all duration-300 overflow-hidden"
                    >
                      {/* Left Edge Accent Bar - Matches Button Neo-Pop Yellow */}
                      <div 
                        className="absolute left-0 top-2.5 bottom-2.5 w-1.5 rounded-r-full bg-[#FFD214] border-r border-black/30 group-hover:w-2 group-hover:bg-[#FFD214] shadow-[1px_0px_4px_rgba(255,210,20,0.6)] transition-all duration-300"
                      />

                      {/* Ambient Glow Background on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD214]/[0.10] via-[#1D4ED8]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className="relative z-10 flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1 pl-1">
                        {/* Prominent Icon Capsule */}
                        <div 
                          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl flex items-center justify-center shrink-0 border-2 border-black/20 group-hover:border-black bg-[#FFD214]/15 group-hover:bg-[#FFD214] text-slate-900 group-hover:text-black shadow-2xs group-hover:shadow-[2px_2px_0px_#1D4ED8] group-hover:scale-106 transition-all duration-300"
                        >
                          <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 inline-flex">
                            {getFeaturedIcon(dest.icon, "w-4.5 h-4.5 sm:w-5 sm:h-5")}
                          </span>
                        </div>

                        {/* Title & One-Line Description with Crisp Bold Typography */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <h3 className="text-sm sm:text-[15.5px] md:text-base font-extrabold text-slate-950 dark:text-white tracking-tight truncate group-hover:text-black dark:group-hover:text-[#FFD214] transition-colors">
                              {dest.title}
                            </h3>
                            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 shrink-0 font-mono tracking-wider">
                              0{idx + 1}
                            </span>
                          </div>
                          <p className="text-[11.5px] sm:text-xs md:text-[12.5px] font-medium text-slate-600 dark:text-slate-300 line-clamp-1 mt-0.5 tracking-normal leading-snug group-hover:text-slate-800 dark:group-hover:text-slate-100 transition-colors">
                            {dest.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Interactive External Indicator Pill Button (Neo-Pop Yellow + Black Border + Electric Blue Shadow) */}
                      <div className="relative z-10 flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#FFD214] text-black font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider border-2 border-black shadow-[2.5px_3px_0px_#1D4ED8] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] group-hover:shadow-[3.5px_4px_0px_#1D4ED8] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[1px_1px_0px_#1D4ED8] transition-all duration-200 shrink-0">
                        <span className="font-extrabold text-black">
                          {dest.actionLabel || (dest.url.endsWith('.pdf') ? 'PDF' : 'View')}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-black stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          )}

          {/* ─── Top Horizontal Divider Line 1 (Layer 2 Directory) ─── */}
          <div className="w-full my-6 sm:my-7 flex items-center gap-2 sm:gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FFD214]/60 to-[#FFD214]/30" />
            <div className="flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#FFD214] border-2 border-black text-black text-[10.5px] sm:text-[11px] font-black uppercase tracking-[0.22em] shadow-[2px_2px_0px_#1D4ED8] shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              <span>Links & Profiles</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#FFD214]/60 to-[#FFD214]/30" />
          </div>

          {/* 🔗 Dynamic Categorized Links Section (Between the 2 Horizontal Lines) */}
          <div className="space-y-6 sm:space-y-7 flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOrg.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 sm:space-y-7"
              >
                {activeOrg.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-3 sm:space-y-3.5">
                    
                    {/* Category Title Header: Highlighted Modern Banner with Professional Vector Icon */}
                    <div className="flex items-center justify-between px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-r from-slate-100/95 via-slate-50/70 to-transparent dark:from-slate-800/85 dark:via-slate-800/45 dark:to-transparent border-2 border-black/15 dark:border-white/15 shadow-2xs backdrop-blur-xs">
                      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                        {/* Professional Category Vector Icon Capsule */}
                        <div 
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 border-2 border-black bg-[#FFD214] text-black shadow-[2px_2px_0px_#1D4ED8]"
                        >
                          {getCategoryIcon(section.categoryIcon, "w-3.5 h-3.5 sm:w-4 sm:h-4 text-black stroke-[2.5]")}
                        </div>

                        {/* Highlighted Clean Title with Bold Professional Typography */}
                        <h2 className="text-[12.5px] sm:text-[13.5px] md:text-sm font-extrabold tracking-wide text-slate-950 dark:text-white uppercase truncate">
                          {section.title}
                        </h2>
                      </div>

                      {/* Link Count Badge */}
                      <span 
                        className="text-[10px] sm:text-[10.5px] font-black px-2.5 py-0.5 rounded-full bg-[#FFD214] text-black border-2 border-black shadow-[1.5px_1.5px_0px_#1D4ED8] shrink-0"
                      >
                        {section.items.length} links
                      </span>
                    </div>

                    {/* Section Cards: Modern Glassmorphic Animated 2-Column Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      {section.items.map((item, iIdx) => (
                        <motion.a
                          key={iIdx}
                          href={item.url}
                          target={item.url.startsWith('http') || item.url.startsWith('mailto') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          onClick={() => {
                            trackLinkClick({
                              linkLabel: item.title,
                              linkCategory: section.title,
                              linkDestinationType: item.icon || 'directory',
                              placement: 'directory',
                              url: item.url,
                            })
                          }}
                          whileHover={{ y: -3, scale: 1.012 }}
                          whileTap={{ scale: 0.985 }}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.28, 
                            delay: (iIdx % 8) * 0.035,
                            type: "spring", 
                            stiffness: 420, 
                            damping: 26 
                          }}
                          className="group relative rounded-2xl bg-white/85 dark:bg-slate-900/80 backdrop-blur-md border-2 border-black/10 dark:border-white/10 p-3 sm:p-3.5 md:p-4 flex items-center justify-between gap-3 sm:gap-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_32px_-4px_rgba(255,210,20,0.25),0_4px_12px_-2px_rgba(29,78,216,0.18)] hover:border-black dark:hover:border-[#FFD214] transition-all duration-300 overflow-hidden"
                        >
                          {/* Ambient Glow Background on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD214]/[0.08] via-[#1D4ED8]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                          <div className="relative z-10 flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                            {/* App-Tile Style Brand Icon Container */}
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-xs bg-slate-50 dark:bg-slate-800/90 border-2 border-black/15 group-hover:border-black group-hover:bg-[#FFD214]/20 group-hover:shadow-[2px_2px_0px_#1D4ED8] group-hover:scale-108 transition-all duration-300">
                              <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 inline-flex text-slate-900 dark:text-white group-hover:text-black">
                                {getIconComponent(item.icon, "text-inherit")}
                              </span>
                            </div>

                            {/* Title & Clean Subtitle with Bold Crisp Typography */}
                            <div className="min-w-0 flex-1 overflow-hidden">
                              <h3 className="text-[13px] sm:text-[14px] font-extrabold text-slate-950 dark:text-white tracking-tight truncate group-hover:text-black dark:group-hover:text-[#FFD214] transition-colors leading-snug">
                                {item.title}
                              </h3>

                              <p className="text-[11px] sm:text-[11.5px] md:text-xs font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5 tracking-normal group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>

                          {/* Interactive External Link Pill (Neo-Pop Yellow + Black Border + Blue Shadow) */}
                          <div className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFD214] border-2 border-black text-black shadow-[2px_2.5px_0px_#1D4ED8] flex items-center justify-center font-extrabold group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] group-hover:shadow-[3px_3.5px_0px_#1D4ED8] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#1D4ED8] transition-all duration-200 shrink-0">
                            <ExternalLink className="w-3.5 h-3.5 text-black stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                          </div>
                        </motion.a>
                      ))}
                    </div>

                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─── Bottom Horizontal Divider Line 2 ─── */}
          <div className="w-full my-6 sm:my-7 flex items-center gap-2 sm:gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-slate-200 dark:to-slate-800" />
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD214] border-2 border-black text-black text-[10px] sm:text-[10.5px] font-black uppercase tracking-[0.22em] shadow-[2px_2px_0px_#1D4ED8] shrink-0">
              <Check className="w-3.5 h-3.5 text-black stroke-[3]" />
              <span>27 Verified Links</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 dark:via-slate-700 to-slate-200 dark:to-slate-800" />
          </div>

          {/* Bottom Button matching Neo-Pop Yellow Button Style & Footer */}
          <div className="mt-7 sm:mt-8 text-center space-y-3.5 sm:space-y-4">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#FFD214] text-black text-xs sm:text-sm font-extrabold uppercase tracking-wider border-2 border-black shadow-[3px_3.5px_0px_#1D4ED8] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[4.5px_5px_0px_#1D4ED8] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[1px_1px_0px_#1D4ED8] transition-all duration-200"
              >
                <span className="font-extrabold text-black">Back to Nilesh's Main Portfolio</span>
                <span className="text-xs font-black text-black">↗</span>
              </Link>
            </div>

            <p className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide pt-1">
              © Nilesh Nama. All rights reserved.
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}
