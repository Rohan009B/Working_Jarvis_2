import speech_recognition as sr
import pyttsx3
import eel

@eel.expose
def takeCommand():
    r = sr.Recognizer()
    with sr.Microphone() as sources:
        print("Listening......")
        eel.DisplayMessage("Listening......")
        eel.sleep(0.1)   # 🔑 let frontend update UI before blocking
        r.pause_threshold = 1
        r.adjust_for_ambient_noise(sources)
        audio = r.listen(sources, 10, 6)
    try:
        print('Recognizing.....')
        eel.DisplayMessage("Recognizing......")
        query = r.recognize_google(audio, language='en-in')   # better to use google instead of bing
        print(f'User Said : {query}')
        eel.DisplayMessage(query)
        speck(query)
        eel.ShadowHood()
    except Exception as e:
        print("Sorry, I didn't catch that.")
        return ""
    
    return query.lower()

def speck(text):
    engine = pyttsx3.init()
    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[0].id)  # 0 = male, 1 = female
    engine.setProperty('rate', 170)
    engine.say(text)
    engine.runAndWait()

# Run
# text = takeCommand()
# if text:
#     speck(text)
