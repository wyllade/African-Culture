'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

type Quiz = {
  title: string
  questions: { question: string; options: string[]; correct: number }[]
}

const quizzes: Record<string, Quiz> = {
  'which-country': {
    title: 'Which African country should you visit?',
    questions: [
      { question: 'What kind of landscape do you prefer?', options: ['Safari and savannah', 'Beaches and coast', 'Mountains and highlands', 'Deserts and dunes'], correct: 0 },
      { question: 'What is your ideal travel activity?', options: ['Wildlife viewing', 'Cultural festivals', 'Hiking and trekking', 'Historical sites'], correct: 1 },
      { question: 'What type of food appeals to you?', options: ['Grilled meats and ugali', 'Spicy stews and rice', 'Injera and wat', 'Tagines and couscous'], correct: 2 },
      { question: 'Which vibe do you prefer?', options: ['Rustic and natural', 'Vibrant and urban', 'Ancient and spiritual', 'Warm and hospitable'], correct: 0 },
    ],
  },
  'guess-dish': {
    title: 'Guess the African Dish',
    questions: [
      { question: 'This East African staple is made from maize flour and water, served with stews and vegetables.', options: ['Fufu', 'Ugali', 'Injera', 'Banku'], correct: 1 },
      { question: 'A spicy West African rice dish cooked with tomatoes, peppers, and seasonings.', options: ['Jollof Rice', 'Pilau', 'Biryani', 'Fried Rice'], correct: 0 },
      { question: 'This Ethiopian spongy flatbread is made from teff flour and used as a plate.', options: ['Lahoh', 'Injera', 'Kisra', 'Dosa'], correct: 1 },
      { question: 'South African grilled meat, similar to barbecue, often enjoyed socially.', options: ['Nyama Choma', 'Suya', 'Braai', 'Biltong'], correct: 2 },
    ],
  },
  'guess-tribe': {
    title: 'Guess the African Tribe',
    questions: [
      { question: 'Known for their red shúkà blankets, jumping dance, and semi-nomadic pastoralism.', options: ['Zulu', 'Maasai', 'Yoruba', 'Himba'], correct: 1 },
      { question: 'Famous for kente cloth, golden stools, and the Sankofa concept.', options: ['Akan', 'Igbo', 'Oromo', 'Mande'], correct: 0 },
      { question: 'Warrior kingdom under King Shaka, known for beadwork and reed dance.', options: ['Xhosa', 'Zulu', 'Swazi', 'Ndebele'], correct: 1 },
      { question: 'Known for agbada attire, Ife art, and the Orisha spiritual system.', options: ['Hausa', 'Yoruba', 'Igbo', 'Fulani'], correct: 1 },
    ],
  },
}

const quizKeys = Object.keys(quizzes)

export default function QuizPage() {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null)
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [finished, setFinished] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)

  const quiz = activeQuiz ? quizzes[activeQuiz] : null

  const startQuiz = (key: string) => {
    setActiveQuiz(key)
    setCurrentQ(0)
    setScore(0)
    setAnswered(false)
    setFinished(false)
    setSelected(null)
  }

  const handleAnswer = (index: number) => {
    if (answered) return
    setSelected(index)
    setAnswered(true)
    if (index === quiz?.questions[currentQ].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (quiz && currentQ < quiz.questions.length - 1) {
      setCurrentQ(currentQ + 1)
      setAnswered(false)
      setSelected(null)
    } else {
      setFinished(true)
    }
  }

  if (!activeQuiz || !quiz) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Cultural Quizzes</h1>
          <p className="mt-2 text-stone-500">Test your knowledge of African culture</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quizKeys.map((key) => (
            <button key={key} onClick={() => startQuiz(key)} className="text-left">
              <Card className="h-full">
                <CardContent className="p-6">
                  <Badge variant="primary">Quiz</Badge>
                  <h3 className="font-semibold text-lg mt-3">{quizzes[key].title}</h3>
                  <p className="text-sm text-stone-500 mt-2">{quizzes[key].questions.length} questions</p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (finished) {
    const percentage = Math.round((score / quiz.questions.length) * 100)
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold">{quiz.title}</h2>
            <div className="mt-6">
              <span className="text-6xl font-bold text-primary">{score}</span>
              <span className="text-2xl text-stone-400">/{quiz.questions.length}</span>
            </div>
            <p className="mt-4 text-lg">
              {percentage >= 80 ? 'Excellent! You know your African culture!' :
               percentage >= 60 ? 'Good job! Keep exploring!' :
               'Keep exploring AfroSphere to learn more!'}
            </p>
            <Button onClick={() => setActiveQuiz(null)} className="mt-6">
              Try Another Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const q = quiz.questions[currentQ]

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
      <button onClick={() => setActiveQuiz(null)} className="text-sm text-stone-500 hover:text-primary mb-6 inline-block">
        &larr; All Quizzes
      </button>

      <div className="mb-6 flex items-center justify-between">
        <Badge variant="primary">Question {currentQ + 1} of {quiz.questions.length}</Badge>
        <span className="text-sm text-stone-500">Score: {score}</span>
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-6">{q.question}</h2>
          <div className="space-y-3">
            {q.options.map((option, i) => {
              let className = 'w-full text-left p-4 rounded-lg border transition-colors text-sm md:text-base'
              if (answered) {
                if (i === q.correct) {
                  className += ' border-green-500 bg-green-50 dark:bg-green-950/30 text-green-700'
                } else if (i === selected) {
                  className += ' border-red-500 bg-red-50 dark:bg-red-950/30 text-red-700'
                } else {
                  className += ' border-stone-200 dark:border-stone-700 opacity-50'
                }
              } else {
                className += ' border-stone-200 dark:border-stone-700 hover:border-primary hover:bg-stone-50 dark:hover:bg-stone-800'
              }
              return (
                <motion.button
                  key={i}
                  whileHover={answered ? {} : { scale: 1.01 }}
                  whileTap={answered ? {} : { scale: 0.99 }}
                  onClick={() => handleAnswer(i)}
                  className={className}
                  disabled={answered}
                >
                  {option}
                </motion.button>
              )
            })}
          </div>

          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              <Button onClick={nextQuestion} className="w-full">
                {currentQ < quiz.questions.length - 1 ? 'Next Question' : 'See Results'}
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
